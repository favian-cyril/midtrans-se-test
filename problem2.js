// iterate and find unique email, phone, card
var transactions = [
  {id: 1, email:'e1', phone:'p1', card:'c1'},
  {id: 2, email:'e2', phone:'p2', card:'c2'},
  {id: 3, email:'e1', phone:'p3', card:'c3'},
  {id: 4, email:'e4', phone:'p4', card:'c4'},
]
// customer = {
//   {customer:1, transactions:[], phones:[], emails:[], cards:[]}
// }
module.exports = {
  generateCustomerReport: function(transactions) {
    var uniqemail = [];
    var uniqphone = [];
    var uniqcard = [];
    var customers = [];
    transactions.forEach(function (t) {
      var indexemail = uniqemail.findIndex(i => {t.email === i.email});
      console.log(indexemail);
      if(indexemail === -1) {
        uniqemail.push({email: t.email, id: [t.id]});
      } else {
        uniqemail[indexemail].id.push(t.id);
      }
      var indexphone = uniqphone.findIndex(i => t.phone === i);
      if(indexphone === -1) {
        uniqphone.push({phone: t.phone, id: [t.id]});
      } else {
        uniqephone[indexephone].id.push(t.id);
      }
      var indexcard = uniqcard.findIndex(i => t.card === i);
      if(indexcard === -1) {
        uniqcard.push({email: t.card, id: [t.id]});
      } else {
        uniqecard[indexecard].id.push(t.id);
      }
    });
    var uniqcustomer = Math.min(uniqemail.length, uniqcard.length, uniqphone.length);
    for(var i = 0; i <= uniqcustomer; i++) {
      var trans = new Set();
      uniqemail[i].id.forEach(i => trans.add(i))
      uniqphone[i].id.forEach(i => trans.add(i))
      uniqcard[i].id.forEach(i => trans.add(i))
      var emails = [];
      var phones = [];
      var cards = [];
      trans.forEach(function(i) {
        emails.push(transactions[i].email);
        phones.push(transactions[i].phones);
        cards.push(transactions[i].cards);
      })
      customers.push({customer:i+1, transactions: trans, emails: emails, phone: phones, cards: cards});
    }
    return customers
  },
  addNewTransaction: function(transaction) {

  },
}
console.log(module.exports.generateCustomerReport(transactions));
