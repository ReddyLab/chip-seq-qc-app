const express = require('express');
const router = express.Router();
const cors = require('cors');
const config = require('../config/database');

const Sample = require('../models/sample');

// Add sample (Method: POST)
router.post('/add', function(req, res, next) {
    let newSample = new Sample({
        name: req.body.name,
        auc: req.body.auc,
        synthetic_auc: req.body.synthetic_auc,
        x_intercept: req.body.x_intercept,
        synthetic_x_intercept: req.body.synthetic_x_intercept,
        elbow_point: req.body.elbow_point,
        synthetic_elbow_point: req.body.synthetic_elbow_point,
        js_distance: req.body.js_distance,
        synthetic_js_distance: req.body.synthetic_js_distance,
        percent_genome_enriched: req.body.percent_genome_enriched,
        diff_enrichment: req.body.diff_enrichment,
        chance_divergence: req.body.chance_divergence,
        reads_sequenced: req.body.reads_sequenced,
        reads_after_trimming: req.body.reads_after_trimming,
        reads_mapped: req.body.reads_after_trimming,
        percent_unique: req.body.percent_unique,
        reads_mapped_filtered: req.body.reads_mapped_filtered,
        percent_unique_mapped_filtered: req.percent_unique_mapped_filtered,
        reads_in_peaks: req.body.reads_in_peaks,
        percent_in_peaks: req.body.percent_in_peaks,
        broad_peaks: req.body.broad_peaks,
        narrow_peaks: req.body.narrow_peaks,
        pbc_one: req.body.pbc_one,
        nsc: req.body.nsc,
        rsc: req.body.rsc,
        comment: req.body.comment,
        peaks: req.body.peaks,
        percent_mapped_filtered: req.body.percent_mapped_filtered,
        percent_reads_mapped: req.body.percent_reads_mapped,
        factor_name: req.body.factor_name,
        image: req.body.image
    });

    Sample.addSample(newSample, function(err, sample) {
        if(err) {
            res.json({
                success: false,
                msg: "Failed to add sample"
            });
        } else {
            res.json({
                success: true,
                msg: "Sample added"
            })
        }
    });
});

// View samples (only names)
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