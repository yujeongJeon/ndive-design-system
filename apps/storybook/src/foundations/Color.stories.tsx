import colors from '@ndive/design-components/color'
import {Meta} from '@storybook/react'

import {determineFontColorByLuminance, hex2rgb} from '../utils'

export default {
    title: 'Foundations',
} satisfies Meta

const ColorTemplate = () => {
    return (
        <>
            {Object.entries(colors).map(([key, value]) => (
                <div
                    key={key}
                    style={{
                        backgroundColor: value,
                        width: '150px',
                        height: '70px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: determineFontColorByLuminance(...hex2rgb(value)),
                    }}
                >
                    {key}
                </div>
            ))}
        </>
    )
}

export const COLOR = () => <ColorTemplate />
