import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

type WehandleLogoProps = SVGProps<SVGSVGElement> & {
  className?: string
}

export function WehandleLogo({ className, ...props }: WehandleLogoProps) {
  return (
    <div className={cn('text-2xl', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Camada 2"
        viewBox="0 0 810.44 251.72"
        {...props}
      >
        <g data-name="Camada 1">
          <path
            d="m163.69 92.82 53.59-30.94-53.59-30.94L110.09 0 56.5 30.94 2.91 61.88 56.5 92.82l53.59 30.94 53.6-30.94z"
            style={{
              fill: '#00e3fd',
              strokeWidth: 0,
            }}
          />
          <path
            d="m113.22 189.4.03 61.89 53.57-30.97 53.58-30.96-.02-61.88-.03-61.89-53.58 30.97-53.58 30.96.03 61.88z"
            style={{
              fill: '#f14188',
              strokeWidth: 0,
            }}
          />
          <path
            d="m53.95 220.91 53.66 30.81-.14-61.88-.14-61.88-53.67-30.82L0 66.33l.14 61.88.15 61.88 53.66 30.82z"
            style={{
              strokeWidth: 0,
              fill: '#fdd500',
            }}
          />
          <text
            style={{
              fontFamily: 'Verdana,Verdana',
              fontSize: '113.06px',
            }}
            className="fill-foreground"
            transform="translate(231.44 174.04)"
          >
            <tspan x={0} y={0}>
              {'wehandle'}
            </tspan>
          </text>
          <text
            style={{
              fontSize: '44.41px',
              fontFamily: 'Verdana,Verdana',
            }}
            className="fill-foreground"
            transform="translate(766.02 124.72)"
          >
            <tspan x={0} y={0}>
              {'\xAE'}
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  )
}
