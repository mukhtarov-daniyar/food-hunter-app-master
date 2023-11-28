import firestore from '@react-native-firebase/firestore';

function Client() {}

Client.createClient = async (object: any) =>
  await firestore().collection('clients').add(object);

Client.updateClient = async (id: string, object: any) =>
  await firestore().collection('clients').doc(id).set(object);

export default Client;
