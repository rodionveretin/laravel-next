import { useState } from 'react';

import styles from '../../../public/assets/sass/components/input.module.scss';

interface InputProps {
	caption?: string;
	placeholder?: string;
	value: string;
	disabled?: boolean;
	onChange: Function;
}

// interface InputProps

export default function Input({ caption, placeholder, value: initialValue, onChange }: InputProps) {
	const [value, setValue] = useState(initialValue || '');

	const handleChange = (e: { target: { value: any } }) => {
		const newValue = e.target.value;
		setValue(newValue);
		if (onChange) {
			onChange(newValue);
		}
	};

	return (
		<label htmlFor="customVariant" className={styles.input}>
			{caption ? <div className={styles.input__caption}>{caption}</div> : ''}
			<div className={styles.input__field}>
				<input
					id="customVariant"
					type="text"
					className={styles.input__input}
					placeholder={placeholder ? placeholder : ''}
					onChange={handleChange}
				/>
			</div>
		</label>
	);
}
