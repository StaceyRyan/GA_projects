import React from 'react';

class Dog extends React.Component {

    constructor() {
        super();
        this.state = {
            showAllDogs: []
        };
    }

    handleShowDogsButton = async () => {
        console.log('handle show dogs button')
        const showAllDogs = await fetch('http://localhost:4000/dogs/show_all')
        const dogEntries = await showAllDogs.json();
        this.setState({
            showAllDogs: dogEntries
        })
    }


    render() {
        return (
            <>
                <button onClick={this.handleShowDogsButton} className="btn btn-secondary btn-sm">
                    Go To Your Dogs
                </button>
            </>
        )
    }
}

export default Dog;