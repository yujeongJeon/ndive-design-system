import {memo} from 'react'

import type {SVGProps} from 'react'

function IconKakao(props: SVGProps<SVGSVGElement>) {
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
                    d="M12 3.2c-5.258 0-9.52 3.36-9.52 7.506 0 2.68 1.782 5.032 4.462 6.36-.145.503-.937 3.236-.968 3.45 0 0-.02.162.085.223.105.062.228.014.228.014.3-.042 3.473-2.271 4.022-2.658q.825.117 1.691.118c5.258 0 9.52-3.361 9.52-7.507S17.258 3.2 12 3.2"
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

export default memo(IconKakao)
