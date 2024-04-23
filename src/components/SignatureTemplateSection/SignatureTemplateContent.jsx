import { ICONS } from 'assets/icons'
import { IMAGES } from 'assets/images'

import * as S from './styled'

const SignatureTemplateContent = ({ position }) => (
  <S.SignatureTemplateContentContainer>
    <S.SignatureTemplateContentGridContainer position={position}>
      <S.FirstSection>
        <S.HelloImg src={IMAGES.HelloImage} alt="Marker title" />
        <S.IconsContainer>
          <ICONS.FacebookIcon />
          <ICONS.TwitterIcon />
          <ICONS.InstagramIcon />
        </S.IconsContainer>
      </S.FirstSection>

      <S.SecondSection position={position}>
        <S.TitleContent>Name Surname</S.TitleContent>
        <S.SubTitleContent>Job Title</S.SubTitleContent>
      </S.SecondSection>

      <S.ThirdSection>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </S.ThirdSection>
    </S.SignatureTemplateContentGridContainer>
  </S.SignatureTemplateContentContainer>
)

export default SignatureTemplateContent
