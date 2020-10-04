import { Col, Container, Row, Spinner } from 'react-bootstrap';

interface ScreenLoaderProps {
	msg?: string;
}

export default function ScreenLoader({ msg }: ScreenLoaderProps): JSX.Element {
	return (
		<Container>
			<Row style={{ flex: 1 }}>
				<Col lg={12}>
					<div className="d-flex justify-content-center" style={{ height: '100vh' }}>
						<div className="my-auto text-center">
							<Spinner animation="border" role="status" style={{ width: '3rem', height: '3rem' }} />
							<h5 className="mt-3">{msg ? msg : 'Loading...'}</h5>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
