# VELOOP Rewards - Exchange Center

A premium, responsive reward-conversion experience that helps users convert earned Gems into VEs. The interface is intentionally reward-focused and avoids cryptocurrency trading patterns.

## Features

- Gems and VEs balance overview with accessible information tooltips
- Gems input with live VEs preview
- Structured conversion options from a central data file
- Watch Ad unlock flow before eligible reward conversion
- Confirmation modal with projected balances
- Insufficient Gems and Earn More Gems state
- Disabled processing state to prevent duplicate conversion
- Success notification, balance updates, and history updates
- Completed, Processing, and Failed history examples
- Loading, empty, and error states (selectable through the demo-state control)
- How Exchange Works, Recent Conversions, and Exchange Rules
- Responsive layouts from 320px through large desktop displays
- Keyboard-operable controls, Escape-to-close modal, visible focus states, and strong contrast

## Exchange Logic

The current frontend uses the values approved in the supplied design concept in `src/data/exchangeData.js`: 28 Gems to 151 VEs, 56 Gems to 290 VEs, and 150 Gems to 820 VEs. Verify these against production data during backend integration. Conversion language describes predefined reward values rather than market pricing.

User flow: enter or select Gems → preview VEs → review projected balances → confirm → balances and history update.

## Technology Stack

- React.js + Vite
- Bootstrap 5
- CSS Modules
- React Hooks
- Lucide React
- Framer Motion

## Project Structure

```text
src/
├── components/exchange/
│   ├── BalanceOverview.jsx
│   ├── ConversionCalculator.jsx
│   ├── ExchangeCard.jsx
│   ├── ExchangeHero.jsx
│   ├── ExchangeModal.jsx
│   ├── InfoTip.jsx
│   ├── SupportingSections.jsx
│   └── Exchange.module.css
├── data/exchangeData.js
├── styles/global.css
├── App.jsx
├── App.module.css
└── main.jsx
```

The company-approved visual concept is included at `docs/approved-design.jpeg` for design reference. It is not used as a flattened UI image; the interface is implemented with reusable React components.

## Installation and Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Responsive Design

The design uses a centered max-width layout, three-column desktop cards, two-column tablet cards, and stacked mobile cards from 320px. Breakpoints also simplify the hero, balances, calculator, history, modal, and explanation flow without horizontal overflow.

## Animation System

Framer Motion powers restrained reward-object floating and exchange-card elevation. CSS handles the themed loader and ambient hero movement. Animations are decorative and do not block interaction.

## Future Backend Integration

- Replace `exchangeData.js` with API responses
- Validate eligibility and balances server-side
- Submit conversions with idempotency protection
- Load authenticated balances and transaction history
- Replace sample rules with platform-approved copy
- Connect the Watch Ad control to the production ad-completion callback

## Deployment

Deploy on Vercel with framework preset **Vite**, build command `npm run build`, and output directory `dist`. A SPA rewrite is included in `vercel.json`.

## Required Submission Screenshots

Capture desktop, tablet, mobile, conversion cards, confirmation modal, insufficient Gems, successful conversion, loading, empty, and error states.

Loading, Empty, and Error assessment states remain available without changing the approved main layout: open the app with `?state=loading`, `?state=empty`, or `?state=error`. To capture the insufficient state, enter a Gems amount greater than the displayed balance and select Preview Conversion. To capture success, select an eligible card, convert it, and confirm the modal.
