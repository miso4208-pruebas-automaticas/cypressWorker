'use stric'
var AWS = require ('aws-sdk')

AWS.config.update({
    region: 'us-east-2',
    accessKeyId:process.env.ACCES_KEY_ID_SQS,
    secretAccessKey:process.env.SECRET_ACCESS_KEY_SQS,

});

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const queueURL = 'https://sqs.us-east-2.amazonaws.com/760376241675/WorkerSQS.fifo';

module.exports.inQueue = (urlInicial) =>{
    var params = {
        MessageGroupId: "Voces",
        MessageBody: urlInicial,
        QueueUrl: queueURL
      };
      sqs.sendMessage(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.MessageId);
        }
      });
}