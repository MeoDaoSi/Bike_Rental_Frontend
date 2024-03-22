export default interface UserData {
    _id?: string;
    full_name: string;
    email?: string;
    password?: string;
    birth_date?: string;
    phone_number: number;
    address?: string;
}

const INITIAL_DATA: UserData = {
    _id: '',
    full_name: '',
    email: '',
    password: '',
    birth_date: '',
    phone_number: 0,
    address: ''
}

export const User = () => {
    return (
        <div>User</div>
    )
}
