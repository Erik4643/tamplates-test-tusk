import { SignatureTemplatesData } from 'utils/constants'

import SignatureTemplateType from './SignatureTemplateType'
import * as S from './styled'

const SignatureTemplateTypes = ({ position = '', handleSelectTemplate }) => (
  <S.Container>
    <S.Title>Template Types</S.Title>
    <S.TemplateFlexContainer>

      {SignatureTemplatesData.map((item) => (
        <S.ContentContainer onClick={() => handleSelectTemplate(item.position)} key={item.key}>
          <SignatureTemplateType position={item.position} active={item.position === position} text={item.text} />
        </S.ContentContainer>
      ))}
    </S.TemplateFlexContainer>
  </S.Container>
)
export default SignatureTemplateTypes
