
import CircularIndeterminate from "@/app/ui/common/loader";
import { Suspense } from 'react';
import BudgetTable from "@/app/ui/budget/budget-table";
import {BudgetTypeEnum} from "@/app/lib/definitions";

export default function Page() {
    return (
        <Suspense fallback={<CircularIndeterminate/>}>
            <BudgetTable title = 'Expenses' type = {BudgetTypeEnum.MONTHLY}/>
        </Suspense>
    );
}