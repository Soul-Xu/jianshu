import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
`
export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`
export const Content = styled.div`
  color: #2f2f2f;
  text-align: center;
  img {
    width: 500px;
    height: 678px;
  }
  p.img-caption {
    width: 500px;
    height: 22px;
    line-height: 22px;
    padding: 10px;
    margin: 0 auto;
    border-bottom: 1px solid #d9d9d9;
    font-size: 14px;
    color: #969696;
  }
  p.content-blank {
    margin: 0 0 25px;
  }
  p.content-main {
    font-size: 16px;
    color: #2f2f2f;
    font-weight: 400;
    margin: 0 0 25px;
    line-height: 38px;
    text-align: left;
  }
`

