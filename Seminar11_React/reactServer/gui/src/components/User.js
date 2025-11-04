import './User.css'

function User(props)
{
    const { item } = props;
    {/* props e un obiect care contine toate keyword-urile specifice*/}

    return (
        <div className='user'>
            <div className="username">
                {item.username}
            </div>
            <div class='full-name'>
                {item.fullName}
            </div>

        </div>
    )
}
export default User;