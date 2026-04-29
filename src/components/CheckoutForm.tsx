import React, { useState } from 'react';
import { Check, Headphones, Lock, Minus, Plus, ShieldCheck, Truck } from 'lucide-react';
import productImg from '../../assets/789789789dfsdf.webp';
import { supabase } from '../lib/supabase';
import { useLiveStock } from '../hooks/useLiveStock';

type ProductVariant = {
  id: string;
  name: string;
  image: string;
  price: number;
  inStock: boolean;
};

const productVariants: ProductVariant[] = [
  {
    id: 'magnetic-gym-bag',
    name: 'Magnetic Gym Crossbody Bag',
    image: productImg,
    price: 1650,
    inStock: true,
  },
];

const CheckoutForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { stockCount } = useLiveStock();
  const [shippingCost, setShippingCost] = useState<number>(60);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({
    'magnetic-gym-bag': 1,
  });

  const handleToggleVariant = (id: string) => {
    const variant = productVariants.find((item) => item.id === id);
    if (!variant?.inStock) return;

    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id]) {
        delete newCart[id];
      } else {
        newCart[id] = 1;
      }
      return newCart;
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    const variant = productVariants.find((item) => item.id === id);
    if (!variant?.inStock) return;

    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = currentQty + delta;
      if (newQty < 1) return prev;
      return { ...prev, [id]: newQty };
    });
  };

  const selectedItems = productVariants.filter((variant) => variant.inStock && cart[variant.id]);
  const productSubtotal = selectedItems.reduce((sum, item) => sum + item.price * cart[item.id], 0);
  const total = productSubtotal + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      alert('Please select at least one product.');
      return;
    }

    const normalizedPhone = phone.trim();
    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    if (!bdPhoneRegex.test(normalizedPhone)) {
      alert('দয়া করে সঠিক ১১ ডিজিটের বাংলাদেশী মোবাইল নাম্বার দিন (যেমন: 017XXXXXXXX)।');
      return;
    }

    setIsSubmitting(true);

    try {
      const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString();

      const { data: recentOrders } = await supabase
        .from('orders')
        .select('id')
        .eq('phone', normalizedPhone)
        .gte('created_at', threeHoursAgo)
        .limit(1);

      const lastOrderTime = localStorage.getItem('last_order_time');
      const isRateLimitedByStorage = lastOrderTime && Date.now() - parseInt(lastOrderTime) < 3 * 60 * 60 * 1000;

      if ((recentOrders && recentOrders.length > 0) || isRateLimitedByStorage) {
        setShowLimitModal(true);
        setIsSubmitting(false);
        return;
      }

      const totalItems = selectedItems.reduce((sum, item) => sum + cart[item.id], 0);
      const orderedItemsJson = selectedItems.map((item) => ({
        name: item.name,
        quantity: cart[item.id],
        price: item.price,
      }));

      const orderId = `MGB-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

      const { error } = await supabase.from('orders').insert([
        {
          id: orderId,
          customer_name: name.trim(),
          phone: normalizedPhone,
          address: address.trim(),
          product_name: 'Magnetic Gym Crossbody Bag',
          ordered_items: orderedItemsJson,
          amount: total,
          items: totalItems,
          shipping_zone: shippingCost === 130 ? 'Outside dhaka' : 'Inside dhaka',
          source: 'magnetic-gym-bag-landing',
          status: 'New',
        },
      ]);

      if (error) throw error;

      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'purchase',
        ecommerce: {
          transaction_id: orderId,
          value: total,
          currency: 'BDT',
          items: orderedItemsJson.map((item) => ({
            item_name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
        order_source: 'magnetic-gym-bag-landing',
      });

      localStorage.setItem('last_order_time', Date.now().toString());
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('অর্ডার সাবমিট করতে সমস্যা হচ্ছে। দয়া করে আবার চেষ্টা করুন বা আমাদের কল করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="checkout-form" className="py-16 bg-white border-t border-gray-100 relative">
      {showLimitModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">অর্ডার লিমিট অতিক্রম করেছে!</h3>
            <p className="text-gray-600 mb-6 text-sm">
              আপনি ইতিমধ্যেই একটি অর্ডার প্লেস করেছেন। স্প্যাম রোধ করতে, দয়া করে ৩ ঘণ্টা পর আবার চেষ্টা করুন।
            </p>
            <button
              onClick={() => setShowLimitModal(false)}
              className="bg-gray-900 text-white font-bold py-3 px-8 rounded-md w-full hover:bg-gray-800 transition-colors"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <div className="mb-6 text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-accent">Place Your Order</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-950">Don’t Miss This Deal</h2>
              <p className="mt-3 font-semibold text-gray-600">Order now before stock out. Only {stockCount} pcs left.</p>
            </div>

            <div className="grid gap-4">
              {productVariants.map((variant) => {
                const isSelected = !!cart[variant.id];
                const qty = cart[variant.id] || 0;

                return (
                  <div
                    key={variant.id}
                    className={`flex items-center p-4 rounded-2xl border transition-all ${
                      isSelected ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggleVariant(variant.id)}
                      className="mr-4 cursor-pointer"
                      aria-label={`Select ${variant.name}`}
                    >
                      <span
                        className={`w-6 h-6 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-blue-800 border-blue-800 text-white' : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check size={16} strokeWidth={3} />}
                      </span>
                    </button>

                    <div className="w-16 h-16 rounded-md shadow-sm mr-4 flex-shrink-0 border border-gray-100 overflow-hidden bg-gray-50 relative">
                      <img src={variant.image} alt={variant.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-sm font-black text-gray-900">{variant.name}</h4>
                        <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-green-600 border border-green-100">
                          {stockCount} pcs left
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-200 rounded-md bg-white">
                          <button
                            type="button"
                            onClick={() => handleUpdateQuantity(variant.id, -1)}
                            disabled={!isSelected}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-gray-900">{isSelected ? qty : 1}</span>
                          <button
                            type="button"
                            onClick={() => handleUpdateQuantity(variant.id, 1)}
                            disabled={!isSelected}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-gray-900">৳{variant.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Customer Information</h3>

              <div className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-800">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hasan Mahmud"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-800">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-800">
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. House 12, Road 4, Dhanmondi, Dhaka"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[45%]">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Your Order</h3>

              <div className="flex justify-between items-center text-sm font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                <span>Product</span>
                <span>Subtotal</span>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-100 space-y-4">
                {selectedItems.length === 0 ? (
                  <p className="text-sm text-red-500 italic">No products selected.</p>
                ) : (
                  selectedItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded shadow-sm flex-shrink-0 border border-gray-100 overflow-hidden bg-gray-50">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col text-sm text-gray-600">
                          <span>{item.name}</span>
                          <span className="font-bold">× {cart[item.id]}</span>
                        </div>
                      </div>
                      <span className="font-bold text-gray-900">৳{item.price * cart[item.id]}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="font-bold text-gray-800">Subtotal</span>
                <span className="font-bold text-gray-900">৳{productSubtotal}</span>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm text-gray-800">
                    ঢাকার বাইরে ডেলিভারি চার্জ: <span className="font-bold text-teal-600">৳130</span>
                  </span>
                  <input
                    type="radio"
                    name="shipping"
                    value={130}
                    checked={shippingCost === 130}
                    onChange={() => setShippingCost(130)}
                    className="w-4 h-4 ml-2 text-accent border-gray-300 focus:ring-accent accent-purple-600 cursor-pointer"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm text-gray-800">
                    ঢাকার ভিতরে ডেলিভারি চার্জ: <span className="font-bold text-teal-600">৳60</span>
                  </span>
                  <input
                    type="radio"
                    name="shipping"
                    value={60}
                    checked={shippingCost === 60}
                    onChange={() => setShippingCost(60)}
                    className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-purple-600 cursor-pointer"
                  />
                </label>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-extrabold text-lg text-gray-900">Total</span>
                <span className="font-black text-2xl text-red-600">৳{total}</span>
              </div>

              <div className="mb-6 grid gap-2 text-sm font-bold text-gray-700">
                <div className="flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2 text-green-700">
                  <ShieldCheck size={16} />100% Quality Checked
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-2 text-blue-700">
                  <Truck size={16} />Cash on Delivery
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-2 text-orange-700">
                  <Headphones size={16} />Customer Support Available
                </div>
              </div>

              <button
                type="submit"
                disabled={selectedItems.length === 0 || isSubmitting}
                className="w-full bg-[#cc0000] hover:bg-[#a30000] disabled:bg-gray-400 text-white font-bold py-4 rounded-md shadow transition-colors flex justify-center items-center gap-2 mb-4"
              >
                <Lock size={18} />
                <span className="text-lg">{isSubmitting ? 'Processing...' : 'Confirm Order'}</span>
              </button>

              <div className="text-center text-xs text-gray-500 font-medium">
                অর্ডার করতে কোনো সমস্যা হলে কল করুন: +8801942-212267
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
