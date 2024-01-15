import { openDatabase } from 'react-native-sqlite-storage';

const db = await openDatabase({
  name: 'yoruba_pronunciation.db',
  location: 'default',
});

export default db;

const createTables = async () => {
    for (const table of dbSchema.tables) {
      const sql = `CREATE TABLE IF NOT EXISTS ${table.name} (${table.columns.map(column => `${column.name} ${column.type}`).join(', ')})`;
      await db.transaction(tx => tx.executeSql(sql));
    }
  };
  
  createTables();