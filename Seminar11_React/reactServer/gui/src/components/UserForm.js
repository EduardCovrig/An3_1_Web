import { useState } from 'react'
import './UserForm.css'


function UserForm(props) {
    const { onAdd } = props;
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [type, setType] = useState('regular-user');

    const options = [
        {
            label: 'regular',
            value: 'regular-user',
        },
        {
            label: 'power',
            value: 'power-user',
        }
    ]

    const addUser = () => {
        onAdd(
            {
                username, fullName, type
            });
    }
    return (
        <div className='user-form'>
            <div className="username">
                <input type="text" placeholder="username" onChange={(e) => {
                    setUsername(e.target.value)
                }
                } />
            </div>
            <div className="fullname">
                <input type="text" placeholder="fullName" onChange={(e) => {
                    setFullName(e.target.value)
                }
                } />
            </div>
            <div className="type">
                <select onChange={(e) => setType(e.target.value)}>
                    {
                        options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)
                    }
                </select>
            </div>
            <div className="add">
                <input type='button' value="add" onClick={addUser} />
            </div>
        </div>
    )


}
export default UserForm;