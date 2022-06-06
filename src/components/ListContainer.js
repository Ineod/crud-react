import { useContext } from 'react';
import { ClientsContext } from '../ClientsContext';

const ListContainer = () => {
    const {clients} = useContext(ClientsContext)
    return (
        <div className='mt-3'>
            <table className="table text-center">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client)=> {
                    return <tr key={client.id}>
                        <th scope="row">{client.id}</th>
                        <td>{client.name}</td>
                        <td>{client.age}</td>
                        <td><div className='btn btn-sm btn-outline-danger ms-2'>Delete</div></td>
                    
                </tr>
                })}

            </tbody>
            </table>
        </div>
    );
}

export default ListContainer;
