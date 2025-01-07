# E-Commerce Product Catalog

## Project Description
The E-Commerce Product Catalog is a dynamic application for managing and displaying products. It includes essential CRUD operations, search and filter functionality, dynamic routing, and API integration. The project is divided into a React-based frontend (built with Next.js) and a Node.js-based backend with MongoDB.

---

## Features
### Frontend:
- Display a list of products.
- Dynamic product details page.
- Search and filter functionality.
- Responsive design using modular CSS.

### Backend:
- API endpoints for CRUD operations.
- MongoDB database for storing product information.
- Integration with frontend using REST APIs.

---

## Directory Structure
```plaintext
JyothishRK-ecommerce-catalog/
├── next.config.mjs
├── components/
│   ├── search/
│   │   ├── search-bar.module.css
│   │   └── search-bar.js
│   ├── products/
│   │   ├── product-item.js
│   │   ├── all-products.module.css
│   │   ├── all-products.js
│   │   ├── product-page/
│   │   │   ├── product-details.module.css
│   │   │   ├── product-page.js
│   │   │   ├── product-image.module.css
│   │   │   ├── product-page.module.css
│   │   │   ├── product-details.js
│   │   │   └── product-image.js
│   │   ├── products-grid.js
│   │   ├── product-item.module.css
│   │   └── products-grid.module.css
│   └── layout/
│       ├── footer.module.css
│       ├── layout.js
│       ├── main-navigation.js
│       ├── logo.module.css
│       ├── main-navigation.module.css
│       ├── footer.js
│       └── logo.js
├── public/
├── styles/
│   └── globals.css
├── package.json
├── jsconfig.json
├── pages/
│   ├── _app.js
│   ├── products/
│   │   ├── [productId].js
│   │   └── index.js
│   ├── about.js
│   └── index.js
├── README.md
└── server/
    ├── models/
    │   └── product.js
    ├── routes/
    │   └── products.js
    ├── index.js
    └── db/
        └── mongoose.js
```

---

## Setup Instructions

### Frontend Setup:
1. Navigate to the frontend root directory:
   ```bash
   cd JyothishRK-ecommerce-catalog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env.local` file in the project root.
   - Add the following variables:
     ```env
     API_GETALL_URL=<Backend_AllProducts_URL>
     API_GETBYID_URL=<Backend_ProductById_URL>
     API_SEARCH_URL=<Backend_Search_URL>
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Access the application at: `http://localhost:3000`

---

### Backend Setup:
1. Navigate to the backend root directory:
   ```bash
   cd JyothishRK-ecommerce-catalog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Ensure the `.env` file in the root directory contains the following variables:
     ```env
     MONGODB_URL=<Your_MongoDB_Connection_String>
     PORT=5000
     ```
4. Start the backend server:
   ```bash
   node server/index.js
   ```
5. The backend server will run at: `http://localhost:5000`

---

## API Endpoints

### Products API:
- **GET /products** - Retrieve the list of all products.
- **GET /products/:id** - Retrieve details of a specific product.
- **GET /productsearch/search** - Retrieve search results based on the query.

---

## Steps to Run the Application Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/JyothishRK/ecommerce-catalog.git
   ```
2. Follow the setup instructions for both frontend and backend.
3. Run both the frontend and backend servers simultaneously.
4. Access the application at `http://localhost:3000`.

---

## Live Deployment Links
- **Frontend:** [E-Commerce Catalog Frontend](https://ecommerce-catalog-tcp3.vercel.app)
- **Backend:** [E-Commerce Catalog Backend](https://ecommerce-catalog-i19b.onrender.com/)

---

## Dependencies
- React
- Next.js
- Node.js
- Express
- MongoDB
- Mongoose
- CSS Modules

---

## License
This project is licensed under the MIT License.

---

## Author
R K Jyothish  
[GitHub Profile](https://github.com/JyothishRK)

