import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import '../../css/group.css';
import UserDrag from "./UserDrag";

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#e7e7e7' : 'rgb(253 247 253)',
    padding: grid,
    // width: 250,
    minHeight: "100px",
    marginBottom: "10px"
});

class CourseDrag extends Component {

    componentDidMount() {
        this.props.setLoading(true);
        this.setState(
            this.props
        );
        this.props.setLoading(false);
    }

    onDragEnd = result => {

        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            //todo:: add here if needed
        } else {

            if(source.droppableId == 'droppable'){
                let destinationGroup = this.state.groups.find((item) => item.id == destination.droppableId);

                const [removed] = this.state.users.splice(source.index, 1)

                destinationGroup.users.splice(destination.index, 0, removed);

            }else if(destination.droppableId == 'droppable'){
                let sourceGroup = this.state.groups.find((item) => item.id == source.droppableId);

                const [removed] = sourceGroup.users.splice(source.index, 1)

               this.state.users.splice(destination.index, 0, removed);

            }else{
                let sourceGroup = this.state.groups.find((item) => item.id == source.droppableId);
                let destinationGroup = this.state.groups.find((item) => item.id == destination.droppableId);

                const [removed] = sourceGroup.users.splice(source.index, 1)
                destinationGroup.users.splice(destination.index, 0, removed);
            }

        }
    };


    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <div className="container page-todo bootstrap snippets bootdeys">
                <div className="row">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <div className="col-sm-6 tasks">
                            <div className="task-list">
                                <h1>اعضا</h1>
                                {
                                    this.state == null
                                        ? null
                                        : <Droppable droppableId="droppable">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}>
                                                    {this.state.users.map((user, index) => (
                                                        <UserDrag key={user.id} user={user} index={index}/>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                }
                            </div>
                        </div>
                        <div className="col-sm-6 tasks">
                            <div className="task-list">
                                <h1>گروه ها</h1>
                                {
                                    this.state == null
                                        ? null
                                        : this.state.groups.map(function (group, index) {
                                            return (
                                                <div className="group" key={group.id}>
                                                    <div className="priority low"><span>{group.title}</span></div>

                                                    <Droppable droppableId={group.id.toString()}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                style={getListStyle(snapshot.isDraggingOver)}>
                                                                {group.users.map((user, index) => (
                                                                    <UserDrag key={user.id} user={user} index={index}/>
                                                                ))}
                                                                {provided.placeholder}
                                                            </div>
                                                        )}
                                                    </Droppable>

                                                </div>
                                            )
                                        })
                                }

                            </div>
                        </div>
                    </DragDropContext>
                </div>
            </div>
        );
    }
}

export default CourseDrag;
