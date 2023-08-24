import { format } from 'date-fns';
import MyColumnFilter from './MyColumnFilter';

export const MY_COLUMNS = [
	{
		Header: 'My Table',
		Footer: 'My Table',
		columns: [
			{
				Header: 'id',
				Footer: 'id',
				Filter: MyColumnFilter,
				accessor: 'id',
			},
			{
				Header: 'Fist Name',
				Footer: 'Fist Name',
				Filter: MyColumnFilter,
				accessor: 'first_name',
			},
			{
				Header: 'Date of Birth',
				Footer: 'Date of Birth',
				Filter: MyColumnFilter,
				accessor: 'date_of_birth',
				Cell: ({ value }) => format(new Date(value), 'dd MM yyyy'),
			},
		],
	},
];
