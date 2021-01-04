import React , { useEffect , useState } from 'react';

import { useParams , useHistory } from 'react-router-dom'

function Todo(props) {
    const params = useParams();
    const history = useHistory();

    const [todo , setTodo] = useState({})
    const [loading , setLoading] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get(`/todos/${params.todo}.json`)
            .then(response => {
                setLoading(false);
                if(response.data) {
                    setTodo({ ...response.data , key : params.todo })
                } else {
                    // redirect to 404 page
                    history.push('/404')
                }
            })
            .catch(err => console.log(err));
    } , [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        loading
                            ? <h2>Loading Data ...</h2>
                            : (
                                <>
                                    <h2>Todo Detail</h2>
                                    <p>{todo.text}</p>
                                    <span className={`badge ${todo.done ? 'badge-success' : 'badge-warning'}`}>{ todo.done ? 'done' : 'undone' }</span>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo;
