import React from 'react';

class CalcBodyMass extends React.Component {

    calcBodyMass = async () => {
        let weight = this.weight;
        let height = this.height / 100;
        let bmiHeight = height * height;
        return weight / bmiHeight
    }
}

export default CalcBodyMass;
