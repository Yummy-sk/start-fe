export default function avg(...args) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] !== null && args[i] !== undefined) {
        sum += args[i];
        count++;
        }
    }
    return sum / count;
}
