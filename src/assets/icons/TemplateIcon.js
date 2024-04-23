import React from 'react'
import { COLORS } from 'styles/colors'

const TemplateIcon = ({ color = COLORS.gray }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M3 4.667a1.667 1.667 0 113.333 0 1.667 1.667 0 01-3.333 0zm1.667-.334a.333.333 0 100 .667.333.333 0 000-.667z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M.333 2.333a2 2 0 012-2h9.334a2 2 0 012 2v9.334a2 2 0 01-2 2H2.333a2 2 0 01-2-2V2.333zm2-.666a.667.667 0 00-.666.666v9.334c0 .286.18.53.432.624l7.096-7.096c.26-.26.683-.26.943 0l2.195 2.196V2.333a.667.667 0 00-.666-.666H2.333zm10 7.61L9.667 6.61l-5.724 5.723h7.724a.667.667 0 00.666-.666v-2.39z"
      clipRule="evenodd"
    />
  </svg>
)

export default TemplateIcon
