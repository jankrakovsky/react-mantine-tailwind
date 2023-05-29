import {Button} from '@mantine/core';

function App() {
	return (
		<div className="h-[800px] flex justify-center items-center bg-blue-100 gap-3">
			<Button color="blue.7">Button styled using Mantine!</Button>
			<Button className="bg-amber-300 rounded-none">Button styled using Tailwind!</Button>
		</div>
	);
}

export default App;
