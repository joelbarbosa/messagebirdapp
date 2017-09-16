class BaseService {
  
  constructor(schema) {
    this.schema = schema;
  }

  save(schema) {   
    return schema.save();
  }

  delete(id) {
    return this.schema.findOne({ _id: id }).remove().exec();
  }

  findAll() {
   return this.schema.find({}).exec();
  }

}

export default BaseService;