import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// Pages
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mt-3">
        <Switch>
          <Route path="/login">
            <SignInPage />
          </Route>
          <Route path="/register">
            <SignUpPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
