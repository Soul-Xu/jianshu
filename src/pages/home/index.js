import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import More from './components/More'
import axios from 'axios'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
          src="//upload.jianshu.io/admin_banners/web_images/4419/31f60ec4cc01cfe02c5bc09bff208d58f2799c3e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
          alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
          <More />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
      }
      this.props.changeHomeData(action)   
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action)
  } 
})

export default connect(null, mapDispatchToProps)(Home)