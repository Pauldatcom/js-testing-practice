export function factorial(n) {
    if (typeof n !== "number" || Number.isNaN(n)) {
        throw new TypeError("n must be a number")
    }

    // Factorial only works with integers, not decimals
    if (!Number.isInteger(n)) {
        throw new RangeError("n must be an integer")
    }

    if (n < 0) {
        throw new RangeError("n must be non-negative")
    }

    if (n === 0 || n === 1) {
        return 1
    }

    let result = 1

    for (let i = 2; i <= n; i++) {
        result *= i
    }

    return result
}
