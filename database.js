import { openDatabase } from 'react-native-sqlite-storage';
import { dbSchema } from './dbSchema'

const db = await openDatabase({
  name: 'yoruba_pronunciation.db',
  location: 'default',
});



const createTables = async () => {
    for (const table of dbSchema.tables) {
      const sql = `CREATE TABLE IF NOT EXISTS ${table.name} (${table.columns.map(column => `${column.name} ${column.type}`).join(', ')})`;
      await db.transaction(tx => tx.executeSql(sql));
    }
  };
  
await createTables();
export default db  