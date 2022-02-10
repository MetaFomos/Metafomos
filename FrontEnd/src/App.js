import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
//index
import Dashboard from './components/dashboard/Dashboard';
//include header, footer
import Header from './components/include/Header';
//auth
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//metamask connect
import Connect from './components/connect/Connect';
//profile
import Overview from './components/profile/Overview';

//setAuthToken
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';


function App() {
  //check for token in LocalStorage
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  store.dispatch(loadUser());

  // log user out from all tabs if they log out in one tab
  window.addEventListener('storage', () => {
    if (!localStorage.token) store.dispatch({ type: 'LOGOUT' });
  });

  return (
    <Provider store={store}>
      {/* <Header /> */}
      <Router>
          <Header />
            {/* <script src="https://apis.google.com/js/platform.js" async defer></script>
            <meta name="google-signin-client_id" content="860538264827-8qf2qpp6mqki8asmbpsroulb9u16un61.apps.googleusercontent.com"></meta> */}
  
          <Routes>
            <Route exact path="/" element={ <Dashboard /> } />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/register" element={ <Register /> } />
            <Route exact path="/profile/overview" element={ <Overview /> } />
            <Route exact path="/connect" element={ <Connect />  } />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
