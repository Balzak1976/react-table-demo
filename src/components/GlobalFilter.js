import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({ filter, setFilter }) => {
	const [value, setValue] = useState(filter);

  // функция вызывает задержку фильтрации 1сек при вводе в поле поиска  
	const onChange = useAsyncDebounce((value) => {
		setFilter(value || undefined);
	}, 1000);

	return (
		<span>
			Search:{' '}
			<input
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
			/>
		</span>
	);
};
