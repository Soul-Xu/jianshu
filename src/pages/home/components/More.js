import React, { PureComponent } from 'react'
import {
      MoreInfo
      } from '../style'

export default class More extends PureComponent {
  render() {
    return (
      <MoreInfo>
        查看全部
        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
      </MoreInfo>
    )
  }
}