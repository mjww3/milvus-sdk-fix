"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadState = exports.Privileges = exports.UserPrivileges = exports.GlobalPrivileges = exports.CollectionPrivileges = exports.RbacObjects = exports.Roles = exports.OperatePrivilegeType = exports.OperateUserRoleType = exports.DataTypeMap = exports.DataType = exports.MsgType = exports.IndexType = exports.MetricType = exports.StateCode = exports.ObjectPrivilege = exports.ObjectType = exports.ImportState = exports.CompactionState = exports.SegmentState = exports.ConsistencyLevelEnum = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["Success"] = 0] = "Success";
    ErrorCode[ErrorCode["UnexpectedError"] = 1] = "UnexpectedError";
    ErrorCode[ErrorCode["ConnectFailed"] = 2] = "ConnectFailed";
    ErrorCode[ErrorCode["PermissionDenied"] = 3] = "PermissionDenied";
    ErrorCode[ErrorCode["CollectionNotExists"] = 4] = "CollectionNotExists";
    ErrorCode[ErrorCode["IllegalArgument"] = 5] = "IllegalArgument";
    ErrorCode[ErrorCode["IllegalDimension"] = 7] = "IllegalDimension";
    ErrorCode[ErrorCode["IllegalIndexType"] = 8] = "IllegalIndexType";
    ErrorCode[ErrorCode["IllegalCollectionName"] = 9] = "IllegalCollectionName";
    ErrorCode[ErrorCode["IllegalTOPK"] = 10] = "IllegalTOPK";
    ErrorCode[ErrorCode["IllegalRowRecord"] = 11] = "IllegalRowRecord";
    ErrorCode[ErrorCode["IllegalVectorID"] = 12] = "IllegalVectorID";
    ErrorCode[ErrorCode["IllegalSearchResult"] = 13] = "IllegalSearchResult";
    ErrorCode[ErrorCode["FileNotFound"] = 14] = "FileNotFound";
    ErrorCode[ErrorCode["MetaFailed"] = 15] = "MetaFailed";
    ErrorCode[ErrorCode["CacheFailed"] = 16] = "CacheFailed";
    ErrorCode[ErrorCode["CannotCreateFolder"] = 17] = "CannotCreateFolder";
    ErrorCode[ErrorCode["CannotCreateFile"] = 18] = "CannotCreateFile";
    ErrorCode[ErrorCode["CannotDeleteFolder"] = 19] = "CannotDeleteFolder";
    ErrorCode[ErrorCode["CannotDeleteFile"] = 20] = "CannotDeleteFile";
    ErrorCode[ErrorCode["BuildIndexError"] = 21] = "BuildIndexError";
    ErrorCode[ErrorCode["IllegalNLIST"] = 22] = "IllegalNLIST";
    ErrorCode[ErrorCode["IllegalMetricType"] = 23] = "IllegalMetricType";
    ErrorCode[ErrorCode["OutOfMemory"] = 24] = "OutOfMemory";
    ErrorCode[ErrorCode["IndexNotExist"] = 25] = "IndexNotExist";
    ErrorCode[ErrorCode["EmptyCollection"] = 26] = "EmptyCollection";
    ErrorCode[ErrorCode["UpdateImportTaskFailure"] = 27] = "UpdateImportTaskFailure";
    ErrorCode[ErrorCode["CollectionNameNotFound"] = 28] = "CollectionNameNotFound";
    ErrorCode[ErrorCode["CreateCredentialFailure"] = 29] = "CreateCredentialFailure";
    ErrorCode[ErrorCode["UpdateCredentialFailure"] = 30] = "UpdateCredentialFailure";
    ErrorCode[ErrorCode["DeleteCredentialFailure"] = 31] = "DeleteCredentialFailure";
    ErrorCode[ErrorCode["GetCredentialFailure"] = 32] = "GetCredentialFailure";
    ErrorCode[ErrorCode["ListCredUsersFailure"] = 33] = "ListCredUsersFailure";
    ErrorCode[ErrorCode["GetUserFailure"] = 34] = "GetUserFailure";
    ErrorCode[ErrorCode["CreateRoleFailure"] = 35] = "CreateRoleFailure";
    ErrorCode[ErrorCode["DropRoleFailure"] = 36] = "DropRoleFailure";
    ErrorCode[ErrorCode["OperateUserRoleFailure"] = 37] = "OperateUserRoleFailure";
    ErrorCode[ErrorCode["SelectRoleFailure"] = 38] = "SelectRoleFailure";
    ErrorCode[ErrorCode["SelectUserFailure"] = 39] = "SelectUserFailure";
    ErrorCode[ErrorCode["SelectResourceFailure"] = 40] = "SelectResourceFailure";
    ErrorCode[ErrorCode["OperatePrivilegeFailure"] = 41] = "OperatePrivilegeFailure";
    ErrorCode[ErrorCode["SelectGrantFailure"] = 42] = "SelectGrantFailure";
    ErrorCode[ErrorCode["RefreshPolicyInfoCacheFailure"] = 43] = "RefreshPolicyInfoCacheFailure";
    ErrorCode[ErrorCode["ListPolicyFailure"] = 44] = "ListPolicyFailure";
    ErrorCode[ErrorCode["NotShardLeader"] = 45] = "NotShardLeader";
    ErrorCode[ErrorCode["NoReplicaAvailable"] = 46] = "NoReplicaAvailable";
    ErrorCode[ErrorCode["SegmentNotFound"] = 47] = "SegmentNotFound";
    ErrorCode[ErrorCode["ForceDeny"] = 48] = "ForceDeny";
    ErrorCode[ErrorCode["RateLimit"] = 49] = "RateLimit";
    ErrorCode[ErrorCode["NodeIDNotMatch"] = 50] = "NodeIDNotMatch";
    // Service availability.
    // NA: Not Available.
    ErrorCode[ErrorCode["DataCoordNA"] = 100] = "DataCoordNA";
    // internal error code.
    ErrorCode[ErrorCode["DDRequestRace"] = 1000] = "DDRequestRace";
})(ErrorCode || (ErrorCode = {}));
var ConsistencyLevelEnum;
(function (ConsistencyLevelEnum) {
    ConsistencyLevelEnum[ConsistencyLevelEnum["Strong"] = 0] = "Strong";
    ConsistencyLevelEnum[ConsistencyLevelEnum["Session"] = 1] = "Session";
    ConsistencyLevelEnum[ConsistencyLevelEnum["Bounded"] = 2] = "Bounded";
    ConsistencyLevelEnum[ConsistencyLevelEnum["Eventually"] = 3] = "Eventually";
    ConsistencyLevelEnum[ConsistencyLevelEnum["Customized"] = 4] = "Customized";
})(ConsistencyLevelEnum = exports.ConsistencyLevelEnum || (exports.ConsistencyLevelEnum = {}));
var SegmentState;
(function (SegmentState) {
    SegmentState[SegmentState["SegmentStateNone"] = 0] = "SegmentStateNone";
    SegmentState[SegmentState["NotExist"] = 1] = "NotExist";
    SegmentState[SegmentState["Growing"] = 2] = "Growing";
    SegmentState[SegmentState["Sealed"] = 3] = "Sealed";
    SegmentState["Flushed"] = "Flushed";
    SegmentState["Flushing"] = "Flushing";
})(SegmentState = exports.SegmentState || (exports.SegmentState = {}));
var CompactionState;
(function (CompactionState) {
    CompactionState[CompactionState["UndefiedState"] = 0] = "UndefiedState";
    CompactionState[CompactionState["Executing"] = 1] = "Executing";
    CompactionState[CompactionState["Completed"] = 2] = "Completed";
})(CompactionState = exports.CompactionState || (exports.CompactionState = {}));
var ImportState;
(function (ImportState) {
    ImportState["ImportPending"] = "ImportPending";
    ImportState["ImportFailed"] = "ImportFailed";
    ImportState["ImportStarted"] = "ImportStarted";
    ImportState["ImportPersisted"] = "ImportPersisted";
    ImportState["ImportCompleted"] = "ImportCompleted";
    ImportState["ImportFailedAndCleaned"] = "ImportFailedAndCleaned";
})(ImportState = exports.ImportState || (exports.ImportState = {}));
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["Collection"] = 0] = "Collection";
    ObjectType[ObjectType["Global"] = 1] = "Global";
    ObjectType[ObjectType["User"] = 2] = "User";
})(ObjectType = exports.ObjectType || (exports.ObjectType = {}));
var ObjectPrivilege;
(function (ObjectPrivilege) {
    ObjectPrivilege[ObjectPrivilege["PrivilegeAll"] = 0] = "PrivilegeAll";
    ObjectPrivilege[ObjectPrivilege["PrivilegeCreateCollection"] = 1] = "PrivilegeCreateCollection";
    ObjectPrivilege[ObjectPrivilege["PrivilegeDropCollection"] = 2] = "PrivilegeDropCollection";
    ObjectPrivilege[ObjectPrivilege["PrivilegeDescribeCollection"] = 3] = "PrivilegeDescribeCollection";
    ObjectPrivilege[ObjectPrivilege["PrivilegeShowCollections"] = 4] = "PrivilegeShowCollections";
    ObjectPrivilege[ObjectPrivilege["PrivilegeLoad"] = 5] = "PrivilegeLoad";
    ObjectPrivilege[ObjectPrivilege["PrivilegeRelease"] = 6] = "PrivilegeRelease";
    ObjectPrivilege[ObjectPrivilege["PrivilegeCompaction"] = 7] = "PrivilegeCompaction";
    ObjectPrivilege[ObjectPrivilege["PrivilegeInsert"] = 8] = "PrivilegeInsert";
    ObjectPrivilege[ObjectPrivilege["PrivilegeDelete"] = 9] = "PrivilegeDelete";
    ObjectPrivilege[ObjectPrivilege["PrivilegeGetStatistics"] = 10] = "PrivilegeGetStatistics";
    ObjectPrivilege[ObjectPrivilege["PrivilegeCreateIndex"] = 11] = "PrivilegeCreateIndex";
    ObjectPrivilege[ObjectPrivilege["PrivilegeIndexDetail"] = 12] = "PrivilegeIndexDetail";
    ObjectPrivilege[ObjectPrivilege["PrivilegeDropIndex"] = 13] = "PrivilegeDropIndex";
    ObjectPrivilege[ObjectPrivilege["PrivilegeSearch"] = 14] = "PrivilegeSearch";
    ObjectPrivilege[ObjectPrivilege["PrivilegeFlush"] = 15] = "PrivilegeFlush";
    ObjectPrivilege[ObjectPrivilege["PrivilegeQuery"] = 16] = "PrivilegeQuery";
    ObjectPrivilege[ObjectPrivilege["PrivilegeLoadBalance"] = 17] = "PrivilegeLoadBalance";
    ObjectPrivilege[ObjectPrivilege["PrivilegeImport"] = 18] = "PrivilegeImport";
    ObjectPrivilege[ObjectPrivilege["PrivilegeCreateOwnership"] = 19] = "PrivilegeCreateOwnership";
    ObjectPrivilege[ObjectPrivilege["PrivilegeUpdateUser"] = 20] = "PrivilegeUpdateUser";
    ObjectPrivilege[ObjectPrivilege["PrivilegeDropOwnership"] = 21] = "PrivilegeDropOwnership";
    ObjectPrivilege[ObjectPrivilege["PrivilegeSelectOwnership"] = 22] = "PrivilegeSelectOwnership";
    ObjectPrivilege[ObjectPrivilege["PrivilegeManageOwnership"] = 23] = "PrivilegeManageOwnership";
    ObjectPrivilege[ObjectPrivilege["PrivilegeSelectUser"] = 24] = "PrivilegeSelectUser";
})(ObjectPrivilege = exports.ObjectPrivilege || (exports.ObjectPrivilege = {}));
var StateCode;
(function (StateCode) {
    StateCode[StateCode["Initializing"] = 0] = "Initializing";
    StateCode[StateCode["Healthy"] = 1] = "Healthy";
    StateCode[StateCode["Abnormal"] = 2] = "Abnormal";
    StateCode[StateCode["StandBy"] = 3] = "StandBy";
})(StateCode = exports.StateCode || (exports.StateCode = {}));
var MetricType;
(function (MetricType) {
    // L2 euclidean distance
    MetricType["L2"] = "L2";
    // IP inner product
    MetricType["IP"] = "IP";
    // support cosine 2.3
    // COSINE = 'COSINE',
    // HAMMING hamming distance
    MetricType["HAMMING"] = "HAMMING";
    // JACCARD jaccard distance
    MetricType["JACCARD"] = "JACCARD";
    // TANIMOTO tanimoto distance
    MetricType["TANIMOTO"] = "TANIMOTO";
    // SUBSTRUCTURE substructure distance
    MetricType["SUBSTRUCTURE"] = "SUBSTRUCTURE";
    // SUPERSTRUCTURE superstructure
    MetricType["SUPERSTRUCTURE"] = "SUPERSTRUCTURE";
})(MetricType = exports.MetricType || (exports.MetricType = {}));
var IndexType;
(function (IndexType) {
    IndexType["FLAT"] = "FLAT";
    IndexType["IVF_FLAT"] = "IVF_FLAT";
    IndexType["IVF_SQ8"] = "IVF_SQ8";
    IndexType["IVF_PQ"] = "IVF_PQ";
    IndexType["HNSW"] = "HNSW";
    IndexType["ANNOY"] = "ANNOY";
    IndexType["BIN_FLAT"] = "BIN_FLAT";
    IndexType["BIN_IVF_FLAT"] = "BIN_IVF_FLAT";
    IndexType["DISKANN"] = "DISKANN";
    IndexType["AUTOINDEX"] = "AUTOINDEX";
    // GPU_IVF_FLAT = 'GPU_IVF_FLAT', // 2.3
    // GPU_IVF_PQ = 'GPU_IVF_PQ' // 2.3
})(IndexType = exports.IndexType || (exports.IndexType = {}));
var MsgType;
(function (MsgType) {
    MsgType[MsgType["Undefined"] = 0] = "Undefined";
    /* DEFINITION REQUESTS: COLLECTION */
    MsgType[MsgType["CreateCollection"] = 100] = "CreateCollection";
    MsgType[MsgType["DropCollection"] = 101] = "DropCollection";
    MsgType[MsgType["HasCollection"] = 102] = "HasCollection";
    MsgType[MsgType["DescribeCollection"] = 103] = "DescribeCollection";
    MsgType[MsgType["ShowCollections"] = 104] = "ShowCollections";
    MsgType[MsgType["GetSystemConfigs"] = 105] = "GetSystemConfigs";
    MsgType[MsgType["LoadCollection"] = 106] = "LoadCollection";
    MsgType[MsgType["ReleaseCollection"] = 107] = "ReleaseCollection";
    MsgType[MsgType["CreateAlias"] = 108] = "CreateAlias";
    MsgType[MsgType["DropAlias"] = 109] = "DropAlias";
    MsgType[MsgType["AlterAlias"] = 110] = "AlterAlias";
    MsgType[MsgType["AlterCollection"] = 111] = "AlterCollection";
    /* DEFINITION REQUESTS: PARTITION */
    MsgType[MsgType["CreatePartition"] = 200] = "CreatePartition";
    MsgType[MsgType["DropPartition"] = 201] = "DropPartition";
    MsgType[MsgType["HasPartition"] = 202] = "HasPartition";
    MsgType[MsgType["DescribePartition"] = 203] = "DescribePartition";
    MsgType[MsgType["ShowPartitions"] = 204] = "ShowPartitions";
    MsgType[MsgType["LoadPartitions"] = 205] = "LoadPartitions";
    MsgType[MsgType["ReleasePartitions"] = 206] = "ReleasePartitions";
    /* DEFINE REQUESTS: SEGMENT */
    MsgType[MsgType["ShowSegments"] = 250] = "ShowSegments";
    MsgType[MsgType["DescribeSegment"] = 251] = "DescribeSegment";
    MsgType[MsgType["LoadSegments"] = 252] = "LoadSegments";
    MsgType[MsgType["ReleaseSegments"] = 253] = "ReleaseSegments";
    MsgType[MsgType["HandoffSegments"] = 254] = "HandoffSegments";
    MsgType[MsgType["LoadBalanceSegments"] = 255] = "LoadBalanceSegments";
    MsgType[MsgType["DescribeSegments"] = 256] = "DescribeSegments";
    /* DEFINITION REQUESTS: INDEX */
    MsgType[MsgType["CreateIndex"] = 300] = "CreateIndex";
    MsgType[MsgType["DescribeIndex"] = 301] = "DescribeIndex";
    MsgType[MsgType["DropIndex"] = 302] = "DropIndex";
    /* MANIPULATION REQUESTS */
    MsgType[MsgType["Insert"] = 400] = "Insert";
    MsgType[MsgType["Delete"] = 401] = "Delete";
    MsgType[MsgType["Flush"] = 402] = "Flush";
    MsgType[MsgType["ResendSegmentStats"] = 403] = "ResendSegmentStats";
    /* QUERY */
    MsgType[MsgType["Search"] = 500] = "Search";
    MsgType[MsgType["SearchResult"] = 501] = "SearchResult";
    MsgType[MsgType["GetIndexState"] = 502] = "GetIndexState";
    MsgType[MsgType["GetIndexBuildProgress"] = 503] = "GetIndexBuildProgress";
    MsgType[MsgType["GetCollectionStatistics"] = 504] = "GetCollectionStatistics";
    MsgType[MsgType["GetPartitionStatistics"] = 505] = "GetPartitionStatistics";
    MsgType[MsgType["Retrieve"] = 506] = "Retrieve";
    MsgType[MsgType["RetrieveResult"] = 507] = "RetrieveResult";
    MsgType[MsgType["WatchDmChannels"] = 508] = "WatchDmChannels";
    MsgType[MsgType["RemoveDmChannels"] = 509] = "RemoveDmChannels";
    MsgType[MsgType["WatchQueryChannels"] = 510] = "WatchQueryChannels";
    MsgType[MsgType["RemoveQueryChannels"] = 511] = "RemoveQueryChannels";
    MsgType[MsgType["SealedSegmentsChangeInfo"] = 512] = "SealedSegmentsChangeInfo";
    MsgType[MsgType["WatchDeltaChannels"] = 513] = "WatchDeltaChannels";
    MsgType[MsgType["GetShardLeaders"] = 514] = "GetShardLeaders";
    MsgType[MsgType["GetReplicas"] = 515] = "GetReplicas";
    MsgType[MsgType["UnsubDmChannel"] = 516] = "UnsubDmChannel";
    MsgType[MsgType["GetDistribution"] = 517] = "GetDistribution";
    MsgType[MsgType["SyncDistribution"] = 518] = "SyncDistribution";
    /* DATA SERVICE */
    MsgType[MsgType["SegmentInfo"] = 600] = "SegmentInfo";
    MsgType[MsgType["SystemInfo"] = 601] = "SystemInfo";
    MsgType[MsgType["GetRecoveryInfo"] = 602] = "GetRecoveryInfo";
    MsgType[MsgType["GetSegmentState"] = 603] = "GetSegmentState";
    /* SYSTEM CONTROL */
    MsgType[MsgType["TimeTick"] = 1200] = "TimeTick";
    MsgType[MsgType["QueryNodeStats"] = 1201] = "QueryNodeStats";
    MsgType[MsgType["LoadIndex"] = 1202] = "LoadIndex";
    MsgType[MsgType["RequestID"] = 1203] = "RequestID";
    MsgType[MsgType["RequestTSO"] = 1204] = "RequestTSO";
    MsgType[MsgType["AllocateSegment"] = 1205] = "AllocateSegment";
    MsgType[MsgType["SegmentStatistics"] = 1206] = "SegmentStatistics";
    MsgType[MsgType["SegmentFlushDone"] = 1207] = "SegmentFlushDone";
    MsgType[MsgType["DataNodeTt"] = 1208] = "DataNodeTt";
    /* Credential */
    MsgType[MsgType["CreateCredential"] = 1500] = "CreateCredential";
    MsgType[MsgType["GetCredential"] = 1501] = "GetCredential";
    MsgType[MsgType["DeleteCredential"] = 1502] = "DeleteCredential";
    MsgType[MsgType["UpdateCredential"] = 1503] = "UpdateCredential";
    MsgType[MsgType["ListCredUsernames"] = 1504] = "ListCredUsernames";
    /* RBAC */
    MsgType[MsgType["CreateRole"] = 1600] = "CreateRole";
    MsgType[MsgType["DropRole"] = 1601] = "DropRole";
    MsgType[MsgType["OperateUserRole"] = 1602] = "OperateUserRole";
    MsgType[MsgType["SelectRole"] = 1603] = "SelectRole";
    MsgType[MsgType["SelectUser"] = 1604] = "SelectUser";
    MsgType[MsgType["SelectResource"] = 1605] = "SelectResource";
    MsgType[MsgType["OperatePrivilege"] = 1606] = "OperatePrivilege";
    MsgType[MsgType["SelectGrant"] = 1607] = "SelectGrant";
    MsgType[MsgType["RefreshPolicyInfoCache"] = 1608] = "RefreshPolicyInfoCache";
    MsgType[MsgType["ListPolicy"] = 1609] = "ListPolicy";
})(MsgType = exports.MsgType || (exports.MsgType = {}));
/**
 * @brief Field data type
 */
