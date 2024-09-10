interface StackProps {
	stack: {
		name: string;
		img: string;
		lv: number;
	};
	style?: React.CSSProperties; // Add this line to accept inline styles
}

const SingleStack: React.FC<StackProps> = ({ stack, style }) => {
	const maxLevel = 5;
	return (
		<li
			className="exp__stack__item"
			style={style}>
			
				<img
					src={stack.img}
					alt={stack.name}
				/>
			
			<div className="progress-bar">
				<div
					className="progress-bar__fill"
					style={{ width: `${(stack.lv / maxLevel) * 100}%` }}></div>
			</div>
		</li>
	);
};

export default SingleStack;
