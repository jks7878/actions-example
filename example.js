function factorial(a, b) {
    if(a === b) return a;
    throw new Error();
    return a * factorial(a + 1, b);
}

module.exports = { factorial }
