import React from 'react';
import { Button } from 'react-bootstrap';


class EditForm extends React.Component {
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
        };

        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    handleKeyStrike(event) {
        //the name on the RHS, in event.target.name is a protected term
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });
    }

    async updateData() {
        const date = this.props.match.state.date;
        fetch(`http://localhost:3000/update/${date}`, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify({
                date: this.state.date,
                weight: this.state.weight,
                height: this.state.height,
                chest: this.state.chest,
                waist: this.state.waist,
                hips: this.state.hips,
                bmi: this.state.bmi,
            })
        }).catch((e) => console.log(e));
    }

    render() {
        console.log('Edit form check', this.props.record)
        return (
            <React.Fragment>
                <form onSubmit={this.handleEdit}>
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
                    <div className={"form-group"}>
                        <label>
                            BMI:
                        <input type="text" name="bmi"
                                value={this.state.bmi}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                </form>
                <Button onClick={this.updateData} variant="warning" size="lg">Update</Button>
            </React.Fragment>
        )
    }
}

export default EditForm;
