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

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleAdd(event) {
        const date = event.target.date;
        const value = event.target.value;
        this.setState({ [date]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state);

        if (!this.props.match.params._id) {
            this.addNewData();
        }
        else {
            this.addNewData();
        }
    }

    addNewData() {
        fetch('http://local:3000/add', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: this.data.date,
                height: this.data.height,
                chest: this.data.chest,
                waist: this.data.waist,
                hips: this.data.hips,
                bmi: this.data.bmi,
            })
        })
            .then((res) => res.json()).then((data) => {
                console.log(data);
                this.props.history.push('/');
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
                                onChange={this.handleAdd} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Height:
                        <input type="text" name="height"
                                value={this.state.height}
                                className={"form-control"}
                                onChange={this.handleAdd} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Chest:
                        <input type="text" name="chest"
                                value={this.state.chest}
                                className={"form-control"}
                                onChange={this.handleAdd} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Waist:
                        <input type={Number} name="waist"
                                value={this.state.waist}
                                className={"form-control"}
                                onChange={this.handleAdd} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>
                            Hips:
                        <input type={Number} name="hips"
                                value={this.state.hips}
                                className={"form-control"}
                                onChange={this.handleAdd} />
                        </label>
                    </div>
                </form>
                <div className={"btn btn-secondary btn-sm"}>

                    <input type="submit" value="Submit" />
                </div>
            </React.Fragment>
        )
    }
}

export default DataForm;