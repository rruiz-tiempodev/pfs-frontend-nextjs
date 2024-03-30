'use server';
import {z} from 'zod';
import { uuidv4 } from "uuid";
import {CurrencyEnum, IncomeExpense, IncomeExpenseEnum} from "@/app/lib/definitions";
import {createIncome, getCurrencyExchange} from "@/app/util/data";


export async function createIncomeAction(formData: FormData) {
    await createIncomeExpenseAction(formData, IncomeExpenseEnum.INCOME);
}

export async function createExpenseAction(formData: FormData) {
    await createIncomeExpenseAction(formData, IncomeExpenseEnum.EXPENSE);
}

export async function createIncomeExpenseAction(formData: FormData, expenseType: IncomeExpenseEnum) {
    const currencyExchange = getCurrencyExchange();
    const schema = z.object({
        description: z.string(),
        currency: z.string(),
        amount: z.number()
    });
    const data = schema.parse(Object.fromEntries(formData.entries()));
    const currency = data.currency as CurrencyEnum;
    let amountInUSD: number
    let amountInMX: number
    if (currency === CurrencyEnum.MXP) {
        amountInUSD = currencyExchange["MXN_USD"] / data.amount;
        amountInMX = data.amount;
    } else {
        amountInMX = currencyExchange["USD_MXN"] * data.amount;
        amountInUSD = data.amount;
    }
    const incomeExpense: IncomeExpense = {
        description: data.description,
        currency,
        amount: data.amount,
        expenseType,
        id: uuidv4(),
        amountInUSD,
        amountInMX
    }

    await createIncome(incomeExpense);
}