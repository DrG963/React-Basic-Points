const getRandomFloat = (min, max, decimalPlaces = 2) => {
    let float = Math.random() * (max - min) + min;
    return parseFloat(float.toFixed(decimalPlaces));
}

const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const names = [
    "John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", 
    "Diana Evans", "Evan Farris", "Grace Hughes", "Ivan Jenkins", "Kylie Lambert", 
    "Lucas Mitchell", "Monica Newton", "Nina O'Reilly", "Oliver Perez", "Penny Quinn", 
    "Ronald Russo", "Stella Saunders", "Tom Tucker", "Ursula Vincent", "Vera Williams"
];

const generateRandomTransaction = (id) => {
    return {
        id: id,
        customer: names[id],
        date: getRandomDate(new Date(2023, 6, 1), new Date(2023, 8, 30)).toISOString().split('T')[0],
        amount: getRandomFloat(15.15, 200.15)
    }
}

export const transactions = Array.from({ length: 19 }, (_, i) => generateRandomTransaction(i + 1));
