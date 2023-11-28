import {InputId, InputParamsProps, InputValue} from '../input/types';

interface FormAttribute extends InputParamsProps {
  label: string;
}

interface FormAttributes {
  [key: string]: FormAttribute;
}

export type FormBlockRow = string[];
type FormBlockRows = FormBlockRow[];

export type FormBlockField = string | number;
interface FormBlockFields {
  [key: string]: FormBlockField;
}

export interface FormBlock {
  id: string;
  name: string;
  rows: FormBlockRows;
  attributes: FormAttributes;
  fields: FormBlockFields;
}

type FormBlocks = FormBlock[];

export interface InputFormFields {
  [key: string]: FormBlockField;
}

export interface InputFormBlocks {
  [key: string]: InputFormFields;
}

export interface InputFormOnChangeProps {
  blockId: InputId;
  fieldId: InputId;
  value: InputValue;
}

type InputFormOnChange = ({
  blockId,
  fieldId,
  value,
}: InputFormOnChangeProps) => void;

export interface InputFormProps {
  formBlocks: FormBlocks;
  fields: InputFormBlocks;
  onChange?: InputFormOnChange;
}
