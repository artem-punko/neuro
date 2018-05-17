var express = require('express');
var router = express.Router();
const brain = require('brain.js');
var ml = require('machine_learning');
const architect = require('neataptic').architect;

var net;
var data;
var mlp;

var network = new architect.Perceptron(3, 3, 1);

router.get('/:type/:one/:two/:three', function (req, res, next) {
  // normalization
  var err = false;
  var inputs = [req.params.one, req.params.two, req.params.three];
  if (req.params.type == 0) {
    data = [
      { "input": [0, 0.43, 0.0015], "output": [0] },
      { "input": [0, 0.5, 0.0015], "output": [0] },
      { "input": [0, 0.6, 0.0015], "output": [0] },
      { "input": [0, 1, 0.0015], "output": [0] },
    
      { "input": [44, 0.43, 0.0015], "output": [0.047] },
      { "input": [44, 0.5, 0.0015], "output": [0.031] },
      { "input": [44, 0.6, 0.0015], "output": [0.022] },
      { "input": [44, 1, 0.0015], "output": [0] },
    
      { "input": [385, 0.43, 0.0015], "output": [0.14] },
      { "input": [673, 0.43, 0.0015], "output": [0.184] },
      { "input": [1208, 0.43, 0.0015], "output": [0.208] },
      { "input": [1208, 0.5, 0.0015], "output": [0.138] },
      { "input": [1208, 0.6, 0.0015], "output": [0.124] },
      { "input": [1208, 1, 0.0015], "output": [0] },
    
      { "input": [2845, 0.43, 0.0015], "output": [0.268] },
      { "input": [2845, 0.5, 0.0015], "output": [0.172] },
      { "input": [2845, 0.6, 0.0015], "output": [0.145] },
      { "input": [2845, 1, 0.0015], "output": [0] },
    
      { "input": [0, 0.43, 0.0005], "output": [0] },
      { "input": [0, 0.5, 0.0005], "output": [0] },
      { "input": [0, 0.6, 0.0005], "output": [0] },
      { "input": [0, 1, 0.0005], "output": [0] },
    
      { "input": [44, 0.43, 0.0005], "output": [0.05] },
      { "input": [44, 0.5, 0.0005], "output": [0.041] },
      { "input": [44, 0.6, 0.0005], "output": [0.025] },
      { "input": [44, 1, 0.0005], "output": [0] },
    
      { "input": [385, 0.43, 0.0005], "output": [0.102] },
      { "input": [673, 0.43, 0.0005], "output": [0.124] },
      { "input": [1208, 0.43, 0.0005], "output": [0.145] },
      { "input": [1208, 0.5, 0.0005], "output": [0.101] },
      { "input": [1208, 0.6, 0.0005], "output": [0.059] },
      { "input": [1208, 1, 0.0005], "output": [0] },
    
      { "input": [2845, 0.43, 0.0005], "output": [0.182] },
      { "input": [2845, 0.5, 0.0005], "output": [0.12] },
      { "input": [2845, 0.6, 0.0005], "output": [0.077] },
      { "input": [2845, 1, 0.0005], "output": [0] },
    
      { "input": [0, 0.43, 0.00025], "output": [0] },
      { "input": [0, 0.5, 0.00025], "output": [0] },
      { "input": [0, 0.6, 0.00025], "output": [0] },
      { "input": [0, 1, 0.00025], "output": [0] },
    
      { "input": [44, 0.43, 0.00025], "output": [0.048] },
      { "input": [44, 0.5, 0.00025], "output": [0.031] },
      { "input": [44, 0.6, 0.00025], "output": [0.025] },
      { "input": [44, 1, 0.00025], "output": [0] },
    
      { "input": [385, 0.43, 0.00025], "output": [0.099] },
      { "input": [673, 0.43, 0.00025], "output": [0.114] },
      { "input": [1208, 0.43, 0.00025], "output": [0.131] },
      { "input": [1208, 0.5, 0.00025], "output": [0.098] },
      { "input": [1208, 0.6, 0.00025], "output": [0.057] },
      { "input": [1208, 1, 0.00025], "output": [0] },
    
      { "input": [2845, 0.43, 0.00025], "output": [0.167] },
      { "input": [2845, 0.5, 0.00025], "output": [0.114] },
      { "input": [2845, 0.6, 0.00025], "output": [0.077] },
      { "input": [2845, 1, 0.00025], "output": [0] },
      { "input": [0, 0.43, 0.0001], "output": [0] },
      { "input": [2845, 0.43, 0.0001], "output": [0.159] }];
    var k = JSON.stringify(data);
    normalizationV2()
    res.send(k);
  }
  // brain
  else if (req.params.type == 1) {
    brainNeuro();
    res.json('good');
  }
  else if (req.params.type == 2) {
    res.json(brainNeuroRun());
  }
  // machine_learning
  else if (req.params.type == 3) {
    mlNeuro();
    res.json('good');
  }
  else if (req.params.type == 4) {
    res.json(mlNeuroRun());
  }
  // neataptic
  else if (req.params.type == 5) {
    neatapticNeuro();
    res.json('good');
  }
  else if (req.params.type == 6) {
    res.json(neatapticNeuroRun());
  }
  // brain
  else if (req.params.type == 7) {
    inputs = normalizationInputsV2(inputs)
    console.log(inputs)
    res.json(brainNeuroRunSmall(inputs));
  }
  // machine_learning
  else if (req.params.type == 8) {
    inputs = normalizationInputsV2(inputs)
    var a = [];
    a.push(inputs);
    a.push(inputs);
    res.json(mlNeuroRunSmall(a));
  }
  // neataptic
  else if (req.params.type == 9) {
    inputs = normalizationInputsV2(inputs)
    console.log(inputs)
    res.json(neatapticNeuroRunSmall(inputs));
  }
  // res.json();
});

