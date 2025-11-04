import User from "./User";

function PowerUsers({users})
{
    const powerUsers=users.filter( u => u.type==="power-user");

    return  (
    <div className="power-users">
            {powerUsers.map(u => <User key={u.id} item={u} />)}
        </div>
    )
    
    
}
export default PowerUsers;