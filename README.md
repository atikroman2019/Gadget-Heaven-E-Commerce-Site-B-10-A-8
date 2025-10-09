# 🚀 Gadget Heaven

Your go-to destination for the latest and greatest gadgets!  
This React-based web application allows users to explore modern gadgets, view detailed product info, manage a shopping cart and wishlist, analyze gadget statistics, and complete simulated purchases — all in a smooth, responsive UI.

---

## 🌐 Live Website  
🔗 [Gadget Heaven Live](https://dapper-rugelach-624bd9.netlify.app/)

---

## 📄 Requirement Document  
🔗 *Github Repo Link : 
Project Link: https://github.com/atikroman2019/Gadget-Heaven-E-Commerce-Site-B-10-A-8*

---

## ⚛️ React Fundamental Concepts Used

- Components & Props — modular, reusable UI pieces  
- State Management (`useState`) — dynamic behavior  
- Effects & Lifecycle (`useEffect`)  
- React Router — routing, nested routes, `useNavigate`, `Outlet`  
- Conditional Rendering — show/hide UI pieces based on state or path  
- Event Handling — click events for buttons etc.  
- Dynamic Titles — using `document.title` in effects  

---

## 💾 Data Handling & Management

- **Local Storage** — used to persist:
  - Cart items  
  - Wishlist items  
  - State survives page reload  
- *(Optionally, you could use Context API or a global store for more scalability)*  

---

## 🌟 Features

1. **Add to Cart & Wishlist**  
   Users can add products into their cart or wishlist, which persist between sessions.

2. **Wishlist Deduplication**  
   The heart button is disabled after adding, so the same item can’t be added twice to wishlist.

3. **Statistics Page with Composed Chart**  
   Displays a combined chart (Area, Bar, Scatter) with Price vs Product Name vs Rating.

4. **Purchase Modal Flow**  
   Clicking “Purchase” shows a modal, clears the cart, and then redirects to home after closing.

5. **Dashboard with Tabs & Sorting**  
   Dashboard has **Cart** and **Wishlist** tabs. Cart shows total price and supports sorting by price descending.

---

## 🧰 Technologies & Libraries

- React (Vite)  
- React Router DOM  
- React Toastify  
- Recharts  
- Tailwind CSS  
- Local Storage  
- Surge (for deployment)