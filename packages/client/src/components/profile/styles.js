import styled from 'styled-components'
import { OverflowText } from 'global_styles'

export const Profile = styled.div`
  margin: 0;
  display: flex;
  padding: 20px;
  align-items: center;
  background-color: white;

  flex-shrink: 0;
`
export const Username = styled(OverflowText)`
  color: #222222;
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`
export const Email = styled(OverflowText)`
  color: #afafaf;
  font-size: 13px;
`
export const User = styled.div`
    background: #f5f5f5 url('${props => props.src}') top left / cover no-repeat;
    position: relative;
    height: 50px;
    width: 50px;
    flex-shrink: 0;
    border-radius: 50%;
    :after{
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      border: 2px white solid;
      position: relative;
      top: 35px;
      left: 35px;
      margin-bottom: -15px;
      background-color: ${props => {
        switch (props.status) {
          case 'online':
            return '#29cea4'
          case 'offline':
            return '#c12b2b'
          case 'busy':
            return '##ffd400'
          default:
            return '#c12b2b'
        }
      }}
`
