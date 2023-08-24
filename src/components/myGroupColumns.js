import { format } from 'date-fns';

export const MY_COLUMNS = [
	{
		Header: 'id',
		accessor: 'id',
	},
	{
		Header: 'Fist Name',
		accessor: 'first_name',
	},
	{
		Header: 'Date of Birth',
		accessor: 'date_of_birth',
		Cell: ({ value }) => format(new Date(value), 'dd MM yyyy'),
	},
];
