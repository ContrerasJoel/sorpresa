// "use client"
import { useContext } from 'react'
import { ContextProduct } from './ContextProduct'

export const useProducts = ()=> {
    const context = useContext(ContextProduct)
    if (context == null) {
        throw new Error("useContext must used within a provider")
    }
    return context
}