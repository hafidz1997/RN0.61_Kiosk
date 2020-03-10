import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// Import navigator screen file
import First from '../../containers/invoice/First';

import Detail from '../../containers/invoice/Detail';
import Camera from '../../containers/invoice/Camera';
import Print from '../../containers/invoice/Print';
import Error from '../../containers/invoice/Error';
import Success from '../../containers/invoice/Success';

export const InvoiceStack = createAppContainer(
  createSwitchNavigator({
    first: {
      screen: First,
      navigationOptions: {header: null},
    },
    camera: {
      screen: Camera,
      navigationOptions: {header: null},
    },
    detail: {
      screen: Detail,
      navigationOptions: {header: null},
    },
    print: {
      screen: Print,
      navigationOptions: {header: null},
    },
    error: {
      screen: Error,
      navigationOptions: {header: null},
    },
    success: {
      screen: Success,
      navigationOptions: {header: null},
    },
  }),
);
