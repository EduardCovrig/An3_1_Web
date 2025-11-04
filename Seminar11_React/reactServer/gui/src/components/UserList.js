import './UserList.css'
import { useEffect, useState } from "react";
import User from "./User"
import RegularUsers from "./RegularUsers";
import PowerUsers from "./PowerUsers";
import UserForm from "./UserForm"

const SERVER = "http://localhost:8080";

function UserList() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch(`${SERVER}/users`);
        const data = await response.json();
        setUsers(data);
    }
    useEffect(() => {
        getUsers();
    }, []);

    const addUser= async(user) => {
        await fetch(`${SERVER}/users`,
            {
                method:"post",
                headers: {
                    "Content-Type": `application/json`
                },
                body: JSON.stringify(user),
            });
            getUsers();
        
    }

    return (
        <div className="user-list">
            <h2>Regular Users</h2>
            <RegularUsers users={users} />
            {/* users e un keyword ales de mine, folosit pentru a transmite in RegularUser/PowerUser ca parametri (uita-te la parametru din
            functia lor (asta in caz de uiti mai tarziu ce ai facut aici)
            Acelasi concept se va aplica dupa si de la RegularUsers catre User, cu keyword-ul item
            
            De tinut minte! Un element poate avea mai multe astfel de keyword-uri
            ex: 
            const props = { isAdmin: true, color: "blue", item: { username: "john" } };
            const { item, color, isAdmin } = props;*/}

            <h2>Power Users</h2>
            <PowerUsers users={users} />
            <UserForm onAdd={addUser}/>
        </div>
    )
}

export default UserList