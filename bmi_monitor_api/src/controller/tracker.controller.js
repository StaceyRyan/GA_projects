const TrackerModel = require('../models/Tracker');
const moment = require('moment');

class TrackerControl {
    async reset() {
        await TrackerModel.deleteOne({});
        return "Reset Complete";
    }

    async newEntry(body) {
        let status = 0;
        let msg = "";

        console.log(body.date);

        //body.date = moment(body.date, 'DD-MM-YYYY');
        console.log(body);

        try {
            await TrackerModel.create(body);
            status = 200;
            msg = "New entry added";
        }
        catch (e) {
            await this.updateByDate(body.date, body);
            status = 204;
            msg = "Record updated";
        }
        return { status: status, msg: msg };
    }

    async findAll() {
        return TrackerModel.find({})
    }

    async updateByDate(date, body) {
        console.log(`typeof date: ${typeof date}, value of date: ${date}`);
        let updatedRecord = await TrackerModel.findOneAndUpdate(
            {date: date},
            body,
            {new: true});
        console.log(`updatedRecord: ${updatedRecord}`);
        return updatedRecord;
    }


    async deleteByDate(date) {
        const delRes = await TrackerModel.deleteOne({ date });

        if (delRes.deletedCount > 0) {
            return `BMI entry ${date} deleted`;
        }
        //can have return without else because if the if statement fails
        //then it MUST return this
        return `BMI entry ${date} not deleted`;
    }
}

module.exports = TrackerControl 