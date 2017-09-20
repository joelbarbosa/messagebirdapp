import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({      
  originator: String,
  recipients: [String],
  body: String
});

export default mongoose.model('messages', MessageSchema);