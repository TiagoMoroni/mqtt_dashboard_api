const express = require("express")
const routes = express.Router()

const topicos = require("./connection")

routes.get(`/distancia`, (req, res) => {
  res.send(topicos['distancia'])
})
routes.get(`/luminosidade`, (req, res) => {
  res.send(topicos['luminosidade'])
})
routes.get(`/indoor/temperatura`, (req, res) => {
  res.send(topicos['indoor/temperatura'])
})
routes.get(`/indoor/umidade`, (req, res) => {
  res.send(topicos['indoor/umidade'])
})
routes.get(`/outdoor/temperatura`, (req, res) => {
  res.send(topicos['outdoor/temperatura'])
})
routes.get(`/outdoor/umidade`, (req, res) => {
  res.send(topicos['outdoor/umidade'])
})

module.exports = routes