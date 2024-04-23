import { ICONS } from 'assets/icons'
import { COLORS } from 'styles/colors'
import { Positions } from 'utils/constants'

import * as S from './styled'

const PageLayoutTemplateType = ({ text, position = Positions.left, active = false }) => (
  <S.Content position={position} active={active}>
    <S.ImageContainerBig position={position} active={active}>
      <S.IconContainer active={active}>
        <ICONS.ImageIcon color={active ? COLORS.blue : COLORS.gray} />
      </S.IconContainer>
    </S.ImageContainerBig>

    <S.FlexContainerContent>
      <S.CircleFlexContainer hidden={position !== Positions.center} active={active}>
        {[1, 2, 3].map((key) => (
          <S.Circle key={key} />
        ))}
      </S.CircleFlexContainer>

      <S.SmallImagesContainer hidden={position !== Positions.right}>
        {[1, 2, 3, 4].map((key) => (
          <S.SmallImage key={key}>
            <ICONS.ImageIcon color={active ? COLORS.blue : COLORS.gray} />
          </S.SmallImage>
        ))}
      </S.SmallImagesContainer>

      <S.ImageContainerThird position={position} active={active}>
        <S.IconContainer active={active}>
          <ICONS.ImageIcon color={active ? COLORS.blue : COLORS.gray} />
        </S.IconContainer>
      </S.ImageContainerThird>

      <S.FlexContainer>
        <S.SkeletonContainerXl active={active}>
          <S.HalfSkeletonXl />
          <S.FullSkeletonXl hidden={position !== Positions.left} />
        </S.SkeletonContainerXl>

        <S.SkeletonContainerM hidden={position === Positions.right} active={active}>
          {[1, 2, 3].map((key) => (
            <S.HalfSkeletonM key={key} />
          ))}
        </S.SkeletonContainerM>

        <S.SkeletonContainerL hidden={position === Positions.left} active={active}>
          {[1, 2].map((key) => (
            <S.FullSkeletonL key={key} />
          ))}
          <S.HalfSkeletonL />
        </S.SkeletonContainerL>

        <S.ImageContainer position={position} active={active}>
          <S.IconContainer active={active}>
            <ICONS.ImageIcon color={active ? COLORS.blue : COLORS.gray} />
          </S.IconContainer>
        </S.ImageContainer>

        <S.SkeletonContainerXXL hidden={position !== Positions.right} active={active}>
          {[1, 2].map((key) => (
            <S.HalfSkeletonXXL key={key} />
          ))}
        </S.SkeletonContainerXXL>

        <S.SkeletonContainerL active={active}>
          {[1, 2, 3, 4].map((key) => (
            <S.FullSkeletonL
              key={key}
              hidden={(position === Positions.center && key === 1) || (position !== Positions.right && key === 2)}
            />
          ))}

          <S.HalfSkeletonL hidden={position === Positions.right} />
        </S.SkeletonContainerL>

        <S.CircleFlexContainer hidden={position !== Positions.left} active={active}>
          {[1, 2, 3].map((key) => (
            <S.Circle key={key} />
          ))}
        </S.CircleFlexContainer>
      </S.FlexContainer>

    </S.FlexContainerContent>

    <S.PositionText>{text}</S.PositionText>
  </S.Content>
)

export default PageLayoutTemplateType
