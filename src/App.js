import React from 'react'
// import Move from './components/Move'
// import Winner from './components/Winner'
// import Buy from './components/Buy'

import Home from './views/Home'
import Message from './views/Message'
import PersonalCenter from './views/PersonalCenter'
import Todo from './views/Todo'

// import { Route, BrowserRouter as Router, Routes, Link, useHistory, useLocation } from 'react-router-dom'
import { Route, BrowserRouter as Router, Routes, unstable_HistoryRouter as useHistory, useLocation } from 'react-router-dom'
import { Badge, TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import './App.css';
function App() {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
  const tabs = [
    {
      key: 'Home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'Todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'Message',
      title: '我的消息',
      icon: (active) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'PersonalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  const setRouteActive = (value) => {
    history.pushState(value)
  }

  // const [activeKey, setActiveKey] = useState('todo')

  return (
    <div className="App">
      <header className="App-header">
        <Router initialEntries={['/home']}>
          <Routes>
            <Route exact path=':home' element={<Home />} >
            </Route>
            <Route exact path=':todo' element={<Todo />}>
            </Route>
            <Route exact path=':message' element={<Message />}>
            </Route>
            <Route exact path=':me' element={<PersonalCenter />}>
            </Route>
          </Routes>
        </Router>
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
        {/* <Router>
          <ul className='navBar'>
            <li>
              <Link to="/move">Move</Link>
            </li>
            <li>
              <Link to="/winner">Winner</Link>
            </li>
            <li>
              <Link to="/buy">Buy</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/move" element={<Move />}></Route>
            <Route path="/winner" element={<Winner />}></Route>
            <Route path="/buy" element={<Buy />}></Route>
          </Routes>
        </Router> */}
      </header>
    </div>
  );
}

export default App;
