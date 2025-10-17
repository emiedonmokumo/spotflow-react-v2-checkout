# 🧩 Spotflow React SDK Compatibility Report

## Overview
This report documents the results of testing the **@spot-flow/react-spotflow-checkout** SDK across multiple React versions as part of **Hacktoberfest**.

The goal was to verify that the SDK installs, renders, and functions properly across React 16.8+, React 17, and React 18.

---

## 🔍 Test Environment
- **Package tested:** `@spot-flow/react-spotflow-checkout`
- **Testing mode:** Test key (`sk_test_3500ece212364e11abd01984afdd67b3`)
- **Build tool:** Vite + React
- **OS:** Windows 11
- **Browser:** Chrome

---

## ✅ Compatibility Results

| React Version | Status | Notes |
|----------------|---------|-------|
| **16.8** | ❌ **Fail** | Error: `ERR_ABORTED 504 (OUTDATED Optimize Dep)` on import — prevents page re-rendering |
| **17** | ✅ **Pass** | SDK installs and runs successfully |
| **18** | ✅ **Pass** | SDK installs and runs successfully |

---

## 🧠 Steps to Reproduce (React 16.8 Failure)
1. Create a React project using vite:
   ```bash
   yarn create 
   ```

2. downgrade react version to 16.8

3. Install the SDK:
   ```bash
   yarn @spot-flow/react-spotflow-checkout
   ```

4. Import and render the SpotflowButton in App.jsx:
   ```jsx
   import { SpotflowButton } from "@spot-flow/react-spotflow-checkout";
   ```

5. Run the app:
   ```bash
   yarn run dev
   ```

6. Observe the console error.

---

## 🧾 Console Error

```vbnet
Failed with error ERR_ABORTED 504 (OUTDATED Optimize Dep)
```

---

## Expected Behaviour
The SDK should install and render successfully across all React versions starting from 16.8+, as stated in documentation.

---

## Proposed Solution
- Investigate SDK dependencies that may rely on newer React APIs or build systems incompatible with React 16.8.

- Consider updating the documentation to specify the minimum supported React version (v17+) if backward compatibility is not intended.

- Optionally, provide a compatibility shim or separate legacy build.

## 🔗 Related Resources

- [Spotflow Docs](https://docs.spotflow.one/)

- [NPM Package](https://www.npmjs.com/package/@spot-flow/react-spotflow-checkout)

- Related Issue: #20

---

Author: Joshua

Date: October 2025

Hacktoberfest Contribution