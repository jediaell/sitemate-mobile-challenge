import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import CustomText from '../CustomText';
import {sitemateLogo} from '../../assets/images';

import {
  BackButtonContainer,
  BalanceFillingView,
  Logo,
  MainContainer,
  additionalStyles,
} from './styles';

import {colors} from '../../utils/theme';

interface Props {
  onPressBackButton?: () => void;
  showBackButton?: boolean;
  title: string;
}

const Header = ({onPressBackButton, showBackButton, title}: Props) => {
  return (
    <MainContainer style={additionalStyles.headerShadow}>
      {showBackButton ? (
        <BackButtonContainer onPress={onPressBackButton}>
          <MaterialIcon
            name="navigate-before"
            size={35}
            color={colors.sitemateBlue}
          />
        </BackButtonContainer>
      ) : (
        <BalanceFillingView />
      )}
      <CustomText variant="title">{title}</CustomText>
      <Logo source={sitemateLogo} />
    </MainContainer>
  );
};

Header.defaultProps = {
  onPressBackButton: () => {},
  showBackButton: false,
};

export default Header;
