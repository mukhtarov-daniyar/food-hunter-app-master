import React, {useState, useEffect} from 'react';
import {RootNavigator} from './app/navigators';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {RootStoreProvider, RootStore, setupRootStore} from './app/models';

const App = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      //await initFonts(); // expo
      setupRootStore().then(setRootStore);
    })();
  }, []);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  if (!rootStore) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNavigator />
      </SafeAreaProvider>
    </RootStoreProvider>
  );
};

export default App;
