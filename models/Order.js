/*Troy - Simple Schema for an order which uses the autogenerated userID
and ticketID to populate the userID and ticketID fields respectively.

This is exportable so it can be used in other files. */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  userID : String,
  ticketID: String,
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
