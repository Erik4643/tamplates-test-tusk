import ReactSelect from 'react-select'

import * as S from './styled'

const SingleSelect = ({ options = [], onChange = (() => { }), defaultValue = '' }) => {
  const defaultOption = options.find((option) => option.href === defaultValue)

  return (
    <S.InputSection>
      <ReactSelect
        placeholder="Select template"
        defaultValue={defaultOption}
        options={options}
        onChange={(option) => onChange(option)}
      />
    </S.InputSection>
  )
}
export default SingleSelect
