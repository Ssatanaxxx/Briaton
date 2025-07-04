

interface BreadCrunmbsCardProps {
    TitleLink: ({ id: string, name: string }) => breadCrumbs
}


export const BreadCrunmbsCard = ({ id, name }: BreadCrunmbsCardProps) => {
    return (
        <li key={id}>
            <a href="">{name}</a>
        </li>
    )
}