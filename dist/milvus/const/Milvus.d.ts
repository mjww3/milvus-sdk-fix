export declare enum ConsistencyLevelEnum {
    Strong = 0,
    Session = 1,
    Bounded = 2,
    Eventually = 3,
    Customized = 4
}
export declare enum SegmentState {
    SegmentStateNone = 0,
    NotExist = 1,
    Growing = 2,
    Sealed = 3,
    Flushed = "Flushed",
    Flushing = "Flushing"
}
export declare enum CompactionState {
    UndefiedState = 0,
    Executing = 1,
    Completed = 2
}
export declare enum ImportState {
    ImportPending = "ImportPending",
    ImportFailed = "ImportFailed",
    ImportStarted = "ImportStarted",
    ImportPersisted = "ImportPersisted",
    ImportCompleted = "ImportCompleted",
    ImportFailedAndCleaned = "ImportFailedAndCleaned"
}
export declare enum ObjectType {
    Collection = 0,
    Global = 1,
    User = 2
}
export declare enum ObjectPrivilege {
    PrivilegeAll = 0,
    PrivilegeCreateCollection = 1,
    PrivilegeDropCollection = 2,
    PrivilegeDescribeCollection = 3,
    PrivilegeShowCollections = 4,
    PrivilegeLoad = 5,
    PrivilegeRelease = 6,
    PrivilegeCompaction = 7,
    PrivilegeInsert = 8,
    PrivilegeDelete = 9,
    PrivilegeGetStatistics = 10,
    PrivilegeCreateIndex = 11,
    PrivilegeIndexDetail = 12,
    PrivilegeDropIndex = 13,
    PrivilegeSearch = 14,
    PrivilegeFlush = 15,
    PrivilegeQuery = 16,
    PrivilegeLoadBalance = 17,
    PrivilegeImport = 18,
    PrivilegeCreateOwnership = 19,
    PrivilegeUpdateUser = 20,
    PrivilegeDropOwnership = 21,
    PrivilegeSelectOwnership = 22,
    PrivilegeManageOwnership = 23,
    PrivilegeSelectUser = 24
}
export declare enum StateCode {
    Initializing = 0,
    Healthy = 1,
    Abnormal = 2,
    StandBy = 3
}
export declare enum MetricType {
    L2 = "L2",
    IP = "IP",
    HAMMING = "HAMMING",
    JACCARD = "JACCARD",
    TANIMOTO = "TANIMOTO",
    SUBSTRUCTURE = "SUBSTRUCTURE",
    SUPERSTRUCTURE = "SUPERSTRUCTURE"
}
export declare enum IndexType {
    FLAT = "FLAT",
    IVF_FLAT = "IVF_FLAT",
    IVF_SQ8 = "IVF_SQ8",
    IVF_PQ = "IVF_PQ",
    HNSW = "HNSW",
    ANNOY = "ANNOY",
    BIN_FLAT = "BIN_FLAT",
    BIN_IVF_FLAT = "BIN_IVF_FLAT",
    DISKANN = "DISKANN",
    AUTOINDEX = "AUTOINDEX"
}
export declare enum MsgType {
    Undefined = 0,
    CreateCollection = 100,
    DropCollection = 101,
    HasCollection = 102,
    DescribeCollection = 103,
    ShowCollections = 104,
    GetSystemConfigs = 105,
    LoadCollection = 106,
    ReleaseCollection = 107,
    CreateAlias = 108,
    DropAlias = 109,
    AlterAlias = 110,
    AlterCollection = 111,
    CreatePartition = 200,
    DropPartition = 201,
    HasPartition = 202,
    DescribePartition = 203,
    ShowPartitions = 204,
    LoadPartitions = 205,
    ReleasePartitions = 206,
    ShowSegments = 250,
    DescribeSegment = 251,
    LoadSegments = 252,
    ReleaseSegments = 253,
    HandoffSegments = 254,
    LoadBalanceSegments = 255,
    DescribeSegments = 256,
    CreateIndex = 300,
    DescribeIndex = 301,
    DropIndex = 302,
    Insert = 400,
    Delete = 401,
    Flush = 402,
    ResendSegmentStats = 403,
    Search = 500,
    SearchResult = 501,
    GetIndexState = 502,
    GetIndexBuildProgress = 503,
    GetCollectionStatistics = 504,
    GetPartitionStatistics = 505,
    Retrieve = 506,
    RetrieveResult = 507,
    WatchDmChannels = 508,
    RemoveDmChannels = 509,
    WatchQueryChannels = 510,
    RemoveQueryChannels = 511,
    SealedSegmentsChangeInfo = 512,
    WatchDeltaChannels = 513,
    GetShardLeaders = 514,
    GetReplicas = 515,
    UnsubDmChannel = 516,
    GetDistribution = 517,
    SyncDistribution = 518,
    SegmentInfo = 600,
    SystemInfo = 601,
    GetRecoveryInfo = 602,
    GetSegmentState = 603,
    TimeTick = 1200,
    QueryNodeStats = 1201,
    LoadIndex = 1202,
    RequestID = 1203,
    RequestTSO = 1204,
    AllocateSegment = 1205,
    SegmentStatistics = 1206,
    SegmentFlushDone = 1207,
    DataNodeTt = 1208,
    CreateCredential = 1500,
    GetCredential = 1501,
    DeleteCredential = 1502,
    UpdateCredential = 1503,
    ListCredUsernames = 1504,
    CreateRole = 1600,
    DropRole = 1601,
    OperateUserRole = 1602,
    SelectRole = 1603,
    SelectUser = 1604,
    SelectResource = 1605,
    OperatePrivilege = 1606,
    SelectGrant = 1607,
    RefreshPolicyInfoCache = 1608,
    ListPolicy = 1609
}
/**
 * @brief Field data type
 */
