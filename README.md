# React Vite E-commerce Product Listing Application

This project is an e-commerce product listing application built using **React** and **Vite**. It leverages **Redux Toolkit** for state management and includes features like pagination, sorting, filtering, and a responsive design optimized for both desktop and mobile devices.

## 🚀 **Project Setup**

### 1️⃣ **Prerequisites**
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2️⃣ **Clone the Repository**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 3️⃣ **Install Dependencies**
```bash
npm install
```
or
```bash
yarn install
```

### 4️⃣ **Start the Development Server**
```bash
npm run dev
```
or
```bash
yarn dev
```
This will start the Vite development server at `http://localhost:3000/` by default.

---

## 📁 **Project Structure**
```bash
src
├── components
│   ├── app
│   │   ├── app.tsx
│   │   └── index.ts
│   ├── filter-sidebar
│   │   ├── filter-sidebar.tsx
│   │   └── index.ts
│   ├── filters
│   │   ├── components
│   │   │   └── filters.tsx
│   │   └── index.ts
│   ├── products
│   │   ├── components
│   │   │   ├── index.ts
│   │   │   ├── products-slice.ts
│   │   │   └── products.tsx
│   │   └── UI
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── select.tsx
│   └── data
│       └── products.ts

```

---

## ⚙️ **Key Features**

1. **Product Listing**
   - Displays a list of products with their details such as name, price, and availability.

2. **Sorting**
   - Users can sort products by different criteria (e.g., price, popularity).

3. **Pagination**
   - Products are displayed in pages to improve performance and user experience.

4. **Filtering**
   - Users can filter products by brand and other attributes.

5. **Responsive Design**
   - The application is optimized for both desktop and mobile devices.
   - Mobile view includes a collapsible filter sidebar.

---

## 🛠️ **Tech Stack**
- **React**: For building the user interface.
- **Vite**: A fast build tool and development server.
- **Redux Toolkit**: For efficient state management.
- **TypeScript**: For type safety.
- **Tailwind CSS**: For styling the application.

---

## 🧩 **Components Overview**

### 📄 **Product.tsx**
Renders individual product cards with details like product name, image, price, and a "View Product" button.

### 📄 **ProductMobile.tsx**
Optimized product card for mobile view. This component ensures a user-friendly experience on smaller screens.

### 📄 **SortBy.tsx**
A dropdown component that allows users to sort products by different criteria (e.g., price, rating).

### 📄 **Pagination.tsx**
Handles pagination by showing page numbers and navigation buttons to switch between pages.

---

## 🌐 **Redux Toolkit Setup**
The project uses **Redux Toolkit** to manage the state of products, filters, and pagination.

### Store Setup (`store.ts`):
```typescript
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/products-slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Products Slice (`products-slice.ts`):
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: any[];
  filters: any;
  totalProducts: number;
  totalPages: number;
}

const initialState: ProductsState = {
  products: [],
  filters: {},
  totalProducts: 0,
  totalPages: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    onFiltersChange: (state, action: PayloadAction<any>) => {
      state.filters = action.payload;
    },
  },
});

export const { onFiltersChange } = productsSlice.actions;
export default productsSlice.reducer;
```

---

## 📱 **Responsive Design Approach**
The application is fully responsive with the following key elements:

- **Desktop View**: The product listing is displayed in a grid layout with sorting and pagination controls visible.
- **Mobile View**: The filter sidebar is hidden by default. A "Filter" button is displayed instead. When clicked, the sidebar opens, allowing users to apply filters. The sort-by dropdown is also integrated within the mobile sidebar.

---

## 🧪 **SEO Optimization**
To enhance SEO, the project uses the **react-helmet-async** package for managing meta tags dynamically.

### Installation:
```bash
npm install react-helmet-async
```

### Usage:
Add the following code to your `Products.tsx` component:
```tsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Product Listing - Your Brand</title>
  <meta name="description" content="Discover a wide range of products from top brands." />
  <meta property="og:title" content="Product Listing - Your Brand" />
  <meta property="og:description" content="Explore our product collection with amazing deals and offers." />
</Helmet>
```

---

## 🧹 **Code Quality and Linting**
Ensure code quality by using **ESLint** and **Prettier**.

### Install ESLint and Prettier:
```bash
npm install eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier --save-dev
```

### Add ESLint and Prettier Configurations:
Create an `.eslintrc.json` file:
```json
{
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

Create a `.prettierrc` file:
```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

---

## 📜 **Scripts**
| Script         | Description              |
|----------------|--------------------------|
| `npm run dev`  | Starts the development server |
| `npm run build`| Builds the project for production |
| `npm run lint` | Lints the project files   |

---

## 🧩 **Future Enhancements**
- [ ] Add more filters (e.g., price range, ratings)
- [ ] Integrate a backend API for dynamic data
- [ ] Implement product search functionality

---

## 🤝 **Contributing**
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 💬 **Contact**
For any inquiries or feedback, please reach out to [your-email@example.com].

