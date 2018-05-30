const figlet = require ('figlet');
function Print () {
  var text = figlet.textSync ('Frontend Bootcamp', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });
  return text;
}

module.exports = {Print: Print};
