
const GoogleHome = require("google-home-push");
const mqtt = require('mqtt');
const mqttOption = require('./secret/mqtt.json');
let client = mqtt.connect(mqttOption);

let options = {
    language: "ko"
};

const myHome = new GoogleHome("192.168.0.76",options);

client.on("connect", () => {});
client.subscribe("iot/speaker");
client.on("message",(topic,payload,packet)=>{
    if(topic === "iot/speaker"){
        myHome.speak(payload.toString());
    }
});