function brainNeuro() {
  var config = {
    binaryThresh: 0.5,
    hiddenLayers: [20],
    activation: 'sigmoid',
    learningRate: 0.6
  }
  net = new brain.NeuralNetwork(config);
  net.train(data, {
    iterations: 100000,
    errorThresh: 0.000000005,
    log: false,
    logPeriod: 10,
    learningRate: 0.9,
    momentum: 0.1,
    callback: null,
    callbackPeriod: 100,
    timeout: Infinity
  });
}

function brainNeuroRun() {
  var output = [];
  var deviations = [];
  for (var j = 0; j < data.length; j++) {
    output.push(net.run(data[j].input)[0].toFixed(5));
    var a = data[j].output[0];
    var aI = parseFloat(output[j]);
    var mean = (a + aI) / 2;
    var deviationA = a - mean;
    var deviationAI = aI - mean;
    var deviation = ((deviationA * deviationA) + (deviationAI * deviationAI)) / 2;
    var std_deviation = Math.sqrt(deviation).toFixed(5);
    deviations.push(std_deviation);
  }
  return { 'output': output, 'deviation': deviations };
}

function brainNeuroRunSmall(input) {
  var output = [];
  output.push(net.run(input)[0].toFixed(5));
  return { 'output': output, 'deviation': null };
}

function mlNeuro() {

  var out = [];
  var inp = [];
  for (var j = 0; j < data.length; j++) {
    out.push(data[j].output);
    inp.push(data[j].input);
  }
  mlp = new ml.MLP({
    'input': inp,
    'label': out,
    'n_ins': 3,
    'n_outs': 1,
    'hidden_layer_sizes': [20]

  });
  mlp.train({
    'lr': 0.6,
    'epochs': 100000
  });
}

function mlNeuroRun() {
  var inp = [];
  for (var j = 0; j < data.length; j++) {
    inp.push(data[j].input);
  }
  var output = mlp.predict(inp);
  var deviations = [];
  for (var j = 0; j < data.length; j++) {
    var a = data[j].output[0];
    var aI = parseFloat(output[j][0].toFixed(5));
    var mean = (a + aI) / 2;
    var deviationA = a - mean;
    var deviationAI = aI - mean;
    var deviation = ((deviationA * deviationA) + (deviationAI * deviationAI)) / 2;
    var std_deviation = Math.sqrt(deviation).toFixed(5);
    deviations.push(std_deviation);
  }
  return { 'output': output, 'deviation': deviations  };
}

function mlNeuroRunSmall(input) {
  var output = mlp.predict(input);
  return { 'output': output, 'deviation': null };
}

function neatapticNeuro() {
  var trainingSet = data;
  network.train(trainingSet, {
    log: 50,
    error: 0.000001,
    iterations: 100000,
    rate: 0.3,
    momentum: 0.9
  });
}

function neatapticNeuroRun() {
  var output = [];
  var deviations = [];
  for (var j = 0; j < data.length; j++) {
    output.push(network.activate(data[j].input)[0].toFixed(5));
    var a = data[j].output[0];
    var aI = parseFloat(output[j]);
    var mean = (a + aI) / 2;
    var deviationA = a - mean;
    var deviationAI = aI - mean;
    var deviation = ((deviationA * deviationA) + (deviationAI * deviationAI)) / 2;
    var std_deviation = Math.sqrt(deviation).toFixed(5);
    deviations.push(std_deviation);
  }
  return { 'output': output, 'deviation': deviations };
}

function neatapticNeuroRunSmall(input) {
  var output = [];
  output.push(network.activate(input)[0].toFixed(5));
  return { 'output': output, 'deviation': null };
}

function normalizationV2() {
  for (var j = 0; j < data.length; j++) {
    data[j].input[0] = numToBitB(data[j].input[0]);
    data[j].input[1] = numToBitC(data[j].input[1]);
    data[j].input[2] = numToBitD(data[j].input[2]);

  }
  return 'qqq';
};

function numToBitB(value) {
  var num = (value - 0) / (5000 - 0);
  return Number((num).toFixed(6));
};

function numToBitC(value) {
  var num = (value - 0) / (1.3 - 0);
  return Number((num).toFixed(6));
};

function numToBitD(value) {
  var num = (value - 0.0001) / (0.01 - 0.0001);
  return Number((num).toFixed(6));
};

function normalizationInputsV2(inputs) {
  inputs[0] = numToBitB(inputs[0]);
  inputs[1] = numToBitC(inputs[1]);
  inputs[2] = numToBitD(inputs[2]);
  return inputs;
};



module.exports = router;