import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// Import navigator screen file
// import Initialize from '../../containers/invoice/Initialize';
import First from '../../containers/package/First';
import Print from '../../containers/package/Print';
import Success from '../../containers/package/Success';

export const PackageStack = createAppContainer(
  createSwitchNavigator({
    package: {
      screen: First,
      navigationOptions: {header: null},
    },
    print2: {
      screen: Print,
      navigationOptions: {header: null},
    },
    success2: {
      screen: Success,
      navigationOptions: {header: null},
    },
  }),
);
