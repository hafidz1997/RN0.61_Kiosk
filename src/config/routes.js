import {createSwitchNavigator, createAppContainer} from 'react-navigation';

// Import navigator screen file
import {InvoiceStack} from './stacks/InvoiceStack';
import {PackageStack} from './stacks/PackageStack';
import Initialize from '../containers/Initialize';

export const AppNavigator = createAppContainer(
  createSwitchNavigator({
    initialize: {
      screen: Initialize,
      navigationOptions: {header: null},
    },
    invoice: InvoiceStack,
    package: PackageStack,
  }),
);
