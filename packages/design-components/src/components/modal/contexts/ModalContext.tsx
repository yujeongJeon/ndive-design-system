import {createContext, ReactNode, useContext, useEffect, useState} from 'react'

interface ModalContextState {
    isRendered: boolean
    unmount: () => void
}
const ModalContext = createContext<ModalContextState>({
    isRendered: false,
    unmount() {},
})

export const ModalContextProvider = ({children, isShow}: {children: ReactNode; isShow: boolean}) => {
    const [isRendered, setIsRendered] = useState(isShow)

    useEffect(() => {
        isShow && setIsRendered(true)
    }, [isShow])

    return (
        <ModalContext.Provider
            value={{
                isRendered,
                unmount: () => setIsRendered(false),
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext)
}
