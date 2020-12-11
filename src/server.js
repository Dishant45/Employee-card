const uniqid = require("uniqid");
const Submission = function (body) {
  this.submission = body;
  this.email = body.email;
  this.submissionId = uniqid();
};
​
module.exports = Submission;