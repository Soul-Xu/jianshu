import React, { Component } from 'react'
import { 
        ArticleWrapper,
        ArticleHeader,
        ArticleContainer
        } from '../style'

class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <ArticleHeader>
              header
        </ArticleHeader>
        <ArticleContainer>
              container
        </ArticleContainer>
      </ArticleWrapper>
    )
  }
}

export default Article