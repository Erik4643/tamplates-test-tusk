import React from 'react'
import { COLORS } from 'styles/colors'

const ImageIcon = ({ color = COLORS.gray }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill={color}
      d="M20 17.778V2.222C20 1 19 0 17.778 0H2.222C1 0 0 1 0 2.222v15.556C0 19 1 20 2.222 20h15.556C19 20 20 19 20 17.778zM6.111 11.667L8.89 15.01 12.778 10l5 6.667H2.222l3.89-5z"
    />
  </svg>
)

export default ImageIcon
