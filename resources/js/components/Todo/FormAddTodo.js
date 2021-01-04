import React from 'react'
import TodosContext from './../../Context/todos';

class FormAddTodo extends React.Component {
    state = { text : '' }
    static contextType = TodosContext;

    formHandler(e) {
        e.preventDefault();
        // ajax
        if(this.state.text.length > 1) {
            let todo = { text : this.state.text , done : false };
            axios.post(`/todos.json` , todo)
                .then(response => this.context.dispatch({ type : 'add_todo' , payload : { todo : { ...todo , key : response.data.name } } }))
                .catch(err => console.log(err))
            //
            this.setState({ text : '' })
        }
    }


    inputHandler(e) { this.setState({ text : e.target.value}) }

    render() {
        return (
            <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
                <div className="form-group">
                    <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={this.state.text} onChange={this.inputHandler.bind(this)}/>
                    <button type="submit" className="btn btn-primary">add</button>
                </div>
            </form>
        )
    }
}


export default FormAddTodo;
