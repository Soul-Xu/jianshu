import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '读书',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 3,
    title: '摄影',
    imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 4,
    title: '简书电影',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '谈写作|纸上电台  植根于爱的写作自带光芒',
    desc: '我终相信，生命中经历的凡此种种，都是“命运”的必然遇见。植根于内心的写作，于她，更是高山流水的灵魂遇见。 也许因为同为教师职业，当听到子皿悠悠老...',
    imgUrl: '//upload-images.jianshu.io/upload_images/9806042-b4ce64c8c3fd3e1c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 2,
    title: 'Scrapy+Redis+MySQL分布式爬取商品信息',
    desc: '源代码来自于基于Scrapy的Python3分布式淘宝爬虫，做了一些改动，对失效路径进行了更新，增加了一些内容。使用了随机User-Agent，...',
    imgUrl: '//upload-images.jianshu.io/upload_images/13230897-9625020fc5816569.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 3,
    title: '一边付出一边无奈的妈妈：放不了手的原因居然是这个',
    desc: '【1】 最近，随着综艺节目《我家那小子》的热播，演员朱雨辰意外地上了热搜，原因就是他妈妈在节目中说出来的那些惊世骇俗的话。 朱妈妈说：“我的同事...',
    imgUrl: '//upload-images.jianshu.io/upload_images/5630031-9a9d0477238d8bf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
})

export default (state = defaultState, action) => { 
  switch(action.type) {
    default: 
      return state;
  }
}