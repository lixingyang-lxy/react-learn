import React from 'react'
// import Move from './components/Move'
// import Winner from './components/Winner'
// import Buy from './components/Buy'

import Home from './views/Home'
import Message from './views/Message'
import PersonalCenter from './views/PersonalCenter'
import Todo from './views/Todo'

// import { Route, BrowserRouter as Router, Routes, Link, useHistory, useLocation } from 'react-router-dom'
// import { Route, BrowserRouter as Router, Routes, unstable_HistoryRouter as useHistory, useLocation } from 'react-router-dom'
import { Route, BrowserRouter as Router, Routes, unstable_HistoryRouter as useHistory, useLocation } from 'react-router-dom'
import { NavBar, TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import './App.css';

const Bottom = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    {
      key: '/personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]
  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)} >
      {
        tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))
      }
    </TabBar>
  )
}

// function Home() {
//   return <div>首页</div>
// }
// function Message() {
//   return <div>我的消息</div>
// }
// function PersonalCenter() {
//   return <div>个人中心</div>
// }
// function Todo() {
//   return <div>我的待办</div>
// }


function App() {
  return (
    <div className="App">
      
      <Router initialEntries={['/home']}>
        <NavBar>配合路由</NavBar>
        <Routes>
          <Route exact path='/home' component={Home} >
            {/* <Home /> */}
          </Route>
          <Route exact path='/todo' component={Todo}>
            {/* <Todo /> */}
          </Route>
          <Route exact path='/message' component={Message}>
            {/* <Message /> */}
          </Route>
          <Route exact path='/personalCenter' component={PersonalCenter}>
            {/* <PersonalCenter /> */}
          </Route>
          {/* <Bottom /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
