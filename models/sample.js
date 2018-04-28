const mongoose = require('mongoose');
const config = require('../config/database');

// Schema for ChIP sample
const SampleSchema = mongoose.Schema({
    sample: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    auc: { type: Number },
    synthetic_auc: { type: Number },
    x_intercept: { type: Number },
    synthetic_x_intercept: { type: Number },
    elbow_point: { type: Number },
    synthetic_elbow_point: { type: Number },
    js_distance: { type: Number },
    synthetic_js_distance: { type: Number },
    percent_genome_enriched: { type: Number },
    diff_enrichment: { type: Number },
    chance_divergence: { type: Number },
    reads_sequenced: { type: Number },
    reads_after_trimming: { type: Number },
    reads_mapped: { type: Number },
    percent_unique: { type: Number },
    reads_mapped_filtered: { type: Number },
    percent_unique_mapped_filtered: { type: Number },
    reads_in_peaks: { type: Number },
    percent_in_peaks: { type: Number },
    broad_peak_count: { type: Number },
    narrow_peak_count: { type: Number },
    pbc_one: { type: Number },
    nrf: { type: Number },
    nsc: { type: Number },
    rsc: { type: Number },
    comment: { type: String },
    peaks: { type: String },
    percent_mapped_filtered: { type: Number },
    percent_reads_mapped: { type: Number },
    factor_name: { type: String },
    fp_image: { type: String },
    spp_image: { type: String },
    ip_control: { type: String },
    input_control: { type: String },
    flowcell: { type: String }
});

const Sample = module.exports = mongoose.model('Sample', SampleSchema);

// Fetch Sample by database id
module.exports.getSampleById = function(id, callback) {
    Sample.getSampleById(id, callback);
};

// Fetch Sample by Sample name
module.exports.getSampleByName = function(name, callback) {
    const query = {sample: name};
    Sample.findOne(query, callback);
};

// Fetch number of samples
module.exports.getSampleByInputCount = function(input, callback) {
    Sample.count({sample: {$regex: String(input), $options: "i"}}, callback);
};

// Fetch Sample by Regex (samples that contain pattern), implements pagination
module.exports.getSampleNameByInput = function(input, num, callback) {
    // Sample.find({sample: {$regex: String(input), $options: "i"}}, "sample", callback);
    Sample.find({sample: {$regex: String(input), $options: "i"}}, "sample", { skip: 6 * (num-1), limit: 6}, callback)
        .sort({ '_id': -1});
};

// Fetch Sample by Regex, limited to 10 most recent samples
module.exports.getMostRecentSamplesByInput = function(input, callback) {
    Sample.find({sample: {$regex: String(input), $options: "i"}}, "sample", {limit: 10}, callback)
        .sort({ '_id': -1});
};


// Fetch Sample by Factor Name
module.exports.getSampleByFactor = function(factor, callback) {
    Sample.find({factor_name: factor}, callback);
};

// Add Sample
module.exports.addSample = function(sample, callback) {
    Sample.save(callback);
};
