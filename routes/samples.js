const express = require('express');
const router = express.Router();
const cors = require('cors');
const config = require('../config/database');

const Sample = require('../models/sample');

// View samples
router.get('/get_samples', cors(), function(req, res, next) {
    const input = req.query.input;
    Sample.getSampleNameByInput(input, function(err, samples) {
        if(err) {
            throw err;
        }
        if(!samples) {
            return res.json({success: false, msg: 'No samples found'});
        } else {
            return res.json({success: true, msg: "Samples found", samples: samples});
        }
    });
});

// View single sample (entire sample)
router.get('/get_sample', cors(), function(req, res, next) {
    const input = req.query.input;
    Sample.getSampleByName(input, function(err, sample) {
        if(err) {
            throw err;
        }
        if(!sample) {
            return res.json({success: false, msg: 'No sample could be found'});
        } else {
            return res.json({success: true, msg: "Sample found", sample: sample});
        }
    })
});

// Get chart data
router.get('/chart_data', cors(), function(req, res, next) {
    const factor = req.query.factor;
    Sample.getSampleByFactor(factor, function(err, samples) {
        if(err) {
            throw err;
        }
        if(!samples) {
            return res.json({success: false, msg: 'No samples with factor name: ' + factor});
        } else {
            return res.json({success:true, msg: 'Samples found', samples: samples});
        }
    });
});

module.exports = router;