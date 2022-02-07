const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email:          { type: String, required: true, unique: true  },
  address:        { type: String },
  country:        { type: String },
  zipcode:        { type: String },
  password:       { type: String },
  firstname:      { type: String },
  lastname:       { type: String },
  mobilenumber:   { type: String },
  register_type:  { type: String, default: 'NORMAL_SIGNUP'},
  google_auth_user_id: { type: String },
  fb_auth_user_id: { type: String },
  avatar:         { type: String },  
  wallet:         { type: String },
  date_form:      { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', UserSchema);
