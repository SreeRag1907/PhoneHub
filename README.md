
# PhoneHub

PhoneHub is a web application for a smartphone store, showcasing the latest brands and phones available in the market.

[PhoneHub Logo](https://phone-hub-ivory.vercel.app/)

## Technologies Used

- **React**: ![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png) Frontend JavaScript library for building user interfaces.
- **Tailwind CSS**: ![Tailwind CSS Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png) Utility-first CSS framework for styling.
- **Framer Motion**: ![Framer Motion Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Framer_Motion_Logo.svg/512px-Framer_Motion_Logo.svg.png) Animation library for React.
- **Firebase**: ![Firebase Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Firebase_Logo_2020.svg/512px-Google_Firebase_Logo_2020.svg.png) Platform for building and running web and mobile applications.
- **Firestore**: ![Firestore Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Firestore_Logo_FullColor.svg/512px-Firestore_Logo_FullColor.svg.png) Flexible, scalable database for mobile, web, and server development.
- **Redux**: ![Redux Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Redux.png/512px-Redux.png) State management library for JavaScript apps.
- **Stripe**: ![Stripe Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.png/512px-Stripe_Logo%2C_revised_2016.png) Payment processing platform for online transactions.
- **Emailjs**: ![Emailjs Logo](https://example.com/emailjs-logo.png) For sending email in contact us.

## Features

- Browse and search for the latest smartphones.
- Login and signup using Firebase.
- Filter phones.
- Skeleton loading.
- Pagination.
- Dark mode and light mode.
- View details and specifications of each phone.
- Add phones to cart and proceed to checkout.
- Secure payment processing with Stripe.
- Responsive design for mobile and desktop.

## Getting Started

To get a local copy up and running follow these steps:

### Prerequisites

- Node.js installed on your machine
- Firebase project with Firestore setup
- Stripe account for payment integration

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/phonehub.git
   cd phonehub
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy Firebase configuration settings (found in Firebase Console > Project settings > Your apps) and replace them in `src/firebase/firebaseConfig.js`.

4. Set up Stripe:
   - Obtain your Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys).
   - Replace your Stripe publishable key in `src/components/CheckoutForm.js`.

### Usage

1. Start the development server:
   ```sh
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

Deploy your app to Firebase Hosting or any other hosting provider:

1. Build the app for production:
   ```sh
   npm run build
   ```

2. Deploy to Firebase (example):
   ```sh
   firebase deploy
   ```

## Contributing

Contributions are welcome! Feel free to open a pull request for adding new features, fixing bugs, or improving documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of React, Tailwind CSS, Framer Motion, Firebase, Firestore, Redux, and Stripe for their awesome tools and services.



