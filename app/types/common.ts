//import firebase from 'firebase';
import {FormBlock} from '../library/input-form/types';

// export type CollectionRef = firebase.firestore.CollectionReference;
// export type DocumentRef = firebase.firestore.DocumentReference;

export type FormData = FormBlock[];

export interface Option {
  text: string;
  value: string;
}

export type OptionsData = Option[];

export interface StringObject {
  [key: string]: string;
}
