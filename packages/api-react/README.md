# greenbtc-blockchain-gui/api-react

![GreenBTC logo](https://www.greenbtc.top/wp-content/uploads/2022/09/greenbtc-logo.svg)

![GitHub contributors](https://img.shields.io/github/contributors/greenbtc/greenbtc-blockchain-gui?logo=GitHub)

This library provides react hooks on the top of @greenbtc-network/api and uses [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) under the hood.
It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself. Benefits include:

- Automatically refresh queries when data changed (using events from GreenBTC Blockchain).
- Tracking loading state in order to show UI spinners.
- Avoiding duplicate requests for the same data.
- Optimistic updates to make the UI feel faster.
- Managing cache lifetimes as the user interacts with the UI.
- Ability to use it without React library
- Support for polling and parallel queries

## Query Example

### **`PublicKeys.tsx`**

```tsx
import React from 'react';
import { useGetPublicKeysQuery } from '@greenbtc-network/api-react';
import Suspender from 'react-suspender';

export default function PublicKeys() {
  const { data: publicKeys, isLoading, error } = useGetPublicKeysQuery();

  if (isLoading) {
    return <Suspender />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <ul>
      {publicKeys.map((key) => (
        <li key={key}>{key}</li>
      ))}
    </ul>
  );
}
```

### **`Application.tsx`**

```tsx
import React, { Suspense } from 'react';
import Websocket from 'ws'; // or read this value from electron main application
import { store, api } from '@greenbtc-network/api-react';
import PublicKeys from './PublicKeys';

// prepare api
api.initializeConfig({
  url: 'wss://127.0.0.1:54000',
  cert: fs.readFileSync(certPath).toString(), // or read this value from electron main application
  key: fs.readFileSync(keyPath).toString(), // or read this value from electron main application
  webSocket: Websocket,
});

export default function Application() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <PublicKeys />
      </Provider>
    </Suspense>
  );
}
```

## Development

Please read and follow the main [README.md](https://github.com/greenbtc/greenbtc-blockchain-gui) of this monorepo.
