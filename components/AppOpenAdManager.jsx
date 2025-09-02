import React, { useEffect, useState } from 'react';
import { AppOpenAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import { AppState } from 'react-native';

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const AppOpenAdManager = () => {
  const [appOpenAd, setAppOpenAd] = useState(null);
  const [appState, setAppState] = useState(AppState.currentState);
  const [isColdStart, setIsColdStart] = useState(true);

  useEffect(() => {
    loadAppOpenAd(true); // indicate cold start load

    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      if (appOpenAd) {
        appOpenAd.destroy();
      }
      appStateSubscription.remove();
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log("App resumed");
      if (appOpenAd?.loaded) {
        appOpenAd.show();
      }
      loadAppOpenAd(false); // reload ad for next resume
    }
    setAppState(nextAppState);
    setIsColdStart(false);
  };

  const loadAppOpenAd = (showAfterLoad = false) => {
    console.log("Loading App Open Ad...");
    const ad = AppOpenAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
    });

    ad.addAdEventListener(AdEventType.LOADED, () => {
      console.log("App Open Ad loaded");
      setAppOpenAd(ad);

      // Show ad only if requested
      if (showAfterLoad) {
        ad.show();
      }
    });

    ad.addAdEventListener(AdEventType.ERROR, (error) => {
      console.log('AppOpenAd error:', error);
      setTimeout(() => loadAppOpenAd(showAfterLoad), 30000);
    });

    ad.addAdEventListener(AdEventType.CLOSED, () => {
      console.log("App Open Ad closed");
      setAppOpenAd(null); // clear current ad
      // Do not reload or show immediately
    });

    ad.load();
  };

  return null;
};

export default AppOpenAdManager;
