import { Singleton } from './db/my-database-classic';

const db1 = Singleton.instance;

export { db1 };
