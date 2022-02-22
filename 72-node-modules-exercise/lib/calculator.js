
const calculator = {
    sum: 0,
    add: function (num) {
        this.sum += num;
        return this;
    },
    subtract: function (num) {
        this.sum -= num;
        return this;
    },
    multiply: function (num) {
        this.sum *= num;
        return this;
    },
    divide: function (num) {
        this.sum /= num;
        return this;
    },
    total: function () {
        const retVal = this.sum;
        this.sum = 0;
        return retVal;
    },
};

module.exports = calculator;
