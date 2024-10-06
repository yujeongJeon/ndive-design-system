type TSizeName = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

export type TSizeReturnType = {
    [key in TSizeName]: {
        width: number
        height: number
    }
}
