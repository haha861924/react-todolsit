import './App.css';
import { Button } from '@/components';

function App() {
	return (
		<div className='App'>
			<Button onClick={() => console.log('clicked')}>Click me</Button>
		</div>
	);
}

export default App;
