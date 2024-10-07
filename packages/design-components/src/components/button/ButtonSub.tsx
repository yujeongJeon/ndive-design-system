import {CommonButtonProps} from '$/types/button.types'

export default function ButtonSub({text, onClick, attributes}: CommonButtonProps) {
    return (
        <button onClick={onClick} {...attributes}>
            {text}
        </button>
    )
}
