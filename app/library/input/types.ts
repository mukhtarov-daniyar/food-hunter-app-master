import {OptionsData} from '../../types/common';

export type InputId = string;
export type InputValue = string | any;

interface InputOnChangeProps {
  id: InputId;
  value: InputValue;
}

export type InputOnChange = ({id, value}: InputOnChangeProps) => void;

export interface Meta {
  storageRef?: any;
  options?: OptionsData;
}

export interface InputParamsProps {
  id: InputId;
  type: string;
  defaultValue?: string;
  placeholder: string;
  editable: boolean;
  required: boolean;
  meta?: Meta;
}

export interface InputProps extends InputParamsProps {
  onChange?: InputOnChange;
  value: InputValue;
}
