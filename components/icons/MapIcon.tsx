import * as React from "react"
import { SVGProps } from "react"
export const MapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#D1D5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"
    />
    <path
      stroke="#D1D5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
)

