const mongoose = require('mongoose');
const config = require('../config/database');

// Schema for ChIP sample
const SampleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
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
    broad_peaks: { type: Number },
    narrow_peaks: { type: Number },
    pbc_one: { type: Number },
    nsc: { type: Number },
    rsc: { type: Number },
    comment: { type: String },
    peaks: { type: String },
    percent_mapped_filtered: { type: Number },
    percent_reads_mapped: { type: Number },
    factor_name: { type: String },
    image: { type: String }
});