import React, { Component } from 'react'

export const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state={
        isOpen: false
    }
    render() {
        return (
            <RoomContext.Provider value="hello">
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

export const RoomConsumer = RoomContext.Consumer