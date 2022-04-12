import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

const general = {
  iconSize: {
    bigger: metrics.screenWidth * 0.07,
    regular: metrics.screenWidth * 0.05,
    small: metrics.screenWidth * 0.03,
  },
  defaultShadow: {
    shadowColor: colors.textColorPrimary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  defaultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorBackground,
  },
  customProps: {
    fontSize: fonts.regular,
    fontFamily: 'Poppins-Regular',
  },
};

export default general;