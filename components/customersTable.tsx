import React from 'react';
import { Table, Button } from 'react-bootstrap';
export default function CustomersTable(props: any): JSX.Element {
	const { customersPaginate, onDelete, onEdit, onSort }: any = props;

	return (
		<Table className="table-sm table-responsive">
			<thead>
				<tr style={{ cursor: 'pointer' }}>
					<th className="pa-2" style={{ color: 'grey' }}>
						S/N
					</th>
					<th onClick={() => onSort('name')}>
						<span className="material-icons" style={{ color: 'grey' }}>
							Name
						</span>
					</th>
					<th onClick={() => onSort('email')}>
						<span className="material-icons dm-red" style={{ color: 'grey' }}>
							Email
						</span>
					</th>
					<th onClick={() => onSort('address')}>
						<span className="material-icons" style={{ color: 'grey' }}>
							location
						</span>
					</th>
					<th onClick={() => onSort('phone')}>
						<span className="material-icons" style={{ color: 'grey' }}>
							contact_phone
						</span>
					</th>
					<th>
						<span className="material-icons" style={{ color: 'grey' }}>
							add
						</span>
					</th>
					<th>
						<span className="material-icons" style={{ color: 'grey' }}>
							delete
						</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{customersPaginate.map((customer: any, index: any) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{customer.name}</td>

						<td>{customer.email}</td>
						<td>{customer.address}</td>
						<td>{customer.phone}</td>

						<td>
							<Button onClick={() => onEdit(customer)} className="btn-sm">
								Edit
							</Button>
						</td>
						<td>
							<Button onClick={() => onDelete(customer._id)} className="btn-danger btn-sm">
								<span className="material-icons">delete</span>
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
