/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = 1;
    if(input.match(/\//g) != null && input.match(/\//g).length > 1) 
      return "invalid number"
    if(/[a-z]/i.exec(input) == null)
      return "invalid number"
    if(/[a-z]/i.exec(input).index != 0) {
      try {
        result = eval(input.slice(0,/[a-z]/i.exec(input).index))
      } catch (e) {
        return "invalid number"
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var acceptedValues = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var result = input.slice(/[a-z]/i.exec(input).index);
    if(acceptedValues.includes(result))
      return result
    else
      return "invalid unit"
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    if(input.indexOf(initUnit.toLowerCase()) >= 0)
      return expect[input.indexOf(initUnit.toLowerCase())]
    return "invalid unit";
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['Gallons','Liters','Miles','Kilometers','Pounds','Kilograms'];
    if(input.indexOf(unit.toLowerCase()) >= 0)
      return expect[input.indexOf(unit.toLowerCase())]
    return "invalid unit";
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if(initUnit.toLowerCase() == "gal")
      return galToL*initNum
    if(initUnit.toLowerCase() == "l")
      return initNum/galToL
    if(initUnit.toLowerCase() == "mi")
      return miToKm*initNum
    if(initUnit.toLowerCase() == "km")
      return initNum/miToKm
    if(initUnit.toLowerCase() == "lbs")
      return lbsToKg*initNum
    if(initUnit.toLowerCase() == "kg")
      return initNum/lbsToKg
    return null;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit)
    
    return result;
  };
  
}

module.exports = ConvertHandler;
