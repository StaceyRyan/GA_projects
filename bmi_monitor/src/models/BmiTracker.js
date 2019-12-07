const BmiTracker = mongoose.model('BMI', bmiSchema);

BmiTracker.deleteOne({}).then((res) => {
    BmiTracker.create(bmiData.then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
});

module.exports = BmiTracker;