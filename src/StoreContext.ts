import { createContext } from 'react';
import { Store } from './Store';

export const StoreContext = createContext<Store>(undefined as any)
