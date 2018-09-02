import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 16px;
  margin-bottom: 16px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
   width: 500px;
   float: left;
   .title {
     line-height: 27px;
     font-size: 18px;
     font-weight: bold;
     color: #333;
   }
   .desc {
    line-height: 24px;
     font-size: 13px;
     color: #999;
   }
`
export const RecommendWrapper = styled.div`
   margin: 30px 0;
   width: 280px;
`
export const RecommendItem = styled.div`
   width: 280px;
   height: 50px;
   background: url(${(props) => props.imgUrl});
   background-size: contain;
`
export const WriterWrapper = styled.div`
   width: 278px;
   line-height: 300px;
   border-radius: 3px;
   text-align: center;
   padding-bottom: 5px;
   
`
export const WriterHeader = styled.div`
  overflow: hidden;
  width: 278px;
  height: 60px;
  line-height: 60px;  
  border-bottom: 1px solid #dcdcdc;
`
export const WriterRecommend = styled.div`
  width: 100px;
  height: 60px;
  line-height: 60px;
  float: left
  font-size: 14px;
`
export const WriterInfoSwitch = styled.div`
  width: 100px;
  height: 30px;
  line-height: 60px;
  float: right;
  font-size: 14px;
`

export const WriterInfoList = styled.div`
  overflow: hidden;
  width: 278px;
`

export const WriterInfoListItem = styled.div`
  overflow: hidden;
  padding: 5px;
  margin-top: 5px;
  width: 278px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  .writer-pic {
    width: 50px;
    border: 1px solid #ddd;
    border-radius: 25px;
    display: block;
    float: left;
  }
  .writer-focus {
    margin-top: 5px;
    font-size: 13px;
    color: #42c02e;
  }
`

export const WriterInfoListInfo = styled.div`
  width: 150px;
  padding-left: 15px;
  padding-top: 10px;
  float: left;
  text-align: left;
  .title {
    line-height: 20px;
    font-size: 14px;
    color: #333;
  }
  .desc {
  line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const MoreInfo = styled.div`
  box-sizing: border-box;
  width: 278px;
  height: 40px;
  line-height: 30px;
  margin-top: 10px;
  padding: 7px;
  text-align: center;
  font-size: 13px;
  color: #787878;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #f7f7f7;
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  background-color: #a5a5a5;
  color: #fff;
  cursor: pointer;
`
