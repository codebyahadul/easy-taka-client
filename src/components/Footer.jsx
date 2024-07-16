const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} EasyTak. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;