import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
        ListItem,
        ListInfo,
        MoreList
       } from '../style'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="list-pic" 
                src={item.get('imgUrl')} 
                alt=""
                />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <MoreList>查看更多</MoreList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps, null)(List)