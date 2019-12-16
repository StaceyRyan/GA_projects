import React from 'react';
import DataForm from './DataForm';
import EditForm from './EditForm';
import { Button, ListGroup } from 'react-bootstrap';


class UiTracker extends React.Component {

    constructor() {
        super();
        this.state = {
            showDataForm: false,
            seePrevious: [],
            addNew: [],
            currentEditIndex: -1,
            actionMessage: ""
        };
        this.handleLoadButton = this.handleLoadButton.bind(this);
        this.reloadData = this.reloadData.bind(this);
    }

    handleLoadButton = async () => {
        console.log('handle load button')
        const seePrevious = await fetch('http://localhost:3000/find')
        const trackerData = await seePrevious.json();
        this.setState({
            seePrevious: trackerData,
            showDataForm: false,
            showEditForm: false
        })
    }

    handleAddNew = async () => {
        console.log('handle new')
        this.setState({
            showDataForm: true,
            showEditForm: false
        })

    }
    handleEdit = async (id) => {
        console.log('handle edit')
        const recIndex = this.state.seePrevious.findIndex((prev) => {
            return prev._id === id;
        });
        console.log('testing if the record works', recIndex)
        this.setState({
            currentEditIndex: recIndex,
            showDataForm: false,
            showEditForm: true
        })
    }

    handleDeleteEntry = async (deletable) => {
        console.log('Delete button activated');
        console.log(`http://localhost:3000/delete/${deletable}`)
        const response = await fetch(`http://localhost:3000/delete/${deletable}`, {
            method: 'DELETE',
            body: JSON.stringify({
                date: this.state.date,
                weight: this.state.weight,
                height: this.state.height,
                chest: this.state.chest,
                waist: this.state.waist,
                hips: this.state.hips,
                bmi: this.state.bmi
            })
        });
        this.setState({
            currentEditIndex: -1,
            actionMessage: "Record deleted",
        });
        this.reloadData();
    }

    reloadData() {
        this.handleLoadButton();
        this.setState({
            currentEditIndex: -1,
            actionMessage: "Record successfully updated"
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
                    {this.state.showDataForm && <DataForm handleAdd={this.reloadData}/>} 
                    {this.state.currentEditIndex > -1 && <EditForm record={this.state.seePrevious[this.state.currentEditIndex]} hideEditForm={this.reloadData} />}
                    {this.state.actionMessage.length > 0 &&
                        <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">{this.state.actionMessage}</h4>
                        </div>}
                </div>
                <div>
                    {
                        this.state.seePrevious.map((previousData) => {
                            return (
                                <li key={previousData._id}>
                                    <ListGroup horizontal>
                                        <ListGroup.Item>{previousData.date}</ListGroup.Item>
                                        <ListGroup.Item>{previousData.height} cm</ListGroup.Item>
                                        <ListGroup.Item>{previousData.weight} kg</ListGroup.Item>
                                        <ListGroup.Item>{previousData.bmi} kg/m<sup>2</sup></ListGroup.Item>
                                    </ListGroup>
                                    < Button variant="outline-danger" onClick={() => this.handleEdit(previousData._id)}
                                        className="btn btn-secondary btn-sm">
                                        Edit
                                        </Button>
                                    < Button variant="danger" onClick={() => this.handleDeleteEntry(previousData._id)}
                                        className="btn btn-secondary btn-sm">
                                        Delete
                                        </Button>
                                </li>)
                        })
                    }
                </div>

            </div>
        )
    }
}

export default UiTracker;