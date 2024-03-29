import { FC, SVGProps } from "react"

import { ReactComponent as ReactIcon } from "./icons/react.svg"

type IconType = "react"

const icons: Record<IconType, FC<SVGProps<SVGSVGElement>>> = {
  react: ReactIcon,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconType }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}

export { SvgIcon }
