import { ICONS } from 'assets/icons'
import { IMAGES } from 'assets/images'
import SingleButton from 'common/SingleButton'
import { Positions } from 'utils/constants'

import * as S from './styled'

const PageLayoutContent = ({ position }) => (
  <S.PageLayoutContentContainer>
    <S.SliderSection hidden={position !== Positions.right}>
      <S.SmallImages>
        {[1, 2, 3, 4].map((key) => (
          <S.PageLayoutSmallImage key={key} src={IMAGES.HelloImage} alit={`image-${key}`} />

        ))}
      </S.SmallImages>
      <S.SliderImage src={IMAGES.HelloImage} alit="image" />
    </S.SliderSection>

    <S.PageLayoutContainer position={position}>
      <S.InformationSection hidden={position === Positions.center}>
        <S.PageLayoutSubTitle>Category name</S.PageLayoutSubTitle>
        <S.PageLayoutTitle>Title</S.PageLayoutTitle>
        <S.PageLayoutTextContainer hidden={position === Positions.right}>
          <S.PageLayoutText>Author name</S.PageLayoutText>
          <S.PageLayoutText>
            <ICONS.DateIcon />
            Date
          </S.PageLayoutText>
          <S.PageLayoutText>
            <ICONS.ViewIcon />
            View count
          </S.PageLayoutText>
        </S.PageLayoutTextContainer>
      </S.InformationSection>

      <S.PageLayoutImageContainer hidden={position === Positions.right} position={position} src={IMAGES.HelloImage} alt="Marker title" />

      <S.ImageSection>
        <S.IconsSection hidden={position !== Positions.center}>
          <S.IconsContainer>
            <S.PageLayoutText>Share</S.PageLayoutText>
            <ICONS.FacebookIcon />
            <ICONS.TwitterIcon />
            <ICONS.InstagramIcon />
          </S.IconsContainer>
        </S.IconsSection>

        <S.TextContainer position={position}>
          <S.UserInformationSmallContainer hidden={position !== Positions.center}>
            <S.PageLayoutText>
              Title
            </S.PageLayoutText>
            <S.PageLayoutText>
              <ICONS.DateIcon />
              Date
            </S.PageLayoutText>
          </S.UserInformationSmallContainer>

          <S.PageLayoutContentText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</S.PageLayoutContentText>

          <S.PageLayoutImageContainer hidden={position !== Positions.center} src={IMAGES.HelloImage} alt="Marker title" />

          <S.PageLayoutContentText hidden={position !== Positions.center}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</S.PageLayoutContentText>

          <S.ButtonsContainer hidden={position !== Positions.right}>
            <SingleButton text="Button" />
            <SingleButton text="Button" isOutlined />
          </S.ButtonsContainer>

          <S.ItemsContainer hidden={position !== Positions.right}>
            {[1, 2, 3, 4].map((key) => (
              <S.ItemContent key={key}>
                <S.Point />
                <S.Item>{`Lorem Ipsum ${key}`}</S.Item>
              </S.ItemContent>
            ))}
          </S.ItemsContainer>

          <S.IconsContainer hidden={position !== Positions.left}>
            <S.PageLayoutText>Share</S.PageLayoutText>
            <ICONS.FacebookIcon />
            <ICONS.TwitterIcon />
            <ICONS.InstagramIcon />
          </S.IconsContainer>
        </S.TextContainer>
      </S.ImageSection>
    </S.PageLayoutContainer>

  </S.PageLayoutContentContainer>
)

export default PageLayoutContent
