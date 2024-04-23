import styled from 'styled-components/macro'
import { COLORS } from 'styles/colors'

// SingleSelect
export const InputSection = styled.div`
  width: 454px;
`
// SingleButton
export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.isOutlined ? 'transparent' : props.color)};
  color: ${(props) => (props.isOutlined ? props.color : COLORS.white)};
  border: ${(props) => (`1px solid ${props.color}`)};
  border-radius: ${(props) => (`${props.radius}px`)};
  cursor: pointer;
  transition: 0.3s;
  width: 202px;

  &:hover {
    background-color: ${(props) => (props.isOutlined ? props.color : 'transparent')};
    color: ${(props) => (props.isOutlined ? COLORS.white : props.color)};
  }
`
