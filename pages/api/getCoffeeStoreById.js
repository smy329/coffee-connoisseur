import {
  table,
  getMinifiedRecords,
  findRecordByFilter,
} from "../../lib/airtable";

const getCoffeeStoreById = async (req, res) => {

    const { id } = req.query
    
    try {
        if (id) {
            const records = await findRecordByFilter(id);
            console.log("Id has been found")

            if (records.length !== 0) {
              res.json(records);
            } else {
              res.json({
                message: "ID doesn't exist",
              });
            }
            
        } else {
            res.status(400)
            res.json({message: "id is missing"})
        }
        
    } catch (error) {
        res.status(500)
        res.json({message: "Something went wrong", error})
    }
}

export default getCoffeeStoreById;