import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface maxContainerProps {
    children: React.ReactNode
    className?: string
}

export default function MaxContainer({children, className}:maxContainerProps){
    const classDefault = "w-maxW mx-auto"
    const classMerge = twMerge(classDefault, className)

    return(
        <div className={classMerge}>
            {children}
        </div>
    )
}

