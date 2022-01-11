class CoffeeShop{
    constructor(name){ // menu, orders
        this.name = name;
        this.menu = [
            {   name: 'coffee',
                type: 'drink',
                price: 200,
            }, 
            {
                name: 'cake',
                type: 'food',
                price: 400,
            },
            {
                name: 'pepsi',
                type: 'drink',
                price: 300,
            }, 
        ];
        this.orders = [];
        this.amount = 0;
    }

    addOrder(value){
        for (let item of this.menu){
            if (item.name === value){
                this.amount += item.price;
                this.orders.unshift(item.name);
                console.log('Order added.')
                return;
            }
        }
        return 'This item is currently unavailable!'
    }

    fullFillOrder(){
        if (this.menu.length !== 0){
            let item = this.orders[this.orders.length-1];
            this.orders.length -= 1;
            return `The ${item} is ready.`
        } else {
            return 'All orders have been fullfilled'
        }
    }

    listOrders(){
        return this.orders;
    }

    dueAmount(){
        return this.amount;
    }

    cheapestItem(){
        let min = this.menu[0].price;
        for (let item of this.menu){
            if (item.price<min){
                min = item.price;
            }
        }
        return min;
    }

    drinksOnly(){
        let list = [];
        this.menu.forEach((item)=>{
            if (item.type === 'drink'){
                list.push(item.name);
            }
        });
        return list;
    }

    foodOnly(){
        let list = [];
        this.menu.forEach((item)=>{
            if (item.type === 'food'){
                list.push(item.name);
            }
        });
        return list;
    }
}

const shop = new CoffeeShop('Teha\'s');

console.log(shop.addOrder('pepsi')); // Order added.
console.log(shop.addOrder('beer'));  // This item is currently unavailable!
console.log(shop.listOrders()); // pepsi
console.log(shop.dueAmount());  // 300
console.log(shop.fullFillOrder()); // The pepsi is ready.
console.log(shop.drinksOnly()); // [ 'coffee', 'pepsi' ]
console.log(shop.foodOnly());   // [ 'cake' ]