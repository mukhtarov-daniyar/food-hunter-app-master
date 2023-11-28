import {Text, TextStyle} from 'react-native';
import React from 'react';
import {currencyPositions} from '../../../constants/main';

interface Props {
  currencyPosition: string;
  currency: string;
  price: string;
  style?: TextStyle;
}

const roundSymbolsNumber = 2;

const Price = ({currencyPosition, currency, price, style}: Props) => {
  const formattedPrice = price && Number(price).toFixed(roundSymbolsNumber);

  const renderPrice = () => {
    if (currencyPosition === currencyPositions.left) {
      return (
        <>
          {currency}
          {formattedPrice}
        </>
      );
    }
    if (currencyPosition === currencyPositions.right) {
      return (
        <>
          {formattedPrice}
          {currency}
        </>
      );
    }

    return;
  };

  return <Text style={[style || null]}>{renderPrice()}</Text>;
};

export default Price;
