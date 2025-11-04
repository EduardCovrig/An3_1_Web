import User from "./User"
function RegularUsers({users})
{
    const regularUsers=users.filter( u => u.type==="regular-user");
    return (
        <div className="regular-users">
            {regularUsers.map(u => <User key={u.id} item={u}/>)}
            {/* key se foloseste doar dupa ce dai map*/}
        </div>
    );
    
}
export default RegularUsers;