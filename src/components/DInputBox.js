/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function DInputBox({
  styles,
  overrideStyles,
  placeholder,
  iconName,
  isPassword = false,
  onBlur,
  onChange,
  value,
}) {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        {...overrideStyles},
        styles
          ? tailwind(
              classNames(
                `${styles} bg-[#313030]/[0.7] rounded-md flex-row items-center my-2`,
              ),
            )
          : tailwind(
              classNames(
                'rounded-md bg-[#313030]/[0.7] flex-row items-center my-2',
              ),
            ),
      ]}>
      {iconName && (
        <Icon
          name={iconName}
          size={25}
          color="white"
          style={tailwind(classNames('ml-2'))}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={isPassword}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={[{color: 'white'}, tailwind(classNames('ml-2'))]}
      />
    </View>
  );
}
