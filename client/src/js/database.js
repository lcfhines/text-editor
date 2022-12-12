import { openDB } from 'idb';

const initdb = async () =>
// create new database use version 1
  openDB('jate', 1, {
    // add database schema if not alraedy initialized
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // create new object store for the data, give id key
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>  {
  console.log(content);

  // connect to database and version
  const textDb = await openDB('jate', 1);

  // create new transaction 
  const tx = textDb.transaction('jate', 'readwrite');

  // open desired object store
  const store = tx.objectStore('jate');

  // use .put to pass in content
  const request = store.put({ id: 1, value: content });

  // confirm the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  console.log('GET all from the database');

  const textDb = await openDB('jate', 1);

  // create new transaction, read only since we're just getting the content
  const tx = textDb.transaction('jate', 'readonly');

  // opened desired store object
  const store = tx.objectStore('jate');

  // use getAll to get all data in the database
  const request = store.getAll();

  // confirm the request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();
