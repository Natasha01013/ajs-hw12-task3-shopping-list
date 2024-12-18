import Cart from '../cart';

test('checking Cart method getProducts', () => {
    let cart = new Cart();
    let film = {
        id: 111,
        name: 'Мстители', 
        price: 500,
        quantity: 0,
    };
    let phone = {
        id: 222,
        name: 'iPhone 15', 
        price: 70000,
        quantity: 0,
    };
    cart.addProduct(film, 1);
    cart.addProduct(phone, 2);
    let products = cart.getProducts();
    expect(products).toEqual([{"id": 111, "name": "Мстители", "price": 500, "quantity": 1}, {"id": 222, "name": "iPhone 15", "price": 70000, "quantity": 2}]);
});

test('checking Cart method addProduct with unique product only once', () => {
    let cart = new Cart();
    let phone = {
        id: 2,
        name: 'iPhone 15', 
        price: 70000,
        quantity: 0,
    };
    cart.addProduct(phone, 1);
    cart.addProduct(phone, 1);
    
    // Получаем товары из корзины
    const products = cart.getProducts();
    
    // Проверяем, что айфон в корзине только один раз, и его количество равно 1
    expect(products.length).toBe(1);
    expect(products[0].id).toBe(2);
    expect(products[0].quantity).toBe(1);
});

test('checking Cart method addProduct with multiple product', () => {
    let cart = new Cart();
    let phone = {
        id: 2,
        name: 'iPhone 15', 
        price: 70000,
        quantity: 0,
    };
    cart.addProduct(phone, 2);
    
    // Проверяем, что количество айфонов в корзине равно 2
    const products = cart.getProducts();
    expect(products.length).toBe(1);
    expect(products[0].id).toBe(2);
    expect(products[0].quantity).toBe(2);

    // Добавляем еще 2 айфона
    cart.addProduct(phone, 2);

    // Проверяем, что количество айфонов стало 4
    expect(products[0].quantity).toBe(4);
});

test('checking Cart method reduceProductQuantity', () => {
    let cart = new Cart();
    let film = {
        id: 111,
        name: 'Мстители', 
        price: 500,
        quantity: 0,
    };
    let phone = {
        id: 222,
        name: 'iPhone 15', 
        price: 70000,
        quantity: 0,
    };
    cart.addProduct(film, 1);
    cart.addProduct(phone, 2);
    cart.reduceProductQuantity(222);
    expect(cart.getProducts()).toEqual([{"id": 111, "name": "Мстители", "price": 500, "quantity": 1}, {"id": 222, "name": "iPhone 15", "price": 70000, "quantity": 1}]);
});

test('checking Cart method getTotalCarts', () => {
    let cart = new Cart();
    let film = {
        id: 1,
        name: 'Мстители', 
        price: 500,
        quantity: 0,
    };
    let phone = {
        id: 2,
        name: 'iPhone 15', 
        price: 70000,
        quantity: 0,
    };
    cart.addProduct(film, 1);
    cart.addProduct(phone, 2);
    expect(cart.getTotalCarts()).toBe(140500);
});