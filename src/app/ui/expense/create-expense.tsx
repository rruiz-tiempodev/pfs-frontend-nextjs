'use client'

import {useState} from "react";
import Button from "@mui/material/Button";
import BasicModal from "@/app/ui/common/modal";
import ExpenseIncomeForm from "@/app/ui/common/expense-income-form";

export default function CreateExpenseButton() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (<div>
        <Button onClick={handleOpen}>Create</Button>
        <BasicModal title={"Add an Expense"} open={open} handleClose={handleClose}>
            <ExpenseIncomeForm title="Add an Expense"></ExpenseIncomeForm>
        </BasicModal>
    </div>)
}
