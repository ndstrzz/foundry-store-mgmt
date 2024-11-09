class Product {
    constructor(name, price, description, size) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.size = size;

        // generate different id depending on timestamp and random number
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        this.id = timestamp + random.toString().padStart(3, "0");
    }
}

module.exports = { Product };
