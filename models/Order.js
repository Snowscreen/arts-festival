const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  userID : String,
  ticketID: String,
});
const order = mongoose.model("Order", orderSchema);
module.exports = Ticket;