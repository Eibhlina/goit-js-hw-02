// Zadeklaruj funkcję getShippingCost(country), która powinna sprawdzać możliwość dostawy towaru do kraju użytkownika (parametr country) 
// i zwracać komunikat o wyniku. Obowiązkowo użyj instrukcji switch.

// Format zwracanego ciągu znaków "Shipping to <country> will cost <price> credits", gdzie zamiast <country> i <price> 
// należy podstawić odpowiednie wartości.



// Lista krajów i koszt dostawy:

// China — 100 kredytów
// Chile — 250 kredytów
// Australia — 170 kredytów
// Jamaica — 120 kredytów


// Z listy widać, że dostawa jest możliwa nie wszędzie. 
// Jeśli podany kraj nie znajduje się na liście, funkcja powinna zwrócić ciąg znaków "Sorry, there is no delivery to your country".


function getShippingCost(country) {
    let price;
    switch (country) {
        case 'China': price = 100;
            break;
        case 'Chile': price = 250;
            break;
        case 'Australia': price = 170;
            break;
        case 'Jamaica': price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
    return `Shipping to ${country} will cost ${price} credits`;
}



console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"