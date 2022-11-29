import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>  {
  console.error('putDb not implemented');
// connect to database and version
  const jateDb = await openDB('jate', 1);
  // create new transaction 
  const tx = jateDb.transaction('jate', 'readwrite');
  // open desired object store
  const store = tx.objectStore('jate');
  // use .add to pass in content
  const request = store.add({ jate: content });
  // await and return
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  console.log('GET all from the database');

  const jateDb = await openDB('jate', 1);
// read only since we're just getting the content
  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
