import { useQuery } from "@tanstack/react-query"
import { fethMe } from "../../../../../api/User"
import { Loader } from "../../../../Auth/Loader"
import { AuthForm } from "../../../../Auth/AuthForm"

export const Account = () => {
    const meQuery = useQuery({
        queryFn: () => fethMe(),
        queryKey: ["users", "me"]
    })

    switch (meQuery.status) {
        case "pending":
            return <Loader />
        case "error":
            return <AuthForm />
        case "success":
            return <ada />
    }
}