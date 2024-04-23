import { useDispatch, useSelector } from 'react-redux'
import SingleButton from 'common/SingleButton'
import { setSelectedTemplate } from 'store/app-slice'
import { appSelectors } from 'store/app-slice/selectors'
import { COLORS } from 'styles/colors'
import { exportHTMLToFile } from 'utils/helpers'

import PageLayoutContent from 'components/PageLayoutSection/PageLayoutContent'
import PageLayoutTemplateTypes from 'components/PageLayoutSection/PageLayoutTemplateTypes'

import * as S from './styled'

const PageLayout = () => {
  const { selectedTemplate } = useSelector(appSelectors)
  const dispatch = useDispatch()

  const handleSelectTemplate = (item) => {
    dispatch(setSelectedTemplate(item))
  }

  const handleDownload = () => {
    exportHTMLToFile(
      <PageLayoutTemplateTypes handleSelectTemplate={handleSelectTemplate} position={selectedTemplate} />,
      <PageLayoutContent position={selectedTemplate} />,
      'exported_content.html'
    )
  }

  return (
    <S.Container className="content-container">
      <PageLayoutTemplateTypes handleSelectTemplate={handleSelectTemplate} position={selectedTemplate} />
      <PageLayoutContent position={selectedTemplate} />
      <SingleButton radius={4} isOutlined onClick={handleDownload} color={COLORS.sky_blue} text="Export as HTML" />
    </S.Container>
  )
}

export default PageLayout
