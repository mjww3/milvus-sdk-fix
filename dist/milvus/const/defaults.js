"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_DYNAMIC_FIELD = exports.DEFAULT_DB = exports.DEFAULT_RESOURCE_GROUP = exports.DEFAULT_PARTITIONS_NUMBER = exports.DEFAULT_RETRY_DELAY = exports.DEFAULT_MAX_RETRIES = exports.DEFAULT_METRIC_TYPE = exports.DEFAULT_TOPK = exports.DEFAULT_CONNECT_TIMEOUT = exports.DEFAULT_MILVUS_PORT = exports.DEFAULT_DEBUG = void 0;
// defaults
exports.DEFAULT_DEBUG = false;
exports.DEFAULT_MILVUS_PORT = 19530; // default milvus port
exports.DEFAULT_CONNECT_TIMEOUT = 15 * 1000; // 15s
exports.DEFAULT_TOPK = 100; // default topk
exports.DEFAULT_METRIC_TYPE = 'L2';
exports.DEFAULT_MAX_RETRIES = 3; // max retry time
exports.DEFAULT_RETRY_DELAY = 30; // retry delay, 30ms
exports.DEFAULT_PARTITIONS_NUMBER = 64;
exports.DEFAULT_RESOURCE_GROUP = '__default_resource_group';
exports.DEFAULT_DB = 'default';
exports.DEFAULT_DYNAMIC_FIELD = '$meta';
//# sourceMappingURL=defaults.js.map