interface Call {
  ref: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const call = async ({ref}: Call) => {
  try {
    //const dataRef = await database().ref(ref);
    // const result = await dataRef.once('value');
    // return result.val();
  } catch (e) {
    console.log('e in call', e);
  }
};

export default call;
