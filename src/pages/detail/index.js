import React, { Component } from 'react'
import Article from './components/article'
import Comment from './components/comment'

export default class Detail extends Component {
  render() {
    return (
      <div>
        <Article />
        <Comment />
      </div>
    )
  }
}

// 修改