import React from 'react';
import './App.css';
import { Layout } from 'antd'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import MenuHeader from './components/MenuHeader';
import AboutView from './views/AboutView';
import DashboardView from './views/DashboardView';

function App() {
  const { Content } = Layout;

  return (
    <Router>
      <Layout>
        <MenuHeader />
          <Content>
            <Switch>
              <Route exact path="/" component={DashboardView} />
              <Route path="/about" component={AboutView} />
            </Switch>
          </Content>
      </Layout>
    </Router> 
  );
}

export default App;
