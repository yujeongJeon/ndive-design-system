import {memo} from 'react'

import type {SVGProps} from 'react'

function IconEyeOff(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill={props.fill} clipPath="url(#icons__a)">
                <path d="M14.316 5.893A10 10 0 0 0 12 5.603c-3.51 0-6.83 1.885-9.015 5.024-.57.818-.57 1.929 0 2.747a12.8 12.8 0 0 0 1.79 2.061zM21.016 10.627a12.3 12.3 0 0 0-3.117-3.111l2.141-2.141a1 1 0 1 0-1.414-1.414L3.96 18.625a1 1 0 1 0 1.415 1.414l2.537-2.536c1.29.575 2.672.894 4.088.894 3.511 0 6.83-1.884 9.016-5.024.57-.817.57-1.928 0-2.746m-9.017 4.685c-.549 0-1.061-.143-1.516-.382l4.446-4.446c.24.454.382.966.382 1.515a3.315 3.315 0 0 1-3.312 3.313" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconEyeOff)
