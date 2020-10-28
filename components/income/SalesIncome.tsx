import React from 'react';
import styles from './sales.module.scss';
import { Card, Col, Row } from 'react-bootstrap';
import GetYearlySale from '../dashboard/getYearlySales';
import GetMonthlySales from '../dashboard/getMonthlySales';
import GetTodaySales from '../dashboard/getTodaySales';

export default function SalesIncome() {
	return (
		<>
			<div>
				<Row>
					<Col lg={12}>
						<GetTodaySales></GetTodaySales>
					</Col>
				</Row>
			</div>
			<div>
				<GetMonthlySales></GetMonthlySales>
			</div>
			<div>
				<GetYearlySale></GetYearlySale>
			</div>
		</>
	);
}
