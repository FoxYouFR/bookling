import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import AddLoanPage from '../components/AddLoanPage';
import LibraryPage from '../components/LibraryPage';
import AddBookPage from '../components/AddBookPage';
import EditBookPage from '../components/EditBookPage';
import BookPage from '../components/BookPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddLoanPage} />
        <Route path="/library" component={LibraryPage} exact={true} />
        <Route path="/library/create" component={AddBookPage} />
        <Route path="/library/edit/:id" component={EditBookPage} />
        <Route path="/library/:id" component={BookPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;