import React from 'react';

const STARTING_STOCK = 34;
const RESET_STOCK_AT = 17;
const STOCK_UPDATE_INTERVAL_MS = 2 * 60 * 1000;

type LiveStockContextValue = {
  stockCount: number;
};

const LiveStockContext = React.createContext<LiveStockContextValue | null>(null);

export const LiveStockProvider = ({ children }: { children: React.ReactNode }) => {
  const [stockCount, setStockCount] = React.useState(STARTING_STOCK);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setStockCount((currentStock) => {
        if (currentStock <= RESET_STOCK_AT) {
          return STARTING_STOCK;
        }

        const soldCount = Math.random() < 0.5 ? 1 : 2;
        const nextStock = currentStock - soldCount;

        return nextStock <= RESET_STOCK_AT ? STARTING_STOCK : nextStock;
      });
    }, STOCK_UPDATE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  return <LiveStockContext.Provider value={{ stockCount }}>{children}</LiveStockContext.Provider>;
};

export const useLiveStock = () => {
  const context = React.useContext(LiveStockContext);

  if (!context) {
    throw new Error('useLiveStock must be used inside LiveStockProvider');
  }

  return context;
};
