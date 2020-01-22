import Home from '../containers/Home'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import Player from '../containers/Player'
import NotFound from '../components/NotFound'

function serverRoutes(isAuth) {
  return [
    {
      path: '/',
      component: isAuth ? Home : Login,
      exact: true,
    },
    {
      path: '/login',
      component: isAuth ? Home : Login,
      exact: true,
    },
    {
      path: '/signup',
      component: isAuth ? Home : Signup,
      exact: true,
    },
    {
      path: '/player/:id',
      component: isAuth ? Player : Login,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ]
}

export default serverRoutes
