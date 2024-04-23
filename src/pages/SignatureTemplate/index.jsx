import { useDispatch, useSelector } from 'react-redux'
import SingleButton from 'common/SingleButton'
import { setSelectedTemplate } from 'store/app-slice'
import { appSelectors } from 'store/app-slice/selectors'
import { COLORS } from 'styles/colors'
import { exportHTMLToFile } from 'utils/helpers'

import SignatureTemplateContent from 'components/SignatureTemplateSection/SignatureTemplateContent'
import SignatureTemplateTypes from 'components/SignatureTemplateSection/SignatureTemplateTypes'

import * as S from './styled'

const SignatureTemplate = () => {
  const { selectedTemplate } = useSelector(appSelectors)
  const dispatch = useDispatch()

  const handleSelectTemplate = (item) => {
    dispatch(setSelectedTemplate(item))
  }

  const handleDownload = () => {
    exportHTMLToFile(
      <SignatureTemplateTypes handleSelectTemplate={handleSelectTemplate} position={selectedTemplate} />,
      <SignatureTemplateContent position={selectedTemplate} />,
      'exported_content.html'
    )
  }

  return (
    <S.Container className="content-container">
      <SignatureTemplateTypes handleSelectTemplate={handleSelectTemplate} position={selectedTemplate} />
      <SignatureTemplateContent position={selectedTemplate} />
      <SingleButton radius={4} isOutlined onClick={handleDownload} color={COLORS.sky_blue} text="Export as HTML" />
    </S.Container>
  )
}
export default SignatureTemplate
