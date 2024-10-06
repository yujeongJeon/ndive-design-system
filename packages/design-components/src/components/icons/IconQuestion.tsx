import {memo} from 'react'

import type {SVGProps} from 'react'

function IconQuestion(props: SVGProps<SVGSVGElement>) {
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
                    fillRule="evenodd"
                    d="M14.949 10.564c-.235 1.022-.939 1.472-1.453 1.802-.533.34-.717.482-.717.964a.736.736 0 0 1-1.473 0c0-1.313.807-1.828 1.396-2.206.468-.298.716-.474.812-.89.082-.36.017-.68-.197-.948-.28-.35-.78-.578-1.274-.578-.8 0-1.452.652-1.452 1.452a.736.736 0 0 1-1.473 0 2.927 2.927 0 0 1 2.925-2.924c.94 0 1.87.433 2.426 1.133.493.618.663 1.398.48 2.195m-2.893 6.332a.981.981 0 1 1 0-1.963.981.981 0 0 1 0 1.963M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 0-18"
                    clipRule="evenodd"
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

export default memo(IconQuestion)
