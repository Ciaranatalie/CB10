function Header(props) {
// destructuring 
    const {children} = props;
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">Logo - {children}</div>
                    <Menu />
                </div>
            </div>
        </header>
    );
}

function Menu() {
    return (
            <nav className="nav">
                <ul className = "wrapper">
                    <li className="item">
                        <a href="#">About Us</a>
                    </li>
                    <li className="item">
                        <a href="#">Blog</a>
                    </li>
                </ul>
                
    );
};

function MenuItem(props) {
    const { label, href = "#" } = props;
    return (
        <li className="item">
            <a href="#">{label}</a>
        </li>
    );
}

export { Header };