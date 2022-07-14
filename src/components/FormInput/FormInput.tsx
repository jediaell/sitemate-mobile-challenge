import React from 'react';
import {TextInputProps} from 'react-native';
import {BaseFieldProps, WrappedFieldProps} from 'redux-form';

import CustomText from '../CustomText';

import {
  ErrorTextContainer,
  FieldContainer,
  Input,
  InputContainer,
} from './styles';
import {colors} from '../../utils/theme';

interface TextFieldCustomProps {
  label: string;
  placeholder: string;
}

type ReduxFormPropsToPick = 'validate';

type PickedReduxFormProps = Pick<BaseFieldProps, ReduxFormPropsToPick>;

export type TextInputFieldProps = WrappedFieldProps &
  TextInputProps &
  TextFieldCustomProps &
  PickedReduxFormProps;

const FormInput = ({
  input,
  label,
  meta,
  ...inputProps
}: TextInputFieldProps) => {
  const getBorder = () => {
    let borderColor: string;
    if (meta.error && meta.touched) {
      borderColor = colors.error;
    } else if (meta.active) {
      borderColor = colors.sitemateBlue;
    } else {
      borderColor = colors.placeholderGray;
    }

    return borderColor;
  };

  return (
    <FieldContainer>
      <CustomText variant="subtitle">{label}</CustomText>
      <InputContainer
        style={{
          borderColor: getBorder(),
        }}>
        <Input
          {...inputProps}
          onChangeText={input.onChange}
          onEndEditing={input.onBlur}
          onFocus={(e: any) => input.onFocus(e)}
          active={meta.active || false}
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.sitemateGray}
        />
      </InputContainer>
      {meta.touched && meta.error ? (
        <ErrorTextContainer>
          <CustomText color={colors.error} variant="error">
            {meta.error}
          </CustomText>
        </ErrorTextContainer>
      ) : null}
    </FieldContainer>
  );
};

export default FormInput;
