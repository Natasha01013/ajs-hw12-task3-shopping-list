interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default class Cart {
    private items: Product[] = [];

    // Добавление товара в корзину
    addProduct(product: Product, quantity: number): void {
        const existingItem = this.items.find(item => item.id === product.id);
        if(existingItem) {
            if(quantity === 1 && existingItem.quantity === 1) {
                // Если товар уникальный, добавляем только один экземпляр
                return;
            }
            existingItem.quantity += quantity; // Увеличиваем количество для многократного товара
        } else {
            this.items.push({...product, quantity}); // Добавляем товар с количеством
        }
    }

    // Уменьшение количества товара в корзине
    reduceProductQuantity(productId: number): void {
        const item = this.items.find(item => item.id === productId);
        if(item && item.quantity > 1) {
            item.quantity -= 1;
        }
    }

    // Получение всех товаров в корзине
    getProducts(): Product[] {
        return this.items;
    }

    // Общая стоимость корзины
    getTotalCarts(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}