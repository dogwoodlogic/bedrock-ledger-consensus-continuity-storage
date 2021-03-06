/*!
 * Copyright (c) 2017-2019 Digital Bazaar, Inc. All rights reserved.
 */
const {config} = require('bedrock');
const path = require('path');

config.mocha.tests.push(path.join(__dirname, 'mocha'));

// MongoDB
// using abbreviation to avoid index sizes exceeding 127 bytes
config.mongodb.name = 'bedrock_ledger_c_c_storage_test';
config.mongodb.dropCollections.onInit = true;
config.mongodb.dropCollections.collections = [];

// reduce processing interval for testing
config['ledger-consensus-continuity'].worker.election.gossipInterval = 0;

// decrease delay for gossiping with the same peer
config['ledger-consensus-continuity'].gossip.coolDownPeriod = 250;

config['ledger-consensus-continuity'].gossip.maxDepth = 6;

// disable caching in test
config['ledger-consensus-continuity'].gossip.cache.enabled = false;

// reduce debounce in the event-writer
config['ledger-consensus-continuity'].writer.debounce = 50;

// set this to false to ignore SSL errors in tests.
config['https-agent'].rejectUnauthorized = false;
