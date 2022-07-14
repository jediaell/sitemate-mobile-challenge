import {StyleSheet, View} from 'react-native';
import styled from 'styled-components';

import {colors} from '../../../../utils/theme';

export const IconContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: colors.sitemateBlueOpacity,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  flex: 2,
  height: 'auto',
  justifyContent: 'center',
  width: '100%',
});

export const Info = styled(View)({
  flex: 1,
  justifyContent: 'center',
  paddingLeft: 20,
});

export const MainContainer = styled(View)({
  alignSelf: 'center',
  backgroundColor: colors.white,
  borderRadius: 10,
  height: '75%',
  width: '100%',
});

export const additionalStyles = StyleSheet.create({
  cardShadow: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    height: '100%',
    width: '100%',
  },
  viewContainer: {
    height: '75%',
    width: '100%',
  },
});
