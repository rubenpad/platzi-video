import Home from '../containers/Home';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import Player from '../containers/Player';
import NotFound from '../components/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/signin',
    component: Signin,
    exact: true,
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
  },
  {
    path: '/player/:id',
    component: Player,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
