# Cirqlepay

Cirqlepay is a modern financial SaaS platform built with **Next.js**, designed to simplify managing finances. It connects with multiple bank accounts, provides real-time transaction updates, and allows users to seamlessly transfer money to other platform users. The platform is highly responsive, offering a consistent user experience across desktop, tablet, and mobile platforms.

## Tech Stack

- **Next.js**
- **TypeScript**
- **Appwrite**
- **Plaid**
- **Dwolla**
- **React Hook Form**
- **Zod**
- **TailwindCSS**
- **Chart.js**
- **ShadCN**

## Features

### Authentication
- Ultra-secure server-side rendering (SSR) authentication with proper validations and authorization, ensuring user data is protected.

### Connect Banks
- Integration with **Plaid** to allow users to connect and manage multiple bank accounts in one place.

### Home Page
- General account overview displaying:
  - Total balance from all connected banks
  - Recent transactions
  - Spending insights across different categories

### My Banks
- A complete list of connected banks with:
  - Respective balances
  - Account details

### Transaction History
- Includes pagination and filtering options to view transaction history from different banks.

### Real-time Updates
- Reflects changes across all relevant pages, providing a live experience when new bank accounts are connected or transactions occur.

### Funds Transfer
- Enables users to transfer funds to other accounts using **Dwolla**, with all necessary fields and recipient bank IDs for secure transfers.

### Responsiveness
- Adapts seamlessly to various screen sizes and devices, offering a consistent user experience on desktop, tablet, and mobile platforms.

### Other Features
- Modular code architecture for easy scalability and reusability.
- Extensive data validation with **React Hook Form** and **Zod** for form management and input validation.
- Visual representation of financial data using **Chart.js**.

## Usage

•	Connect your bank accounts securely using Plaid.
•	View transaction history, filter by account, and track your finances easily.
•	Transfer funds to other Cirqlepay users securely using Dwolla.
•	Get insights on your spending using real-time updates and Chart.js visualizations.
