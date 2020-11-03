import React, { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import styles from './navigation.module.scss';

interface seachProps {
	value: string;
	onChange: (event: ChangeEvent<HTMLFormControlsCollection>) => void;
}

export default function SearchBox(props: seachProps): JSX.Element {
	const { value, onChange } = props;
	return (
		<>
			<Form.Control
				type="text"
				name="query"
				placeholder="search"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={styles.control}
			></Form.Control>
		</>
	);
}
