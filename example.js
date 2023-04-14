function factorial(a, b) {
    if(a === b) return a;

    return a * factorial(a + 1, b);
}

module.exports = { factorial }
