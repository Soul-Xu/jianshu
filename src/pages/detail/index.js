import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import {
         DetailWrapper,
         Header,
         Content
       } from './style'

class Detail extends PureComponent {
  render() {
    // console.log(this.props.title)
    // console.log(this.props.content)
    // console.log(this.props)
    // console.log(this.state)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail());
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))