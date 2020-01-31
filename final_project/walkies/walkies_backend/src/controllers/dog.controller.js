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

    async findById(_id, body){
        console.log(`dog located: ${name}`);
        let oneDog = await DogModel.findById({_id: _id});
        return oneDog;
    }

    async updateById(_id, body) {
        console.log(`value of _id: ${_id}`);
        let updateRecord = await DogModel.findOneAndUpdate({_id: _id}, body, { new: true });
        console.log(`updatedRecord: ${updateRecord}`);
        return updateRecord;
    }

    async deleteById(dogId) {
        const deleteDogEntry = await DogModel.deleteOne({ _id: dogId });

        if (deleteDogEntry.deletedCount > 0) {
            return `Dog ${DogModel.name} deleted`;
        }
        return `Entry for ${DogModel.name} not deleted`;
    }
}

module.exports = DogControl