import { BreadCrunmbsCard } from "../BreadCrunmbsCard/BreadCrunmbsCard"


interface BreadCrunmbsListProps {
    TitleLink: ({ id: string, name: string }) => breadCrumbs
}


export const BreadCrunmbsList = ({ id, name }: BreadCrunmbsListProps) => {
    return (
        <ul>
            <li key={id}>
                {name.map((item) => (
                    <BreadCrunmbsCard
                        key={item.id}
                        name={item.name}
                    />
                ))}

            </li>
        </ul>
    )
}