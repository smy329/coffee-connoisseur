import {
  table,
  getMinifiedRecords,
  findRecordByFilter,
} from "../../lib/airtable";

console.log({ table })

const createCoffeeStore = async(req, res) => {
    console.log({ req })

    if (req.method == "POST") {
        const {id, name, neighbourhood, address, voting, imgUrl} = req.body
    //find a record
        try {
          if (id) {
            const records = await findRecordByFilter(id);

            if (records.length !== 0) {
              res.json({
                message: "Record Fetched Successfully",
                records: records,
              });
            } else {
              //create a record
              if (name) {
                console.log("Going to create coffee store");
                const createRecords = await table.create([
                  {
                    fields: {
                      id,
                      name,
                      address,
                      neighbourhood,
                      voting,
                      imgUrl,
                    },
                  },
                ]);
                const records = getMinifiedRecords(createRecords);
                res.json({
                  message: "Record created Successfully",
                  records: records,
                });
                console.log("Created coffee store");
              } else {
                res.status(422);
                res.json({ message: "Name is missing" });
              }
            }
              
          } else {
            res.status(422)
            res.json({ message: "ID is missing" })
          }
        } catch (err) {
            console.error("Error creating or finding store", err);
            res.status(500)
            res.json({message: 'Error creating or finding store', err})
        }
    }
    else {
        res.json({message: "Request is GET"})
    }
}

export default createCoffeeStore