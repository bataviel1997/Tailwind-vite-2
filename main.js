import not_found from './src/pages/404'
import addBlog from './src/pages/addBlog'
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import './style.css'


const page = window.location.pathname
const userData = localStorage.getItem('userData')


switch(page){
    case "/":
      Home()
      break

      case "/login":
        userData? window.location.href ='/' : Login()
      break

      case "/register":
        userData? window.location.href ='/' : Register()
      break

      case "/addBlog":
        userData? addBlog() : window.location.href ='/login'
      break


      default:
      not_found()
} 