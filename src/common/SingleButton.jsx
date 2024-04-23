import { COLORS } from 'styles/colors'

import * as S from './styled'

const SingleButton = ({
  text = '',
  isOutlined = false,
  color = COLORS.black,
  radius = 50,
  ...props
}) => (
  <S.Button radius={radius} color={color} isOutlined={isOutlined} {...props}>{text}</S.Button>
)

export default SingleButton
