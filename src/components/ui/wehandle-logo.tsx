import { cn } from '@/lib/utils'

type WehandleLogoProps = {
  className?: string
  height?: number
  width?: number
}

export function WehandleLogo({ className, height = 32 }: WehandleLogoProps) {
  return (
    <div className={cn('text-2xl', className)}>
      <svg
        id="wehandlelogo"
        data-name="wehandlelogo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 213.58 60.09"
        height={height}
      >
        <defs></defs>
        <g id="wehandlelogo" data-name="wehandle">
          <text transform="translate(59.03 38.53)">
            <tspan x="0" y="0" className="fill-foreground">
              wehandle
            </tspan>
          </text>
          <text transform="translate(168.14 29.21) scale(.58)">
            <tspan x="0" y="0" className="fill-foreground">
              ®
            </tspan>
          </text>
          <polygon
            className="fill-primary"
            points=".39 14.9 26.19 29.79 26.19 0 .39 14.9"
          />
          <polygon
            className="fill-primary"
            points="52.03 14.9 26.17 29.79 26.17 0 52.03 14.9"
          />
          <polygon
            className="fill-secondary"
            points=".03 15.41 .03 45.2 25.83 30.3 .03 15.41"
          />
          <polygon
            className="fill-terciary"
            points="26.44 30.3 52.24 45.2 52.24 15.41 26.44 30.3"
          />
          <polygon
            className="fill-secondary"
            points="25.83 60.09 25.8 30.25 0 45.15 25.83 60.09"
          />
          <polygon
            className="fill-terciary"
            points="26.44 60.09 52.27 45.15 26.47 30.26 26.44 60.09"
          />
        </g>
      </svg>
    </div>
  )
}
