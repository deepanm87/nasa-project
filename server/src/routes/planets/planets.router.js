const express = require('express')

const { httpGetAllPlanets } = require('./planets.controller')

planetsRouter.get('/', httpGetAllPlanets)

module.exports = planetsRouter