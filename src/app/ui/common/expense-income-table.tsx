import {formatAmount} from "@/app/util/utils";
import {getCurrencyExchange, getFixedExpenses, getIncomes} from "@/app/util/data";
import {IncomeExpense, IncomeExpenseEnum} from "@/app/lib/definitions";
import {DataGrid, GridRowsProp} from '@mui/x-data-grid';

const ExpenseIncomeTable = async ({title, type}: {
    title: "";
    type: IncomeExpenseEnum;
}) => {

    const exchange = await getCurrencyExchange();
    const data:IncomeExpense[] = type == IncomeExpenseEnum.INCOME ? await getIncomes() : await getFixedExpenses();

    const formattedData:GridRowsProp<IncomeExpense> = data.map(item => {
        const newItem:IncomeExpense = {...item}
        newItem.amountInMX = formatAmount(item.amount, item.currency, 'MXP', exchange);
        newItem.amountInUSD = formatAmount(item.amount, item.currency, 'USD', exchange);
        return newItem;
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 300 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field:"AmountInMX", width: 150, headerName: 'Amount In MX',
            /*valueGetter:  (params) => {
                 return formatAmount(params.row.amount, params.row.currency, 'MXP', exchange);
             }*/
        },
        { field: 'AmountInUSD', width: 150, headerName: 'Amount in USD',
            /*valueGetter:  (params) => {
                return formatAmount(params.row.amount, params.row.currency, 'USD', exchange);
            }*/
        },
        { field: 'expenseType', headerName: 'Type', width: 100 }
    ];

    return (
        <div style={{ height: '100%', width: '100%' }}>
            {title}
            <DataGrid
                rows={formattedData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )

}

export default ExpenseIncomeTable;