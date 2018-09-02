import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable';

const changeHomeDate = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList
})

const addHomeList = (list) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list)
})

export const getHomeInfo = (page) => {
  return (dispatch) => {
    axios.get('/api/home.json?page=' + page).then((res) => {
      const result = res.data
      dispatch(changeHomeDate(result))
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data
      console.log(result)
      dispatch(addHomeList(result))
    })
  }
}