import {Instance, SnapshotOut, types} from 'mobx-state-tree';

export const ClientModel = types
  .model('Client')
  .props({
    address: types.string,
    phone: types.string,
    email: types.string,
    id: types.string,
    name: types.string,
  })
  .actions(self => ({
    updateClient(id: any, value: any) {
      //@ts-ignore
      self[id] = value;
    },
  }));

type ClientType = Instance<typeof ClientModel>;
export interface Client extends ClientType {}
type ClientSnapshotType = SnapshotOut<typeof ClientModel>;
export interface ClientSnapshot extends ClientSnapshotType {}

export const createClientDefaultModel = () =>
  // @ts-ignore
  types.optional(ClientModel, {});
