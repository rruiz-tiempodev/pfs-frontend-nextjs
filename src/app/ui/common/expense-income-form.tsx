//import "./styles.css";
import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box, Select
} from "@mui/material";
import * as React from "react";
import {createIncomeAction} from "@/app/util/actions";

const ExpenseIncomeForm = ({title}: {title: string}) => {
    return (
        <div className="App">
            <AppBar>
                <toolbar>
                    <h1 style={{textAlign: "center"}}>{title}</h1>
                </toolbar>
            </AppBar>
            <form style = {{marginTop: '80px'}} action={createIncomeAction}>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Description"
                    variant="outlined"
                    name="description"
                />
                <br />
                <Select
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Currency"
                    variant="outlined"
                    name="currency"
                >
                    <option value="USD">USD</option>
                    <option value="MXP">MXP</option>
                </Select>
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="amount"
                    variant="outlined"
                    name="amount"
                />
                <br />
                <br />
                <Button variant="contained" color="primary">
                    save
                </Button>
            </form>
        </div>
    );
}

export default ExpenseIncomeForm;