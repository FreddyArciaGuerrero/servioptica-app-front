import { Container } from "@mui/material"
import React from "react"
import './style.css'

type ContainerAtomType = {
    children: React.ReactNode
    ref?: any
    layoutType?: 1 | 2 | 3 | number
}
export const ContainerAtom = ({children, ref, layoutType}:ContainerAtomType) => {
    return (
        <Container className={`containerAtom ${layoutType === 3 ? 'layoutTypeT3' : ''}`} ref={ref}>
            {children}
        </Container>
    )
}

export default ContainerAtom