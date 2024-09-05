import Menu from "./Menu";

interface HeaderProps {
	title: string;
}
const Header = ({ title }: HeaderProps) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Menu />
		</header>
	);
};

export default Header;
