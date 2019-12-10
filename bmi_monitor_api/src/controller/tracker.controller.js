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

        body.date = moment(body.date).toISOString();
        console.log(body);

        try {
            await TrackerModel.create(body);
            status = 200;
            msg = "New entry added";
        }
        catch (e) {
            status = 500;
            msg = e;
        }
        return { status: status, msg: msg };
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