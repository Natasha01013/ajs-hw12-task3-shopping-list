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
        const existingItem = this.items.find(item => item.id === product.id); // ищем товар в корзине по его id
        if(existingItem) { // Если товар найден в корзине
            if(quantity === 1 && existingItem.quantity === 1) {
                return; // Если товар уникальный, добавляем только один экземпляр
            }
            existingItem.quantity += quantity; // Увеличиваем количество для многократного товара
        } else { //Если товар не найден в корзине 
            this.items.push({...product, quantity}); // Добавляем товар с количеством
        }
    }

    // Уменьшение количества товара в корзине
    reduceProductQuantity(productId: number): void {
        const item = this.items.find(item => item.id === productId); // ищем товар в корзине по его id
        if(item && item.quantity > 1) {
            item.quantity -= 1; // Уменьшаем количество товара на 1
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