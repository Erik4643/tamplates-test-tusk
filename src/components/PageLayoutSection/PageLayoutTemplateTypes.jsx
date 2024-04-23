
import { PageLayoutTemplatesData } from 'utils/constants'

import PageLayoutTemplateType from './PageLayoutTemplateType'
import * as S from './styled'

const PageLayoutTemplateTypes = ({ position = '', handleSelectTemplate }) => (
  <S.Container>
    <S.Title>Template Types</S.Title>
    <S.TemplateFlexContainer>

      {PageLayoutTemplatesData.map((item) => (
        <S.ContentContainer onClick={() => handleSelectTemplate(item.position)} key={item.key}>
          <PageLayoutTemplateType position={item.position} active={item.position === position} text={item.text} />
        </S.ContentContainer>
      ))}
    </S.TemplateFlexContainer>
  </S.Container>
)
export default PageLayoutTemplateTypes
