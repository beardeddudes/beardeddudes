import { FC, SVGProps } from "react"

import { ReactComponent as CloseBtnIcon } from "./icons/close-btn.svg"
import { ReactComponent as CloseBurgerBtnIcon } from "./icons/close-burger-btn.svg"
import { ReactComponent as ReactIcon } from "./icons/react.svg"
import { ReactComponent as ViewDarkIcon } from "./icons/view-dark.svg"
import { ReactComponent as ViewLightIcon } from "./icons/view-light.svg"

const icons = {
  "close-btn": CloseBtnIcon,
  "close-burger-btn": CloseBurgerBtnIcon,
  "react": ReactIcon,
  "view-dark": ViewDarkIcon,
  "view-light": ViewLightIcon,
} as const

export type IconName = keyof typeof icons
export type SvgIconProps = SVGProps<SVGSVGElement> & { name: IconName }

const SvgIcon: FC<SvgIconProps> = ({ name, ...svgProps }) => {
  const Icon = icons[name] ?? null
  return Icon && <Icon {...svgProps} />
}

export { SvgIcon }
