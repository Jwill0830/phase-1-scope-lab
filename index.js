window.customerName = 'bob';
window.leastFavoriteCustomer = 'initial value';

function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}


function overwriteBestCustomer(newCustomer) {
    window.bestCustomer = newCustomer;
}

function changeLeastFavoriteCustomer() {
    throw new Error("Assignment to constant variable.");
    window.leastFavoriteCustomer = 'new value';
}

