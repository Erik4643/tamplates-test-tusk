import { appRoutes } from 'router/AppRouter/routes'

export const industriesSelectOptions = [
  { value: 'email-signature-layout', label: 'Email signature layout', href: appRoutes.signatureTemplate },
  { value: 'page-layout', label: 'Page layout', href: appRoutes.pageLayout }
]

export const Positions = {
  right: 'right',
  left: 'left',
  center: 'center'
}

export const SignatureTemplatesData = [
  {
    text: 'Left Align Layout',
    position: Positions.left,
    key: 1
  },
  {
    text: 'Center Align Layout',
    position: Positions.center,
    key: 2
  },
  {
    text: 'Right Align Layout',
    position: Positions.right,
    key: 3
  }
]

export const PageLayoutTemplatesData = [
  {
    text: 'Single image grid',
    position: Positions.left,
    key: 1
  },
  {
    text: '2 images grid',
    position: Positions.center,
    key: 2
  },
  {
    text: 'Slider grid',
    position: Positions.right,
    key: 3
  }
]
