
# Spotflow Checkout Inline

This project is an inline library that enables users to make payments seamlessly. It integrates smoothly into your application, providing a streamlined checkout experience.

For React components and usage, [link](https://github.com/Spotflow-One/react-spotflow-checkout)

For Vue.js components and usage, [link](https://github.com/Spotflow-One/vue-spotflow-checkout)

For Angular components and usage, [link](https://github.com/Spotflow-One/angular-spotflow-checkout)

## Demo

<img width="808" alt="Screenshot 2024-07-26 at 16 05 52" src="https://github.com/user-attachments/assets/4dbb0b2e-2142-4f04-994a-5c352de7d30e">

## Installation

 ```sh
npm install @spot-flow/checkout-inline-js
   ```

## Usage

 ```sh
 import { CheckoutForm } from "@spot-flow/checkout-inline-js";

 const checkout = new CheckoutForm(
       merchantKey = "<sk_test_f998479c0eedhXXXXXXXXXXXXXXXX>"// This is your Merchant Key generated for your Merchant on Spotflow
       email = "email",
       amount = 1000,
     );
 checkout.setup();
 ```

Alternatively, you can include it directly in your HTML via a CDN:

```sh
<script src="https://dr4h9151gox1m.cloudfront.net/dist/checkout-inline.js"></script>  
```

 ```sh
 <button onclick="openCheckout()">
    Make Payment
 </button>
 ```

 ```sh
 <script>
   const openCheckout = () => {
     const { CheckoutForm } = SpotflowCheckout
     const checkout = new CheckoutForm(
       merchantKey = "<sk_test_f998479c0eedhXXXXXXXXXXXXXXXX>"// This is your Merchant Key generated for your Merchant on Spotflow
       email = "temi@mailinator.com",
       amount = 1000,
     );
     checkout.setup();
   };
 </script>
 ```

## Contributing

We welcome contributions! Follow the steps below to get started:

### Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Spotflow-One/spotflow-checkout.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

### Example Usage

You can see an example of how to use the library in `index.html`. Open this file in your browser to see it in action.

### Building the Project

To build the project, run:

```sh
npm run build
```

This will compile the source files and generate the output in the `dist` directory.
