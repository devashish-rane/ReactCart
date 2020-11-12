import React, { Component } from 'react'


const DataContext = React.createContext();

class DataProvider extends Component {
    render() {
        return (
            <DataContext.Provider value="this is sample context data!!">
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer;


export { DataProvider , DataConsumer };
