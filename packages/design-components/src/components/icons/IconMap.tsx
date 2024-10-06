import {memo} from 'react'

import type {SVGProps} from 'react'

function IconMap(props: SVGProps<SVGSVGElement>) {
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
                <path d="m20.88 19.577-2.946-4.123a1.8 1.8 0 0 0-.999-.688l-.046.056c-.767.908-1.743 1.928-3.071 3.213a2.6 2.6 0 0 1-1.818.732 2.6 2.6 0 0 1-1.816-.732c-1.356-1.311-2.347-2.35-3.12-3.271-.406.105-.762.349-1.007.69L3.11 19.577A.9.9 0 0 0 3.843 21h16.304c.732 0 1.157-.827.732-1.423" />
                <path d="M12 7.116A1.714 1.714 0 1 1 12 10.544a1.715 1.715 0 0 1 0-3.429m-.625 9.688a.904.904 0 0 0 1.25-.001c3.958-3.825 5.205-5.743 5.205-7.972 0-3.775-3.59-6.712-7.54-5.587-2.495.712-4.12 2.993-4.12 5.587 0 2.23 1.247 4.148 5.205 7.972" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconMap)
