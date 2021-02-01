import React from 'react';
import './App.css';
import { Layout } from 'antd'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import MenuHeader from './components/Header';
import About from './components/About';
import DashboardView from './views/CandidatesView';

function App() {
  const { Content, Footer } = Layout;

  return (
    <Router>
      <Layout>
        <MenuHeader />
          <Content>
            <Switch>
              <Route exact path="/" component={DashboardView} />
            </Switch>
          </Content>
          <Footer className="footer">
            <About />
          </Footer>
      </Layout>
    </Router> 
  );
}

export default App;
