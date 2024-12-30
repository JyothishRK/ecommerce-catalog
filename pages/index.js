function HomePage(props) {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
                color: 'white',
                padding: '50px 20px',
                borderRadius: '10px',
                marginBottom: '30px'
            }}>
                <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>Welcome to Product-Vault</h1>
                <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>
                    Explore our extensive collection of products and find exactly what you need!
                </p>
                <a href="/products" style={{
                    textDecoration: 'none',
                    background: '#fff',
                    color: '#ff7e5f',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginTop: '20px',
                    display: 'inline-block'
                }}>
                    Browse Products
                </a>
            </div>

            {/* Features Section */}
            <div style={{ padding: '20px 0', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Why Choose Product-Vault?</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '15px', fontSize: '1.2rem' }}>
                        🔍 <strong>Search and Filter:</strong> Quickly find the products you’re looking for.
                    </li>
                    <li style={{ marginBottom: '15px', fontSize: '1.2rem' }}>
                        🛒 <strong>Detailed Product Pages:</strong> View product details and make informed decisions.
                    </li>
                    <li style={{ marginBottom: '15px', fontSize: '1.2rem' }}>
                        ⚡ <strong>Easy Navigation:</strong> Seamless shopping experience for all users.
                    </li>
                </ul>
            </div>

            {/* Footer Note */}
            <div style={{
                background: '#f7f7f7',
                padding: '20px',
                borderRadius: '10px',
                marginTop: '30px'
            }}>
                <p style={{ fontSize: '1rem', color: '#555' }}>
                    Start your shopping journey now and discover amazing deals with <strong>Product-Vault</strong>!
                </p>
            </div>
        </div>
    );
}

export default HomePage;
