import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
  _id: int,
  email:  String, 
  password: String,
  type:   int,
  name: String,
  surname: String,
  address: {zip: int, city: String, province: String, nation: String, street: String},
  phone: String,
  assign_squad: String,
  status: int,
  hidden: int,
  added_by: int,
  created_at: Date, default: Date.now,
  updated_at: Date,
  deleted_at: Date,
});

const squad = new Schema({
    category:  String, 
    players: String,
    coach: int,
    tm: int,
    status: int,
    hidden: int,
    added_by: int,
    created_at: Date, default: Date.now,
    updated_at: Date,
    deleted_at: Date,
  });