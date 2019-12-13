import React from 'react';

export class DataForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: "",
            height: "",
            chest: "",
            waist: "",
            hips: "",
            bmi: "",
        };

        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.addNewData = this.addNewData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKeyStrike(event) {
        //the name on the RHS, in event.target.name is a protected term
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log('submit button handled');

        // if (!this.props.match.params.date) {
        //     this.addNewData();
        // }
        // else {
        //     this.updateData();
        // }
    }

    addNewData() {
        fetch('http://localhost:3000/add', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: this.state.date,
                height: this.state.height,
                chest: this.state.chest,
                waist: this.state.waist,
                hips: this.state.hips,
                bmi: this.state.bmi,
            })
        })
            .then((res) => res.json()).then((data) => {
                console.log(data);
                // this.props.history.push('/');
            })
            .catch((e) => console.log(e));
    }

    updateData() {
        const date = this.props.match.params.id;
        fetch(`http://localhost:3000/update/${date}`, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify({
                date: this.data.date,
                height: this.data.height,
                chest: this.data.chest,
                waist: this.data.waist,
                hips: this.data.hips,
                bmi: this.data.bmi,
            }).then((res) => {
                console.log('update data');
                this.props.histoyr.push('/');
            })
        })
                .catch((e) => console.log(e));
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading Data</p>
        }
        return (
            <React.Fragment>
                <form onSubmit={this.handleAdd}>
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
                <div className={"btn btn-secondary btn-sm"}>
                < button onClick={this.addNewData} type="button" className="btn btn-secondary btn-sm">Submit</button>
                </div>
            </React.Fragment>
        )
    }
}

export default DataForm;