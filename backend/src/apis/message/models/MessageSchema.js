import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({      
  phone: String,
  message: String
});

export default mongoose.model('messages', MessageSchema);