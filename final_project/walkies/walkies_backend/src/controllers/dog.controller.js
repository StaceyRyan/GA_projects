const DogModel = require('../models/Dog.model');

class DogControl {

    async newEntry(body) {
        let status = 0;
        let msg = "";

        console.log(body._id);

        try {
            await DogModel.create(body);
            status = 200;
            msg = "New dog added";
        }
        catch (e) {
            await this.updateById(body._id, body);
            status = 204;
            msg = "Record updated";
        }
        return { status: status, msg: msg };
    }

    async findAll() {
        return DogModel.find({})
    }

    async updateById(_id, body) {
        console.log(`value of _id: ${id}, dog name: ${name}`);
        let updatedRecord = await DogModel.findOneAndUpdate(
            name,
            breed,
            dog_owner_name,
            {address: address},
            health_issues,
            notes,
            avatar,
            body,
            { new: true });
        console.log(`updatedRecord: ${updatedRecord}`);
        return updatedRecord;
    }

    async deleteById(_id) {
        const deleteResult = await DogModel.deleteOne({ _id: _id });

        if (deleteResult.deletedCount > 0) {
            return `Dog ${name} deleted`;
        }
        //can have return without else because if the if statement fails
        //then it MUST return this
        return `Entry for ${name} not deleted`;
    }
}

module.exports = DogControl