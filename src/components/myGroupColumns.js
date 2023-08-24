import { format } from 'date-fns';

export const MY_COLUMNS = [
	{
		Header: 'My Table',
		Footer: 'My Table',
		columns: [
			{
				Header: 'id',
				Footer: 'id',
				accessor: 'id',
			},
			{
				Header: 'Fist Name',
				Footer: 'Fist Name',
				accessor: 'first_name',
			},
			{
				Header: 'Date of Birth',
				Footer: 'Date of Birth',
				accessor: 'date_of_birth',
				Cell: ({ value }) => format(new Date(value), 'dd MM yyyy'),
			},
		],
	},
];
