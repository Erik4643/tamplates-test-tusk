import { ICONS } from 'assets/icons'
import { COLORS } from 'styles/colors'
import { Positions } from 'utils/constants'

import * as S from './styled'

const SignatureTemplateType = ({ text, position = Positions.left, active = false }) => (
  <S.Content active={active} position={position}>
    <S.FlexContainer position={position}>
      <S.ImageSectionContainer>
        <S.ImageContainer>
          <S.IconContainer active={active}>
            <ICONS.TemplateIcon color={active ? COLORS.blue : COLORS.gray} />
          </S.IconContainer>
        </S.ImageContainer>

        <S.CircleFlexContainer active={active}>
          {[1, 2, 3].map((key) => (
            <S.Circle key={key} />
          ))}
        </S.CircleFlexContainer>
      </S.ImageSectionContainer>

      <S.ColumnContainerSkeleton active={active}>
        <S.SkeletonContainerXl position={position}>
          <S.FullSkeletonXl />
          <S.HalfSkeletonXl />
        </S.SkeletonContainerXl>

        <S.SkeletonContainer>
          {[1, 2, 3].map((key) => (
            <S.FullSkeletonL key={key} />
          ))}
          <S.HalfSkeletonL />
        </S.SkeletonContainer>
      </S.ColumnContainerSkeleton>

    </S.FlexContainer>

    <S.PositionText>{text}</S.PositionText>
  </S.Content>
)

export default SignatureTemplateType
