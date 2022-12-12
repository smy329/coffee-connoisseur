const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffee-stores");

const getMinifiedRecord = (record) => {
     console.log("From single minified Record");
    return {
        recordId: record.id,
        ...record.fields,
    }
}
const getMinifiedRecords = (records) => {
    console.log("From minified Records")
    return records.map((record) => getMinifiedRecord(record));
}

const findRecordByFilter = async (id) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getMinifiedRecords(findCoffeeStoreRecords);
};

export { table, getMinifiedRecord, getMinifiedRecords, findRecordByFilter };