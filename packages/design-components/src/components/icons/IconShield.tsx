import {memo} from 'react'

import type {SVGProps} from 'react'

function IconShield(props: SVGProps<SVGSVGElement>) {
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
                    d="m19.43 5.722-7.095-2.936c-.163-.081-.407-.081-.652 0L4.59 5.722c-.326.081-.489.407-.489.733v6.768c0 3.098 3.914 6.115 7.583 7.99q.368.123.734 0c3.67-1.875 7.583-4.892 7.583-7.99V6.455c-.081-.326-.245-.652-.57-.733m-3.018 4.484-4.729 4.73a.88.88 0 0 1-.57.244.88.88 0 0 1-.571-.245L7.606 12a.887.887 0 0 1 0-1.223.887.887 0 0 1 1.223 0l2.283 2.283 4.159-4.077a.887.887 0 0 1 1.223 0 .82.82 0 0 1-.082 1.223"
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

export default memo(IconShield)
