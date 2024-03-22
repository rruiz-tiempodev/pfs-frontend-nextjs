
export const getFixedExpenses = async () => {
    const data = await fetch('http://localhost:8080/api/fixed-expense');
    return await data.json();
}

export const getIncomes = async () => {
    const data = await fetch('http://localhost:8080/api/income');
    return await data.json();
}

export const getBudget = async (type) => {
    const data = await fetch('http://localhost:8080/api/budget/by-month?year=2024&month=03&zone=CST&type=' + type);
    return await data.json();
}

export const getCurrencyExchange = async() => {
    "use server";
    const data = await fetch('http://localhost:8080/api/currency-exchange?currencies=USD_MXN,MXN_USD');
    return await data.json();
}