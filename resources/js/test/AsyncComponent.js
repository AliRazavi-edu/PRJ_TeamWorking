import React from 'react'

export default function AsyncComponent(getComponent) {
    return class extends React.Component {
        state = {
            component : null
        }

        componentDidMount() {
            getComponent()
                .then(component => this.setState({ component }))
        }

        render() {
            let Component = this.state.component
            return Component 
                ? <Component />
                : null;
        }
    }
}