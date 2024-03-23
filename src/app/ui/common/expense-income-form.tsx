//import "./styles.css";
import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box
} from "@mui/material";
import * as React from "react";

const ExpenseIncomeForm = ({title}: {title: string}) => {
    return (
        <div className="App">
            <AppBar>
                <toolbar>
                    <h1 style={{textAlign: "center"}}>{title}</h1>
                </toolbar>
            </AppBar>
            <form style = {{marginTop: '80px'}}>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Description"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Currency"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="amount"
                    variant="outlined"
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