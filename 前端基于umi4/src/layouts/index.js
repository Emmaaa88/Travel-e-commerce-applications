import { MenuBar } from '@/components';
import { useLocation, Outlet } from 'umi';
import { StoreProvider } from 'think-react-store';
import * as store from '../stores';

function BasicLayout(props) {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];

  return (
    <StoreProvider store={store}>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {/* {props.children} */}
      
      {/* umi4 */}
      <Outlet />
    </StoreProvider>
  );
}

export default BasicLayout;
