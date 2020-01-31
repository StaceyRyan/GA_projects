import React from 'react';
// import Dog from './Dog';
import Bootstrap from 'react-bootstrap';

const dogButtonStates = {
    showLogout: 1,
    showAllDogs: 2,
    showNewDog: 3,
    showUpdateDog: 4,
    allButtons: 5
}
class DogButtons extends React.Component {

    constructor() {
        super();
        this.state = {
            buttonState: dogButtonStates.noButtons,
            showDogList: []
        };
        this.handleShowAllDogsButton = this.handleShowAllDogsButton.bind(this);
        this.handleSpecificDogButton = this.handleSpecificDogButton.bind(this);

    }

    handleShowAllDogsButton = async () => {
        console.log('handle show dogs button')
        const fetchDogs = await fetch('/dog/show_all',
            {credentials: "same-origin"})
        const dogList = await fetchDogs.json()
        console.log(dogList)
        this.setState({
            showDogList: dogList
        })
    }

    handleSpecificDogButton = async () => {
        console.log('specific dog button')
        const fetchOneDog = await fetch(`http://localhost:4000/dog/showOne/:${this._id}`)
        const oneDog = await fetchOneDog.json()
        console.log(oneDog)
        this.setState({
            showDogList: oneDog
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
            return <li key={doggo._id}>
                    <button onClick={this.handleSpecificDogButton}>
                        {doggo.name}
                    </button>
                </li>
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