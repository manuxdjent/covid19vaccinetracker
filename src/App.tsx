import React from 'react'
import './App.css'
import { Layout } from 'antd'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import CandidatesView from './views/candidates-view'
import Footer from './components/footer/footer'
import Header from './components/header/header'


function App() {
  const { Content } = Layout;

  return (
    <Router>
      <Layout>
        <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={CandidatesView} />
            </Switch>
          </Content>
          <Footer />
      </Layout>
    </Router> 
  );
}

export default App
