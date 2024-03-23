import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import {Budget, BudgetTypeEnum, IncomeExpenseEnum} from "@/app/lib/definitions";
import {getBudget, getCurrencyExchange} from "@/app/util/data";
import {exchangeCurrency, formatAmount} from "@/app/util/utils";

const calcAllTotal = (budget, exchangeCurrency) => {
    let totalIncomes = calcTotal(budget['incomes'], exchangeCurrency)
    let totalExpenses = calcTotal(budget['expenses'], exchangeCurrency)
    return totalIncomes - totalExpenses;
}

const calcTotal = (items, exchangeCurrencyMap) => {
    return items.map(item => {
        return exchangeCurrency(item.amount, item.currency, 'MXP', exchangeCurrencyMap)
    }).reduce((a,b) => {
        return a + b;
    })
}

const BudgetTable = async ({type, title}: {
    type: BudgetTypeEnum;
    title: String;
}) => {
    const [currencyExchange, budget]:[object, Budget[]] = await Promise.all([
        await getCurrencyExchange(),
        await getBudget(type)
    ]);

    return (
        <TableContainer component={Paper}>
            {budget.map(budget =>
                <Table key={budget.id} sx={{ minWidth: 300 }} aria-label={title}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={4}>
                                {budget.description}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {budget['incomes'].map(income =>
                            <TableRow key={income.id}>
                                <TableCell>{income.description}</TableCell>
                                <TableCell align="right">{formatAmount(income.amount,income.currency, 'MXP', currencyExchange)}</TableCell>
                            </TableRow>
                        )}
                        {budget['expenses'].map(expense =>
                            <TableRow key={expense.id}>
                                <TableCell>{expense.description}</TableCell>
                                <TableCell align="right"><font color={"red"}>({Intl.NumberFormat('es-MX', {
                                    style: 'currency',
                                    currency: 'MXP',
                                    currencySign: 'accounting'
                                }).format(exchangeCurrency(expense.amount,expense.currency, 'MXP', currencyExchange))})</font></TableCell>
                            </TableRow>
                        )}
                        <TableRow>
                            <TableCell><b>Total</b></TableCell>
                            <TableCell align="right"><b>{Intl.NumberFormat('es-MX', {
                                style: 'currency',
                                currency: 'MXP'
                            }).format(calcAllTotal(budget, currencyExchange))}</b></TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            )}
        </TableContainer>
    );
}


export default BudgetTable;