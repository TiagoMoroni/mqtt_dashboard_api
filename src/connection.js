const mqtt = require('mqtt');


const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const client = mqtt.connect('mqtt://m14.cloudmqtt.com:12891', {
  clientId,
  clean: true,
  connectTimeout: 4000,
  password: 'Vzw6NIX4voxY',
  username: 'vqlvmcfj',
  reconnectPeriod: 1000,
})

client.on('connect', () => {
  console.log('Connected')
  client.subscribe(['distancia'], () => {
    console.log(`Subscribed to topic distancia`)
  })
  client.subscribe(['luminosidade'], () => {
    console.log(`Subscribed to topic luminosidade`)
  })
  client.subscribe(['indoor/temperatura'], () => {
    console.log(`Subscribed to topic indoor/temperatura`)
  })
  client.subscribe(['indoor/umidade'], () => {
    console.log(`Subscribed to topic indoor/umidade`)
  })
  client.subscribe(['outdoor/temperatura'], () => {
    console.log(`Subscribed to topic outdoor/temperatura`)
  })
  client.subscribe(['outdoor/umidade'], () => {
    console.log(`Subscribed to topic outdoor/umidade`)
  })
})

const topicos = {}

client.on('message', (topic, payload) => {
    topicos[topic] = payload.toString();
})

module.exports = topicos