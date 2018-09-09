import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import More from './components/More'
import { actionCreators } from './store'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }
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
        { this.props.showScroll
         ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
         : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
      this.props.changeHomeData()
      this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    const scrollData = document.documentElement.scrollTop
    if(scrollData > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)