
import styled from 'styled-components/macro'
import { COLORS } from 'styles/colors'
import { Positions } from 'utils/constants'

export const ContentContainer = styled.div``

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.div`
  font-size: 18px;
  line-height:22px;
`

export const TemplateFlexContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const FlexContainerContent = styled.div`
  display: flex;
  gap: 10px;
`

export const Content = styled.div`
  width: 330px;
  height: 324px;
  border: 1px solid ${COLORS.metallic};
  border-radius: 4px;
  display: flex;
  padding-block: 60px 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  color: ${COLORS.gray};

  ${({ active }) => active && `
      border-color: ${COLORS.sky_blue};
      color: ${COLORS.sky_blue};
  `}

  ${({ position }) => position === Positions.center && `
      padding-block: 10px;
  `}
`

export const ImageContainerBig = styled.div`
  width: 222px;
  height: 82px;
  background-color: ${COLORS.light_gray};
  border-radius: 4px;
  position: relative;

  
  ${({ active }) => active && `
      background-color: ${COLORS.light_blue};
  `}


  ${({ position }) => position !== Positions.center && `
      display: none;
  `}
`

export const ImageContainerThird = styled.div`
  width: 136px;
  height: 154px;
  background-color: ${COLORS.light_gray};
  border-radius: 4px;
  position: relative;

  
  ${({ active }) => active && `
      background-color: ${COLORS.light_blue};
  `}


  ${({ position }) => position !== Positions.right && `
      display: none;
  `}
`

export const ImageContainer = styled.div`
  width: 122px;
  height: 64px;
  background-color: ${COLORS.light_gray};
  border-radius: 4px;
  position: relative;

  ${({ active }) => active && `
      background-color: ${COLORS.light_blue};
  `}

  ${({ position }) => position === Positions.right && `
        display: none;
  `}

  ${({ position }) => position === Positions.center && `
        height: 42px;
  `}
`

export const PositionText = styled.div`
  font-size: 14px;
  line-height: 17px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const SkeletonContainerXXL = styled.div`
  display: flex;
  gap: 10px;

  > div {
    background-color: ${COLORS.gray};
  }

  
  ${({ hidden }) => hidden && `
      display: none;
  `}

  ${({ active }) => active && `
      > div {
        background-color: ${COLORS.blue};
      }
  `}
`

export const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    background-color: ${COLORS.light_gray};
  }

  
  ${({ hidden }) => hidden && `
      display: none;
  `}

  ${({ active }) => active && `
      > div {
        background-color: ${COLORS.light_blue};
      }
  `}
`

export const SmallImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
  }
`

export const HalfSkeletonXXL = styled.div`
  width: 36px;
  height: 18px;
  border-radius: 4px;
`

export const SkeletonContainerL = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div {
    background-color: ${COLORS.gray};
  }

  
  ${({ hidden }) => hidden && `
      display: none;
  `}

  ${({ active }) => active && `
      > div {
        background-color: ${COLORS.blue};
      }
  `}
`

export const FullSkeletonL = styled.div`
  width: 122px;
  height: 10px;
  border-radius: 4px;
`

export const HalfSkeletonL = styled.div`
  width: 61px;
  height: 10px;
  border-radius: 4px;
`

export const SkeletonContainerM = styled.div`
  display: flex;
  gap: 8px;

  > div {
    background-color: ${COLORS.gray};
  }

  ${({ active }) => active && `
      > div {
        background-color: ${COLORS.blue};
      }
  `}

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const HalfSkeletonM = styled.div`
  width: 35px;
  height: 6px;
  border-radius: 4px;
`

export const SkeletonContainerXl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div {
    background-color: ${COLORS.gray};
  }

  ${({ active }) => active && `
      > div {
        background-color: ${COLORS.blue};
      }
  `}
`

export const FullSkeletonXl = styled.div`
  width: 122px;
  height: 16px;
  border-radius: 4px;

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const HalfSkeletonXl = styled.div`
  width: 61px;
  height: 16px;
  border-radius: 4px;
`

export const CircleFlexContainer = styled.div`
  width: 100% ;
  display: flex;
  gap: 10px;

  > div {
    background-color: ${COLORS.gray};
  }

  ${({ active }) => active && `
      > div {
        background-color: ${COLORS.blue};
      }
  `}

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
`

// PageLayoutContent
export const PageLayoutContentContainer = styled.div`
  max-width: max-content;
  display: flex;
  gap: 30px;
`

export const SliderSection = styled.div`
  display: flex;
  gap: 20px;

  ${({ hidden }) => hidden && `
      display: none;
    `}
`

export const SliderImage = styled.img`
  width: 466px;
  height: 620px;
  border-radius: 24px;
  object-fit: cover;
`

export const SmallImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`

export const PageLayoutSmallImage = styled.img`
  width: 108px;
  height: 116px;
  border-radius: 24px;
  object-fit: cover;
`

export const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ position }) => position === Positions.center && `
      gap: 40px;
  `}
`

export const InformationSection = styled.div`
    ${({ hidden }) => hidden && `
      display: none;
    `}
`

export const PageLayoutSubTitle = styled.div`
  font-weight: 500;
  font-size: 21px;
  line-height:22px;
  letter-spacing: 0.15px;
`

export const PageLayoutTitle = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height:76px;
  letter-spacing: 0.5px;
`

export const PageLayoutTextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const ImageSection = styled.div`
  display: flex;
`

export const IconsSection = styled.div`
margin-right: 26px;

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const PageLayoutImageContainer = styled.img`
  width: 100%;
  height: 190px;
  border-radius: 24px;
  object-fit: cover;

  ${({ position }) => position === Positions.center && `
      height: 290px;
  `}

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  max-width: 628px;

  ${({ position }) => position === Positions.center && `
      max-width: 466px;
      gap: 18px;
  `}

`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const ItemContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Item = styled.div`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.5px;
`

export const Point = styled.div`
  width: 12px;
  height: 12px;
  background: ${COLORS.black};
  border-radius: 100px;
`

export const UserInformationSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const PageLayoutContentText = styled.div`
  font-size: 20px;
  line-height:32px;
  letter-spacing: 0.5px;
  max-width: 612px;

  ${({ hidden }) => hidden && `
      display: none;
  `}
`

export const PageLayoutText = styled.div`
  font-size: 16px;
  line-height:22px;
  letter-spacing: 0.15px;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  
  svg {
    cursor: pointer;
  }

  ${({ hidden }) => hidden && `
      display: none;
  `}
`
