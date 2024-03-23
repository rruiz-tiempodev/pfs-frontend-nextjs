import ExpenseIncomeTable from '@/app/ui/common/expense-income-table'
import CircularIndeterminate from "@/app/ui/common/loader";
import {Suspense} from 'react';
import {IncomeExpenseEnum} from "@/app/lib/definitions";

export default function Page() {
    return (
        <Suspense fallback={<CircularIndeterminate/>}>
            <ExpenseIncomeTable title = 'Incomes' type = {IncomeExpenseEnum.INCOME}/>
        </Suspense>
    );
}