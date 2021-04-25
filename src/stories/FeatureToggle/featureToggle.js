import flagsmith from 'flagsmith';

export const featureToggle = () => {
  flagsmith.init({
    environmentID: 'esdxsr43RuNmoNwrnyfSeB',
    onChange: (oldFlags, params) => {
      console.info('onChange');
      // Occurs whenever flags are changed

      const { isFromServer } = params; // Determines if the update came from the server or local cached storage

      // Check for a feature
      if (flagsmith.hasFeature('clb-tf-view-dashboard')) {
        // myCoolFeature();
      }

      // Or, use the value of a feature
      const bannerSize = flagsmith.getValue('clb-tf-view-dashboard');

      // Check whether value has changed
      const bannerSizeOld = oldFlags['clb-tf-view-dashboard'] && oldFlags['clb-tf-view-dashboard'].value;
      if (bannerSize !== bannerSizeOld) {
        // Value has changed, do something here
      }
    },
  });

  return {
    isOpen: ft => {
      console.info(ft);
      console.info('flagsmith.hasFeature("clb-tf-view-dashboard")', flagsmith.hasFeature('clb-tf-view-dashboard'));
      console.info('flagsmith.getValue("clb-tf-view-dashboard")', flagsmith.getValue('clb-tf-view-dashboard'));
    },
  };
};
