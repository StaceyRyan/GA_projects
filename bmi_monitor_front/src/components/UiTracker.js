import React from 'react';
import DataForm from './DataForm';

class UiTracker extends React.Component {

    constructor() {
        super();
        this.state = {
            seePrevious: [],
            showDataForm: false,
            addNew: []
        };
    }

    handleLoadButton = async () => {
        console.log('handle load button')
        const seePrevious = await fetch('http://localhost:3000/find')
        const trackerData = await seePrevious.json();
        this.setState({
            seePrevious: trackerData,
            showDataForm: false
        })
    }

    handleAddNew = async () => {
        console.log('handle new')
        this.setState({
            showDataForm: true
        })
        
    }
    handleEdit = async () => {
        console.log('handle edit')
        const updateData = <DataForm />
        this.setState({
            updateData
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
             {this.state.showDataForm && <DataForm />}
         </div>

                <ul>
                    {
                        this.state.seePrevious.map((previousData) => {
                            return( 
                                <li key={previousData._id}> {previousData.date} {previousData.weight} 
                                < button onClick={this.handleEdit} type="button" className="btn btn-secondary btn-sm">Edit</button>
                                </li>)
                

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UiTracker;