
import ExpenseIncomeTable from '@/app/ui/common/expense-income-table'
import CircularIndeterminate from "@/app/ui/common/loader";
import {Suspense} from 'react';
import {IncomeExpenseEnum} from "@/app/lib/definitions";
import CreateExpenseButton from "@/app/ui/expense/create-expense";


export default function Page() {

    return (
        <Suspense fallback={<CircularIndeterminate/>}>
            <ExpenseIncomeTable title="Expenses" type={IncomeExpenseEnum.EXPENSE}></ExpenseIncomeTable>
            <br/>
            <CreateExpenseButton/>
        </Suspense>
    );
}