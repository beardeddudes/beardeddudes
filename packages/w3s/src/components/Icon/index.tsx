import { FC, SVGProps } from "react"

import { ReactComponent as ReactIcon } from "./icons/react.svg"

const icons = {
  react: ReactIcon,
} as const

export type IconName = keyof typeof icons
type SvgIconProps = SVGProps<SVGSVGElement> & { name: IconName }

const SvgIcon: FC<SvgIconProps> = ({ name, ...svgProps }) => {
  const Icon = icons[name] ?? null
  return Icon && <Icon {...svgProps} />
}

export { SvgIcon }
