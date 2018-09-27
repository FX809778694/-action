import React,{Component} from 'react';
import {
  Link
} from 'react-router-dom'

import '../assets/css/head.css';

class HeaderNav extends Component{
  render() {
    return (
      <div className="head-nav">
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/test">测试</Link></li>
          <li><Link to="/login">登录</Link></li>
        </ul>
      </div>
    )
  }
}

export default HeaderNav