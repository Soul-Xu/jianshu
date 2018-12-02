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
<<<<<<< HEAD
    // console.log(this.props.title)
    // console.log(this.props.content)
    // console.log(this.props)
    // console.log(this.state)
=======
    console.log(this.props)
>>>>>>> 88bf31c1fcc0e0a8c718cdb484095c5f45077177
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

<<<<<<< HEAD
export default connect(mapState, mapDispatch)(withRouter(Detail))
=======
export default connect(mapState, mapDispatch)(Detail)
>>>>>>> 88bf31c1fcc0e0a8c718cdb484095c5f45077177
