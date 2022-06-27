import { type Refute, type Constructor } from './prelude.js';
declare const instance: <T extends Constructor>(class_: T) => Refute<InstanceType<T>>;
export default instance;