var DataType;
(function (DataType) {
    DataType[DataType["None"] = 0] = "None";
    DataType[DataType["Bool"] = 1] = "Bool";
    DataType[DataType["Int8"] = 2] = "Int8";
    DataType[DataType["Int16"] = 3] = "Int16";
    DataType[DataType["Int32"] = 4] = "Int32";
    DataType[DataType["Int64"] = 5] = "Int64";
    DataType[DataType["Float"] = 10] = "Float";
    DataType[DataType["Double"] = 11] = "Double";
    DataType[DataType["String"] = 20] = "String";
    DataType[DataType["VarChar"] = 21] = "VarChar";
    DataType[DataType["JSON"] = 23] = "JSON";
    DataType[DataType["BinaryVector"] = 100] = "BinaryVector";
    DataType[DataType["FloatVector"] = 101] = "FloatVector";
})(DataType = exports.DataType || (exports.DataType = {}));
exports.DataTypeMap = {
    None: 0,
    Bool: 1,
    Int8: 2,
    Int16: 3,
    Int32: 4,
    Int64: 5,
    Float: 10,
    Double: 11,
    String: 20,
    VarChar: 21,
    JSON: 23,
    BinaryVector: 100,
    FloatVector: 101,
};
var OperateUserRoleType;
(function (OperateUserRoleType) {
    OperateUserRoleType[OperateUserRoleType["AddUserToRole"] = 0] = "AddUserToRole";
    OperateUserRoleType[OperateUserRoleType["RemoveUserFromRole"] = 1] = "RemoveUserFromRole";
})(OperateUserRoleType = exports.OperateUserRoleType || (exports.OperateUserRoleType = {}));
var OperatePrivilegeType;
(function (OperatePrivilegeType) {
    OperatePrivilegeType[OperatePrivilegeType["Grant"] = 0] = "Grant";
    OperatePrivilegeType[OperatePrivilegeType["Revoke"] = 1] = "Revoke";
})(OperatePrivilegeType = exports.OperatePrivilegeType || (exports.OperatePrivilegeType = {}));
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["PUBLIC"] = "public";
})(Roles = exports.Roles || (exports.Roles = {}));
var RbacObjects;
(function (RbacObjects) {
    RbacObjects["Collection"] = "Collection";
    RbacObjects["Global"] = "Global";
    RbacObjects["User"] = "User";
})(RbacObjects = exports.RbacObjects || (exports.RbacObjects = {}));
var CollectionPrivileges;
(function (CollectionPrivileges) {
    CollectionPrivileges["CreateIndex"] = "CreateIndex";
    CollectionPrivileges["DropIndex"] = "DropIndex";
    CollectionPrivileges["IndexDetail"] = "IndexDetail";
    CollectionPrivileges["Load"] = "Load";
    CollectionPrivileges["Release"] = "Release";
    CollectionPrivileges["Insert"] = "Insert";
    CollectionPrivileges["Delete"] = "Delete";
    CollectionPrivileges["Search"] = "Search";
    CollectionPrivileges["Flush"] = "Flush";
    CollectionPrivileges["Query"] = "Query";
    CollectionPrivileges["GetStatistics"] = "GetStatistics";
    CollectionPrivileges["Compaction"] = "Compaction";
    CollectionPrivileges["Alias"] = "Alias";
    CollectionPrivileges["Import"] = "Import";
    CollectionPrivileges["LoadBalance"] = "LoadBalance";
})(CollectionPrivileges = exports.CollectionPrivileges || (exports.CollectionPrivileges = {}));
var GlobalPrivileges;
(function (GlobalPrivileges) {
    GlobalPrivileges["All"] = "*";
    GlobalPrivileges["CreateCollection"] = "CreateCollection";
    GlobalPrivileges["DropCollection"] = "DropCollection";
    GlobalPrivileges["DescribeCollection"] = "DescribeCollection";
    GlobalPrivileges["ShowCollections"] = "ShowCollections";
    GlobalPrivileges["CreateOwnership"] = "CreateOwnership";
    GlobalPrivileges["DropOwnership"] = "DropOwnership";
    GlobalPrivileges["SelectOwnership"] = "SelectOwnership";
    GlobalPrivileges["ManageOwnership"] = "ManageOwnership";
})(GlobalPrivileges = exports.GlobalPrivileges || (exports.GlobalPrivileges = {}));
var UserPrivileges;
(function (UserPrivileges) {
    UserPrivileges["UpdateUser"] = "UpdateUser";
    UserPrivileges["SelectUser"] = "SelectUser";
})(UserPrivileges = exports.UserPrivileges || (exports.UserPrivileges = {}));
exports.Privileges = Object.assign(Object.assign(Object.assign({}, CollectionPrivileges), UserPrivileges), GlobalPrivileges);
var LoadState;
(function (LoadState) {
    LoadState["LoadStateNotExist"] = "LoadStateNotExist";
    LoadState["LoadStateNotLoad"] = "LoadStateNotLoad";
    LoadState["LoadStateLoading"] = "LoadStateLoading";
    LoadState["LoadStateLoaded"] = "LoadStateLoaded";
})(LoadState = exports.LoadState || (exports.LoadState = {}));
//# sourceMappingURL=Milvus.js.map