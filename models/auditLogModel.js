const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: String,
  },
  actionType: {
    type: String,
    enum: ["Create", "Read", "Update", "Delete"],
  },
  affectedResource: {
    type: String,
  },
  details: {
    type: String,
  },
});

const AuditLog = mongoose.model("auditlog", auditLogSchema);

module.exports = { AuditLog };
