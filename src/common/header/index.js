import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper,
         Logo,
         Nav,
         NavItem,
         SearchWrapper,
         NavSearch,
         SearchInfo,
         Addition,
         Button,
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames='slide'>
              <NavSearch
                className={this.props.focused ? 'focused': ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
                <i className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe60d;</i>
            <SearchInfo></SearchInfo>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe600;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

