import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
// export const useAppDispatch = () => useDispatch<AppDispatch>();
//  TODO middleware 쓰면
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
