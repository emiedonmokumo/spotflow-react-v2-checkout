import { SpotflowButton } from "@library/main";

import "./App.css";

function App() {

  return (
    <>
      <div></div>
      <SpotflowButton
        amount={4000}
        currency="NGN"
        email="temi@mailinator.com"
        firstname="John"
        lastname="Doe"
        phone="09090909090"
        encryptionKey="SKKXXXXXXXXXXXXXXXXX"
        planId="9e0808304-344d-XXXXXXXXX-XXXXX834034"
        merchantKey="sk_test_fXXXXedhXXXXXXXXXXXXXXXX"
        text="Pay Money"
      />
    </>
  );
}

export default App;
