import React, { useMemo } from 'react';
import { usePagination, useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';

export const PaginationTable = () => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		prepareRow,
		page,
		previousPage,
		nextPage,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 4 },
		},
		usePagination
	);

	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					{footerGroups.map((footerGroup) => (
						<tr {...footerGroup.getFooterGroupProps}>
							{footerGroup.headers.map((column) => (
								<td {...column.getFooterProps()}>{column.render('Footer')}</td>
							))}
						</tr>
					))}
				</tfoot>
			</table>
			<div>
				<span>
					Page {pageIndex + 1} {`of ${pageOptions.length} `}
				</span>
				<input
					type='number'
					defaultValue={pageIndex + 1}
					onChange={(e) => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0;
						gotoPage(page);
					}}
				/>
				<select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
					{[10, 15, 20].map((pageSize) => (
						<option value={pageSize} key={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					{'<<'}
				</button>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					Previous
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					Next
				</button>
				<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
					{'>>'}
				</button>
			</div>
		</>
	);
};
