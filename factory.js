module.exports = function pizzaPerfect(){

    pizzaList = [];

    const smallTotal = 0;
    const mediumTotal = 0;
    const largeTotal = 0;

    function prices(size){
        let price = 0;
        if(size === 'small'){
            price += 31.99;
        }else if(size === 'medium'){
            price += 76.99;
        }else if(size === 'large'){
            price += 98.99;
        }else return;
        pizzaList.push({
            size,
            price
        });
    };

    function pizzaPrice(){
        return pizzaList;
    };

    function pricing(price){
        const filtered = [];
        for(let i=0; i<pizzaList.length; i++){
            const action = pizzaList[i];
            if(action.price === price){
                filtered.push(action)
            }
        }return filtered;
    }

    function total(total){
        let grandTotal = 0;
        for (var i=0; i<pizzaList.length; i++){
            const action = pizzaList[i];
            if(action.total === total){
                grandTotal += action.price;
            }
        }return total;
    };

    function grandTotal(){
        return total('small') + total('medium') + total('large')
    };

    function fixing(){
        const smallTotal = total('small').toFixed(2)
        const mediumTotal = total('medium').toFixed(2)
        const largeTotal = total('large').toFixed(2)
        return {
            smallTotal,
            mediumTotal,
            largeTotal,
            grandTotal: grandTotal().toFixed(2)
        }
    }
    function due(){
        alert("You have successfully paid, thank you!");
    }
    function paid(){
        
        alert("Your order will be delivered soon, thank you!");
    }

    return{
        prices,
        pizzaPrice,
        total,grandTotal,
        pricing,
        fixing,
        due,
        paid
    }

}