import { useLocation, useNavigate } from 'react-router-dom'
import SingleSelect from 'common/SingleSelect'
import { industriesSelectOptions } from 'utils/constants'

import * as S from './styled'

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onChange = (option) => {
    const { href } = option

    navigate(href)
  }

  return (
    <S.HeaderContainer className="content-container">
      <SingleSelect defaultValue={pathname} onChange={onChange} options={industriesSelectOptions} />
    </S.HeaderContainer>
  )
}

export default Header
