import {View} from 'react-native';
import styled from 'styled-components/';

import {colors} from '../../utils/theme';

interface ButtonProps {
  disabled: boolean;
  variant: 'blue' | 'orange';
}

export const MainContainer = styled(View)(
  ({disabled, variant}: ButtonProps) => ({
    alignItems: 'center',
    backgroundColor: disabled
      ? colors.sitemateOrangeOpacity
      : variant === 'orange'
      ? colors.sitemateOrange
      : colors.sitemateBlue,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    width: 250,
  }),
);
