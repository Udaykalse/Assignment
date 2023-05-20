
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface DataTableProps {
  rows: { id: number; name: string; age: number }[];
  columns: GridColDef[];
}

function DataTable(props: DataTableProps) {
  const { rows, columns } = props;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}  pageSizeOptions={[5, 10, 20]} />
    </div>
  );
}

export default DataTable;




