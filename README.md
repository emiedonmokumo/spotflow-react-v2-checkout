<p align="center">
   <img src="" />
</p>

# Spotflow React Library

## Introduction

The Spotflow React Sdk helps you or rather enables users to make payments seamlessly. It integrates smoothly into your application, providing a streamlined checkout experience.

Available Features:

- Collections: Card, Bank Transfers, USSD
- Recurring payments: Tokenization and Subscriptions.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Support](#supports)
5. [License](#license)
6. [Contributing Guidelines](#contribting-guidelines)
7. [Contributors](#contributors)

## Requirements

1. Spoflow Encryption keys
2. Spotflow API keys
3. Node versions >= 16.x.x npm >=7.x.x
4. React version >= 16.8.0

## Demo

<img width="808" alt="Screenshot 2024-07-26 at 16 05 52" src="https://github.com/user-attachments/assets/4dbb0b2e-2142-4f04-994a-5c352de7d30e">

## Installation

using npm

 ```bash
  npm i @spot-flow/react-spotflow-checkout

# or

  yarn add @spot-flow/react-spotflow-checkout

# or
  pnpm add @spot-flow/react-spotflow-checkout
   ```

## Usage

Add Spotflow as a component or react hook

This library can be implemented using the following

1. By Using the Button SpotflowButton component
2. By Using the the Checkout Provider and the logic Hook (preferred method)

### 1. Using the Payment CheckoutButton

```javascript
import { SpotflowButton } from "@spot-flow/react-spotflow-checkout";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <SpotflowButton
        data={{
          amount: 4000,
          currency: "NGN",
          email: "temi@mailinator.com",
          firstname: "Hammed"
          lastname: "Chigozie"
          phone: "09090909090",
          encryptionKey: "SKKXXXXXXXXXXXXXXXXX"
          planId: "9e0808304-344d-XXXXXXXXX-XXXXX834034",
          merchantKey: "<sk_test_fXXXXedhXXXXXXXXXXXXXXXX>"// <This is your Merchant Key generated for you Merchant on Spotflow> 
        }}
        actionText="Pay Money"
      />
    </div>
  </React.StrictMode>,
);

```

### 2. Using the Checkout Provider and the logic hooks

```javascript

import {
  // PaymentCheckoutButton,
  PaymentContextProvider,
  useSpotflowPayment,
} from "@spot-flow/react-spotflow-checkout";
import React from "react";
import ReactDOM from "react-dom/client";

const PaymentConponents = () => {
   const config = {
    amount: 4000,
    currency: "NGN",
    email: "temi@mailinator.com",
    merchantKey: "XXXX",
    reference: Date.now().toString(),
    plan: "",
    encryptionKey:  "XXXXJXJDKD"

   }
  const initialFn = useSpotflowPayment(config);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          initialFn({
            config: undefined,
            onClose: () => {
               // Enter your action here
            },
            onSuccess: () => {
               // Enter your action here 
            }
          });
        }}
        className=" bg-primary-main text-black"
      >
        Apaysjbdjbs
      </button>
    </div>
  );
};


```

the Button has the ButtonProps which can allow you to customize to your design

```javascript
import React from "react";


export declare type InitialiseConfig = {
  /**
   * plan Id from spotflow
   */
  plan: string;
  fullname?: string;
  email: string;
  phone?: string;
  /**
   * @type {"USD" | "EUR" | "NGN" | "GBP"}
   * Acceptable currency are USD, EUR, NGN, GBP
   */
  currency?: "USD" | "EUR" | "NGN" | "GBP" | string;
  amount: number;
  /**
   * merchant generated secret key
   */
  merchantKey: string;
  reference?: string;
};

export type CheckoutPaymentProps = React.ComponentProps<"button"> & {
  data: CheckoutData;
  actionText: string;
};
```

## Contribting Guidelines

## Supports

## License

### Getting Started

## Contributors

We welcome contributions! Follow the steps below to get started:
