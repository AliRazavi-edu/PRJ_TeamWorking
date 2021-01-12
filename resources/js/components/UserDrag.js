import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import '../../css/group.css';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle, isDragDisabled) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid,
    margin: `0 0 ${grid}px 0`,
    boxShadow: '0 3px 6px 0 #c3c3c3c7',
    // change background colour if dragging
    background: isDragDisabled
        ? '#e2e2e2'
        : isDragging
            ? 'rgba(126,229,173,0.9)'
            : '#fdfdfd',

    // styles we need to apply on draggables
    ...draggableStyle
});

class UserDrag extends Component {

    render() {
        let user = this.props.user;

        const isDragDisabled = user.id != window.laravel.user.id;

        console.log(user);
        return <Draggable
            draggableId={user.id.toString()}
            isDragDisabled={isDragDisabled}
            index={this.props.index}>
            {(provided, snapshot) => (
                <div className="task low"
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     style={getItemStyle(
                         snapshot.isDragging,
                         provided.draggableProps.style,
                         isDragDisabled
                     )}>
                    <div className="desc col-sm-10">
                        <div
                            className="title">{user.display_name}</div>
                        <div>
                            {user.email}
                        </div>
                    </div>

                    <div className="pull-left col-sm-2 text-center">
                        {
                            isDragDisabled
                                ? null
                                :
                                <i className="fa fa-user-circle-o" title="دانشجو"></i>
                        }

                    </div>

                </div>
            )}
        </Draggable>

    }
}

export default UserDrag;
