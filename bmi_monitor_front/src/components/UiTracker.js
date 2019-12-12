import React from 'react';
import DataForm from './DataForm';

class UiTracker extends React.Component {

    constructor() {
        super();
        this.state = {
            seePrevious: [],
            addNew: []
        };
    }

    handleLoadButton = async () => {
        console.log('handle load button')
        const seePrevious = await fetch('http://localhost:3000/find')
        const trackerData = await seePrevious.json();
        this.setState({
            seePrevious: trackerData
        })
    }

    handleAddNew = async () => {
        console.log('handle new')
        const newData = <DataForm />
        this.setState({
            newData
        })
        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLoadButton} className="btn btn-secondary btn-sm">
                    Load Previous
                </button>

                < button onClick={this.handleAddNew} type="button" className="btn btn-secondary btn-sm">Add New</button>
         <div>
             {this.state.newData}
         </div>

                <ul>
                    {
                        this.state.seePrevious.map((previousData) => {
                            return <div>
                                <li key={previousData._id}> {previousData.date} {previousData.weight} </li>
                            </div>

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UiTracker;