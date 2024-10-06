import {memo} from 'react'

import type {SVGProps} from 'react'

function IconEyeOn(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill={props.fill} fillRule="evenodd" clipPath="url(#icons__a)" clipRule="evenodd">
                <path d="M12.104 9.688a2.42 2.42 0 0 0-2.416 2.416 2.42 2.42 0 0 0 2.416 2.417 2.42 2.42 0 0 0 2.417-2.417 2.42 2.42 0 0 0-2.417-2.416" />
                <path d="M12.104 16.27c-2.333 0-4.166-1.916-4.166-4.166s1.916-4.166 4.166-4.166 4.167 1.916 4.167 4.166-1.834 4.167-4.167 4.167m9.167-5.25c-2.167-3.332-5.584-5.332-9.167-5.332s-7 2-9.166 5.333a2.03 2.03 0 0 0 0 2.166c2.166 3.334 5.583 5.334 9.166 5.334s7-2 9.167-5.334c.5-.666.5-1.5 0-2.166" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconEyeOn)
