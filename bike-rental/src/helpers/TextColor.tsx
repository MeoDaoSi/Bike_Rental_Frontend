export const TextColor = (status: string) => {
    if (status === "PENDING" || status === "PROCESSING") {
        return <span className="text-gray-500">{status}</span>
    } else if (status === "APPROVED" || status === "COMPLETED") {
        return <span className="text-green-500">{status}</span>
    } else if (status === "REJECTED") {
        return <span className="text-red-500">{status}</span>
    }
}