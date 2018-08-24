//split the string
//normalize string
//compare similarities in array, remove common items (nomor and jalan)
// return similarities in percentage
const jalanSimilar = ['jalan', 'jln', 'jl'];
const nomorSimilar = ['no', 'nomor', 'no.']
exports.checkSimilarityAddress = function(address1, address2) {
  var lower1 = address1.toLowerCase();
  var lower2 = address2.toLowerCase();
  var items1 = lower1.split(' ');
  var items2 = lower2.split(' ');
  var similar = [];
  jalanSimilar.forEach(function (j) {
    var jalan1 = items1.findIndex(i => i === j);
    if(jalan1 > -1) {
      items1.splice(jalan1, 1);
    }
    var jalan2 = items2.findIndex(i => i === j);
    if(jalan2 > -1) {
      items2.splice(jalan2, 1);
    }
  })
  nomorSimilar.forEach(function (n) {
    var no1 = items1.findIndex(i => i === n);
    if(no1 > -1) {
      items1.splice(no1, 1);
    }
    var no2 = items2.findIndex(i => i === n);
    if(no2 > -1) {
      items2.splice(no2, 1);
    }
  })
  items1.forEach(function (i) {
    var found = items2.find(function (e) {
      return e.indexOf(i) > -1;
    });
    if(found) {
      similar.push(found);
    };
  });
  if(items1.length > items2.length) {
    var longer = items1;
  } else {
    var longer = items2;
  }
  return similar.length / longer.length
}
