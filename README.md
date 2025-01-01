# Khida Lagse - Restaurant Management System

**Khida Lagse** is a full-featured restaurant management system built using React and FastAPI. It is designed to streamline restaurant operations, including menu management, order processing, and delivery tracking, with secure user management through JWT-based OTP authentication.

---

## Features

### User Panel
- Browse the food menu and search for items by type.
- Place orders and track delivery status in real time.

### Admin Panel
- Manage food items (create, edit, delete).
- Oversee cooking status and delivery personnel.
- Ensure smooth order fulfillment.

### Delivery Panel (Planned)
- Confirm deliveries with an OTP system for added security.

### Authentication
- Secure user management with JWT-based OTP verification.

---

## Database Structure

- **User**: Stores user details and authentication data.
- **Food**: Holds information about the menu items.
- **Order**: Tracks order details, status, and user information.
- **DeliveryMan**: Manages delivery personnel data.
- **Admin**: Handles admin credentials and management actions.

---

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI
- **Authentication**: JWT with OTP
- **Database**: SQLite

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/avik-halder/Khida_Lagse.git
   ```
   ```bash
   cd Khida_Lagse
   ```

2. Set up the backend:
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the FastAPI server:
     ```bash
     uvicorn main:app --reload
     ```

3. Set up the frontend:
   - Navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. Access the application:
   - Frontend: [http://localhost:"port_number"](http://localhost:"port_number")
   - Backend API: [http://localhost:8000](http://localhost:8000)

---

## Future Enhancements
- Implement the Delivery Panel with OTP confirmation.
- Integrate advanced analytics for order trends and customer preferences.
- Add support for payment gateway integration.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any suggestions or improvements.

---

## Contact

Developed by [Avik Halder](https://www.linkedin.com/in/avik-halder-/).  
GitHub: [avik-halder](https://github.com/avik-halder)
