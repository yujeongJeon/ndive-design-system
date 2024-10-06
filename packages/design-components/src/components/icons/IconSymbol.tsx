import {memo} from 'react'

import type {SVGProps} from 'react'

function IconSymbol(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g clipPath="url(#icons__a)">
                <path fill="url(#icons__b)" d="M0 0h24v23.692H0z" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
                <pattern id="icons__b" width={1} height={1} patternContentUnits="objectBoundingBox">
                    <use xlinkHref="#icons__c" transform="matrix(.00513 0 0 .0052 -.1 -.1)" />
                </pattern>
                <image
                    xlinkHref="data:image/png;base64,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"
                    id="icons__c"
                    width={234}
                    height={231}
                />
            </defs>
        </svg>
    )
}

export default memo(IconSymbol)
