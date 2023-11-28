import {INPUT_TYPES} from '../constants/components';
import Text from '../library/input/text';
import Select from '../library/input/select';

const formFields = {
  [INPUT_TYPES.STRING]: {
    Component: Text,
  },
  [INPUT_TYPES.SELECT]: {
    Component: Select,
  },
};

const getFieldByType = (type: string) => formFields[type] || null;

export default getFieldByType;