export declare enum DataType {
    None = 0,
    Bool = 1,
    Int8 = 2,
    Int16 = 3,
    Int32 = 4,
    Int64 = 5,
    Float = 10,
    Double = 11,
    String = 20,
    VarChar = 21,
    JSON = 23,
    BinaryVector = 100,
    FloatVector = 101
}
export declare const DataTypeMap: {
    [key in keyof typeof DataType]: number;
};
export declare enum OperateUserRoleType {
    AddUserToRole = 0,
    RemoveUserFromRole = 1
}
export declare enum OperatePrivilegeType {
    Grant = 0,
    Revoke = 1
}
export declare enum Roles {
    ADMIN = "admin",
    PUBLIC = "public"
}
export declare enum RbacObjects {
    Collection = "Collection",
    Global = "Global",
    User = "User"
}
export declare enum CollectionPrivileges {
    CreateIndex = "CreateIndex",
    DropIndex = "DropIndex",
    IndexDetail = "IndexDetail",
    Load = "Load",
    Release = "Release",
    Insert = "Insert",
    Delete = "Delete",
    Search = "Search",
    Flush = "Flush",
    Query = "Query",
    GetStatistics = "GetStatistics",
    Compaction = "Compaction",
    Alias = "Alias",
    Import = "Import",
    LoadBalance = "LoadBalance"
}
export declare enum GlobalPrivileges {
    All = "*",
    CreateCollection = "CreateCollection",
    DropCollection = "DropCollection",
    DescribeCollection = "DescribeCollection",
    ShowCollections = "ShowCollections",
    CreateOwnership = "CreateOwnership",
    DropOwnership = "DropOwnership",
    SelectOwnership = "SelectOwnership",
    ManageOwnership = "ManageOwnership"
}
export declare enum UserPrivileges {
    UpdateUser = "UpdateUser",
    SelectUser = "SelectUser"
}
export declare const Privileges: {
    All: GlobalPrivileges.All;
    CreateCollection: GlobalPrivileges.CreateCollection;
    DropCollection: GlobalPrivileges.DropCollection;
    DescribeCollection: GlobalPrivileges.DescribeCollection;
    ShowCollections: GlobalPrivileges.ShowCollections;
    CreateOwnership: GlobalPrivileges.CreateOwnership;
    DropOwnership: GlobalPrivileges.DropOwnership;
    SelectOwnership: GlobalPrivileges.SelectOwnership;
    ManageOwnership: GlobalPrivileges.ManageOwnership;
    UpdateUser: UserPrivileges.UpdateUser;
    SelectUser: UserPrivileges.SelectUser;
    CreateIndex: CollectionPrivileges.CreateIndex;
    DropIndex: CollectionPrivileges.DropIndex;
    IndexDetail: CollectionPrivileges.IndexDetail;
    Load: CollectionPrivileges.Load;
    Release: CollectionPrivileges.Release;
    Insert: CollectionPrivileges.Insert;
    Delete: CollectionPrivileges.Delete;
    Search: CollectionPrivileges.Search;
    Flush: CollectionPrivileges.Flush;
    Query: CollectionPrivileges.Query;
    GetStatistics: CollectionPrivileges.GetStatistics;
    Compaction: CollectionPrivileges.Compaction;
    Alias: CollectionPrivileges.Alias;
    Import: CollectionPrivileges.Import;
    LoadBalance: CollectionPrivileges.LoadBalance;
};
export declare enum LoadState {
    LoadStateNotExist = "LoadStateNotExist",
    LoadStateNotLoad = "LoadStateNotLoad",
    LoadStateLoading = "LoadStateLoading",
    LoadStateLoaded = "LoadStateLoaded"
}
