export const getLeftIconUrl = (color: string = "#00000") => {
    return `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%22-3%20-1%203%206%22%3E%3Cpath%20d%3D%22M%200%200%20A%201%201%200%200%200%200%204%20V%205%20Q%20-2%205%20-3%205%20V%20-1%20H%200%22%20fill%3D%22%${color.replace("#", "23")}%22/%3E%3C/svg%3E')`
}