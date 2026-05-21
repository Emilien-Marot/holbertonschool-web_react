import { RowID, RowElement } from "./interface.js"

declare function insertRow(row: RowElement): RowID
declare function updateRow(rowId: RowID, row:RowElement): RowID
declare function deleteRow(rowId: RowID)