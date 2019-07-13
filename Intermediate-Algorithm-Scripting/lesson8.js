function pairElement(str) {

    var pairs = {A: 'T', T: 'A', C: 'G', G: 'C'};
    
      return str.split('').map(function(base){
        return [base, pairs[base]]
      });
    }
    
    pairElement("GCG");
    