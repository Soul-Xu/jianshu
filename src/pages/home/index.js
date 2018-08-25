import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
          src="//upload.jianshu.io/admin_banners/web_images/4419/31f60ec4cc01cfe02c5bc09bff208d58f2799c3e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}