var alwaysValidate = function() { return true; }

var genesis = alwaysValidate

function doMigration(params) {
  var type = params.type;
  var DNAHash = params.DNAHash;
  var key = App.Key.Hash;
  var data = params.data || "";

  var message = "Migration: '" + type + "' key '" + key + "' for DNA '" + DNAHash + "' with data '" + data + "'";
  console.log(message)

  return migrate(type, DNAHash, key, data);
}

function getMigrateEntry(params) {
  return get(params.hash, {GetMask: HC.GetMask.All})
}
