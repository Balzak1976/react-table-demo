import React, { useMemo } from 'react';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import MyGlobalFilter from './MyGlobalFilter';
import { MY_COLUMNS } from './myGroupColumns';
import './table.css';

function MyFilteringTable() {
	const columns = useMemo(() => MY_COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter } =
		useTable(
			{
				columns,
				data,
			},
			useGlobalFilter,
			useSortBy,
		);

	return (
		<>
			<MyGlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((header) => (
								<th {...header.getHeaderProps(header.getSortByToggleProps())}>
									{header.render('Header')}
									<span>{header.isSorted ? (header.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
								</th>
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
				<tfoot>
					{footerGroups.map((footerGroup) => (
						<tr {...footerGroup.getFooterGroupProps()}>
							{footerGroup.headers.map((footer) => (
								<td {...footer.getFooterProps()}>{footer.render('Footer')}</td>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</>
	);
}

export default MyFilteringTable;
