export enum IncomeExpenseEnum {
    EXPENSE= "EXPENSE", INCOME = "INCOME"
};

export enum BudgetTypeEnum {
    WEEKLY="WEEKLY", MONTHLY = "MONTHLY"
}

export enum CurrencyEnum {
    USD = "USD", MXP = "MXP"
}

export type IncomeExpense = {
    id:String,
    amount: number,
    expenseType: IncomeExpenseEnum,
    description: String,
    currency:CurrencyEnum,
    amountInMX: number,
    amountInUSD: number
}

export type Budget = {
    id: String,
    incomes: [IncomeExpense],
    expenses: [IncomeExpense],
    incomeExpenseType: IncomeExpenseEnum,
    description: String
}
