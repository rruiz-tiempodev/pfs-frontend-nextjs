export const formatAmount = (amount, currency, display, currencyMap) => {

    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: display,
        currencySign: 'accounting'
    }).format(exchangeCurrency(amount, currency, display, currencyMap));
}

export const exchangeCurrency = (amount, currency, toCurrency, currencyMap) => {
    let amountToDisplay = 0;
    if (toCurrency === 'USD') {
        if (currency === 'USD') {
            amountToDisplay = amount
        } else {
            amountToDisplay  = amount * currencyMap['MXN_USD']
        }
    } else if (toCurrency === 'MXP') {
        if (currency === 'MXP') {
            amountToDisplay = amount
        } else {
            amountToDisplay  = amount * currencyMap['USD_MXN']
        }
    }
    return amountToDisplay;
}