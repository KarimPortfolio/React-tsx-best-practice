

export interface CardProps {
    classAtt?: string,
    title?: string,
    image?: {
        src?: string,
        alt?: string
    } | null,
    content?: string,
    link?: string,
    key:number
}

