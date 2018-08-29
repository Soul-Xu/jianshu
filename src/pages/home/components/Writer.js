import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
        WriterWrapper,
        WriterHeader,
        WriterRecommend,
        WriterInfoSwitch,
        WriterInfoList,
        WriterInfoListItem,
        WriterInfoListInfo
        }
        from '../style'

class Writer extends Component {
  render() {
    const { list } = this.props
    return (
      <WriterWrapper>
        <WriterHeader>
          <WriterRecommend>
            推荐作者
          </WriterRecommend>
          <WriterInfoSwitch>
          <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
            换一批
          </WriterInfoSwitch>
        </WriterHeader>
        {
          list.map((item) => {
            return (
              <WriterInfoList>
                <WriterInfoListItem key={item.get('id')}>
                  <img className="writer-pic"
                  src={item.get('imgUrl')}
                  alt=""
                  />
                  <WriterInfoListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </WriterInfoListInfo>
                  <span className="writer-focus">
                  <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe695;</i>
                    关注
                  </span>
                </WriterInfoListItem>
              </WriterInfoList>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer)