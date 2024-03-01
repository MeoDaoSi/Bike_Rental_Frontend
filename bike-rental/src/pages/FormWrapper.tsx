import React from 'react'

type FormWrapperProps = {
    title: string,
    children: React.ReactNode
}

export const FormWrapper = ({ title, children }: FormWrapperProps) => {
    return (
        <>
            {title}
            {children}
        </>
    )
}
