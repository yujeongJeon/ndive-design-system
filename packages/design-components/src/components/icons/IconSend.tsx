import {memo} from 'react'

import type {SVGProps} from 'react'

function IconSend(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g clipPath="url(#icons__a)">
                <path
                    fill={props.fill}
                    d="M2.008 19.816a.5.5 0 0 0 .697.458l18.223-7.813a.5.5 0 0 0 0-.92L2.705 3.729a.5.5 0 0 0-.697.46l-.007 5.47a.5.5 0 0 0 .434.497l10.134 1.35c.578.078.578.915 0 .992L2.435 13.848a.5.5 0 0 0-.434.497z"
                />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconSend)
