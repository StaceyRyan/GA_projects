import React from 'react';
import { Button } from 'react-bootstrap';

export class DataForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: "",
            weight: "",
            height: "",
            chest: "",
            waist: "",
            hips: "",
            bmi: "",
            submitDisabled: true
        };

        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.addNewData = this.addNewData.bind(this);
    }

    handleKeyStrike(event) {
        //the name on the RHS, in event.target.name is a protected term
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value }, () => {
            if (this.state.date && this.state.height && this.state.weight) {
                this.setState({
                    submitDisabled: false
                })
            }
            else {
                this.setState({
                    submitDisabled: true
                })
            }

        });
    }
    async addNewData() {
        const response = await fetch('http://localhost:3000/add', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
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
        this.props.handleAdd(this.state);
        if (!response.ok) {
            alert("This date is already entered");
        }
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading Data</p>
        }
        return (
            <React.Fragment>
                <form>
                    <div className={"form-group"}>
                        <label>
                            Date:
                        <input type="text" name="date"
                                value={this.state.date}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Weight:
                        <input type="text" name="weight"
                                value={this.state.weight}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Height:
                        <input type="text" name="height"
                                value={this.state.height}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Chest:
                        <input type="text" name="chest"
                                value={this.state.chest}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Waist:
                        <input type="text" name="waist"
                                value={this.state.waist}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Hips:
                        <input type="text" name="hips"
                                value={this.state.hips}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    {/* <div className={"form-group"}>
                        <label>
                            BMI:
                        <input type="text" name="bmi"
                                value={this.state.bmi}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div> */}
                </form>
                <Button onClick={this.addNewData} variant="primary" size="lg" disabled={this.state.submitDisabled}>Submit</Button>
            </React.Fragment>
        )
    }
}

export default DataForm;