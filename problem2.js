// iterate and find unique email, phone, card
var transactions = [
  {id: 1, email:'e1', phone:'p1', card:'c1'},
  {id: 2, email:'e2', phone:'p2', card:'c2'},
  {id: 3, email:'e1', phone:'p3', card:'c3'},
  {id: 4, email:'e4', phone:'p4', card:'c4'},
]
var customer = {
  {customer:1, transactions:[], phones:[], emails:[], cards:[]}
}
module.exports = {
  generateCustomerReport: function(transactions) {
    var uniqemail = [];
    var uniqphone = [];
    var uniqcard = [];
    var customers = [];
    transactions.forEach(function (t) {
      var indexemail = uniqemail.findIndex(i => t.email === i);
      if(indexemail === -1) {
        uniqemail.push({email: t.email, id: [t.id]});
      } else {
        uniqemail[indexemail].id.push(t.id);
      }
      var indexphone = uniqephone.findIndex(i => t.phone === i);
      if(indexphone === -1) {
        uniqephone.push({phone: t.phone, id: [t.id]});
      } else {
        uniqephone[indexephone].id.push(t.id);
      }
      var indexcard = uniqecard.findIndex(i => t.card === i);
      if(indexecard === -1) {
        uniqecard.push({email: t.card, id: [t.id]});
      } else {
        uniqecard[indexecard].id.push(t.id);
      }
    });
    var uniqcustomer = Math.min(uniqemail.length, uniqcard.length, uniqphone.length);
    for(var i = 1; i <= uniqcustomer; i++) {
      var trans = new Set();
      if(uniqemail[i].id.length > 1) {
        uniqemail[i].id.forEach(i => trans.add(i))
      }
      if(uniqphone[i].id.length > 1) {
        uniqphone[i].id.forEach(i => trans.add(i))
      }
      if(uniqcard[i].id.length > 1) {
        uniqcard[i].id.forEach(i => trans.add(i))
      }
      tran.forEach()
      customers.push({customer:i, transactions: trans, })
    }
  },
  addNewTransaction: function(transaction) {

  },
}
