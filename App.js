import { Provider } from 'react-redux';
import store from './components/redux/store';
import AppNavigator from './components/navigator/AppNavigator';
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
