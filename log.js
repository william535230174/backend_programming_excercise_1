function isPrime (num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt (num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function displayPrimes () {
    for (let i = 1; i <= 1000; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

displayPrimes ();