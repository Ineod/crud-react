import {useContext, useRef} from 'react';
import { ClientsContext } from '../ClientsContext';

const Input = () => {
    const {clients, setClients} = useContext(ClientsContext);
    const newClientName = useRef(null)
    const newClientAge = useRef(null)

    const addClient = () => {
        if(newClientName.current.value.length !== "" && newClientAge.current.value !== ""  ){
           const newClient = {
           id:`#${Date.now()}`,
           name:newClientName.current.value,
           age:newClientAge.current.value
           }

           const newClients = clients.slice() 
           newClients.push(newClient);
           setClients(newClients);
           newClientName.current.value = " ";
           newClientAge.current.value =" ";
        } else {
            alert('Veuillez vérifier vos informations')
        }; 
    }

    return (
        <form>
          <input type="text" className='form-control m-2' placeholder='Name' ref={newClientName} required/>
          <input type="number" className='form-control m-2' placeholder='Age' ref={newClientAge} required/>
          <button onClick={addClient} className="btn btn-primary position-relative mt-3">
                Ajouter un client
                {Object.keys(clients).length > 0 &&
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {Object.keys(clients).length}
                    <span className="visually-hidden">unread messages</span>
                </span>}
          </button>
        </form>
    );
}

export default Input;