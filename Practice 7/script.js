var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

var employersNames = employers.filter(e => e.length > 0 && e.length != '');

employersNames = employersNames.map(e => e.toLocaleLowerCase().trim());

var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    var everyCash = Array.prototype.slice.call(arguments);
    return everyCash[1].reduce((previousVal, currentVal) => previousVal + currentVal, own)
}

var money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director="Victor", cash, emp) {
    var sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors:`);
    console.log.apply(null, sumSponsors);
    let [first] = sponsors.eu;
    console.log(`Note. Be careful with ${first}. It's a huge risk.`);
}   
makeBusiness.apply(null, ['Sam', null, money, employersNames]);