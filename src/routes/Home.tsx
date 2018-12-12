import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const HomeWrapper = styled.div`margin-top: 20px;`;

const EmptyPage = styled.div`
	font-size: 30px;
	text-align: center;
	color: #4d4d4d;
`;

interface IProps {
	username?: string;
}

class Home extends React.Component<IProps> {
	public notify = () => {
		return toast(<Msg />);
	};
	public render() {
		const EmptyMemo = () => (
			<div className="container">
				<EmptyPage>
					<b>{this.props.username}</b> isn't registered or hasn't written any memo
				</EmptyPage>
			</div>
		);
		return (
			<HomeWrapper>
				{this.props.username ? null : <EmptyMemo />}
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<button onClick={this.notify}>click</button>
				<ToastContainer />
			</HomeWrapper>
		);
	}
}

const Msg = ({ closeToast }: any) => (
	<div>
		Lorem ipsum dolor
		<button>Retry</button>
		<button onClick={closeToast}>Close</button>
	</div>
);

export default Home;
