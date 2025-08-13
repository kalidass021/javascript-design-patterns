// Command Query Responsibility Segregation pattern

// split logic into two parts - commands (write) and queries (read)

// command: changes data

const createOrder = (data) => {
    return { orderId: Date.now(), ...data};
}

// query: reads data

const getOrders = () => {
    return [{ orderId: 1, item: 'Book'}];
}

console.log(createOrder( {item: 'Pen'}));
console.log(getOrders());