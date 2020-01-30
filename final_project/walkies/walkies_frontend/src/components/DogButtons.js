import React from 'react';
// import Dog from './Dog';
import Bootstrap from 'react-bootstrap';

const dogButtonStates = {
    showLogout: 1,
    showAllDogs: 2,
    showNewDog: 3,
    showUpdateDog: 4,
    hideButtons: 5
}
class DogButtons extends React.Component {

    constructor() {
        super();
        this.state = {
            buttonState: dogButtonStates.hideButtons,
            showDogList: []
        };
        this.handleShowAllDogsButton = this.handleShowAllDogsButton.bind(this);

    }

    handleShowAllDogsButton = async () => {
        console.log('handle show dogs button')
        const fetchDogs = await fetch('http://localhost:4000/dog/show_all')
        const dogList = await fetchDogs.json()
        console.log(dogList)
        this.setState({
            showDogList: dogList
        })
    }

    render() {
        if (this.state.showDogList.length === 0) {
            return (
            <>
                <button onClick={this.handleShowAllDogsButton}>
                    Go To Your Dogs
                </button>
            </>
           )}
           const allDogList = this.state.showDogList.map(doggo => {
            return <li key={doggo._id}>{doggo.name}</li>
        })
        return (
            <>
            <p>Your Dog List</p>
            <ul>
                { allDogList } 
            </ul>
        
            </>
        )
    }
}

export default DogButtons;