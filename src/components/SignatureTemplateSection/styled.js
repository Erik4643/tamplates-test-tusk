
import styled from 'styled-components/macro'
import { COLORS } from 'styles/colors'
import { Positions } from 'utils/constants'

export const ContentContainer = styled.div``

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Content = styled.div`
  width: 330px;
  height: 261px;
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

export const Title = styled.div`
  font-size: 18px;
  line-height:22px;
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;

  ${({ position }) => position === Positions.center && `
    flex-direction: column;
  `}

  ${({ position }) => position === Positions.right && `
    flex-direction: row-reverse;
  `}
`

export const ImageSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const ColumnContainerSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div > div {
    background-color: ${COLORS.gray};
  }

  ${({ active }) => active && `
      > div > div {
        background-color: ${COLORS.blue};
      }
  `}
`

export const PositionText = styled.div`
  font-size: 14px;
  line-height: 17px;
`

export const SkeletonContainerXl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ position }) => position === Positions.center && `
    align-items: center;
  `}

`

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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

export const FullSkeletonXl = styled.div`
  width: 122px;
  height: 16px;
  border-radius: 4px;
  background-color: ${COLORS.gray};
`

export const HalfSkeletonXl = styled.div`
  width: 61px;
  height: 16px;
  border-radius: 4px;
  background-color: ${COLORS.gray};
`

export const ImageContainer = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 100%;
  background-color: ${COLORS.light_gray};
  position: relative;

  ${({ active }) => active && `
      background-color: ${COLORS.light_blue};
  `}
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

export const CircleFlexContainer = styled.div`
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
`

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
`

export const TemplateFlexContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const SignatureTemplateContentContainer = styled.div`
    max-width: max-content;
`

export const SignatureTemplateContentGridContainer = styled.div`
    display: grid;
    grid-gap: 36px;
    align-items: center;
    grid-template-areas:
              "first second"
              "first third";

    ${({ position }) => position === Positions.center && `
        grid-template-areas:
              "first"
              "second"
              "third";
    `}

    ${({ position }) => position === Positions.right && `
          grid-template-areas:
                "second first"
                "third first";
    `}
`

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  grid-area: first;
`

export const HelloImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  object-fit: cover;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 14px;

  svg {
    cursor: pointer;
  }
`

export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-area: second;

  ${({ position }) => position === Positions.center && `
          text-align: center;
  `}
`

export const TitleContent = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`

export const SubTitleContent = styled.div`
  font-size: 20px;
  line-height: 24px;
`

export const ThirdSection = styled.div`
  max-width: 400px;
  font-size: 18px;
  line-height: 22px;
  grid-area: third;
`
