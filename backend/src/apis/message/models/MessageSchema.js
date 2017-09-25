import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({      
  id: String
});

export default mongoose.model('messages', MessageSchema);