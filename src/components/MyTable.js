import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { MY_COLUMNS } from './myGroupColumns';
import './table.css';

function MyTable() {
	const columns = useMemo(() => MY_COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((header) => (
							<th {...header.getHeaderProps}>{header.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default MyTable;
