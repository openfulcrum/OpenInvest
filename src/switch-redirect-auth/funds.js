import times from 'lodash/times';
import moment from 'node-moment';

const fundNames = [
  'Asian Income Trust',
  'Distribution Trust',
  'Dynamic Bond Trust',
  'Ethical Trust',
  'European Index Trust',
  'European Trust',
  'Fixed Interest Trust',
  'Future World Equity Factors Index Fund',
  'Global 100 Index Trust',
  'Global Emerging Markets Index Fund',
  'Global Equity Index Fund',
  'Global Health/Pharm Index Trust',
  'Global Technology Index Trust',
  'Growth Trust',
  'High Income Trust',
  'International Index Trust',
  'Japan Index Trust',
  'Managed Monthly Income Trust',
  'Mixed Investment 0-20% Fund',
  'Mixed Investment 0-35% Fund',
  'Mixed Investment 20-60% Fund',
  'Mixed Investment 40-85% Fund',
  'Mixed Investment Income 0-35% Fund',
  'Mixed Investment Income 20-60% Fund',
  'Multi Manager Balanced Trust',
  'Multi Manager Growth Trust',
  'Multi Manager Income Trust',
  'Multi-Index 3 Fund',
  'Multi-Index 4 Fund',
  'Multi-Index 5 Fund',
  'Multi-Index 6 Fund',
  'Multi-Index 7 Fund',
  'Multi-Index Income 4 Fund',
  'Multi-Index Income 5 Fund',
  'Multi-Index Income 6 Fund',
  'Pacific Index Trust',
  'Sterling Income Fund',
  'UK 100 Index Trust',
  'UK Alpha Trust',
  'UK Equity Income Fund',
  'UK Index Trust',
  'UK Property Fund',
  'UK Smaller Companies Trust',
  'UK Special Situations Trust',
  'US Index Trust',
  'Worldwide Trust'
];

const managementCompany = [
  'Aberdeen Life',
  'Henderson',
  'Investec',
  'JPM',
  'Legal & General',
  'Man GLC',
  'Newton',
  'Schroder'
  // null
];

const managementTypes = ['Active', 'Passive', 'Un-managed'];

const fundTypes = [
  'Cash funds',
  'Equity funds',
  'Fixed interest funds',
  'Multi asset funds',
  'Property funds',
  'Target date funds'
  // null
];

const regions = [
  'Africa',
  'America',
  'Antarctica',
  'Europe',
  'Pacific',
  'Earth'
  // null
];

const lifestyleSwitchingFrequecies = [
  'MONTHLY',
  'QUARTERLY',
  'SIX_MONTHLY',
  'ANNUALLY'
];

const benchmarkPerformanceNames = [
  'ABI Sector',
  'WBC Sector',
  'WBO Sector',
  'WBA Sector'
];

const fundManagementCharge = [1, 2, 3]; // null

const getRandomPriceByRange = (min, max) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2));

const getRandomRegions = n =>
  times(n, () => regions[Math.floor(Math.random() * regions.length)]).filter(
    (e, i, s) => s.indexOf(e) === i
  );

const getRandomRegion = n => {
  const randomRegions = getRandomRegions(n);
  return randomRegions;
  // return randomRegions.some(r => r === null) ? [null] : randomRegions;
};

// prettier-ignore
const getWorkplacePensionFund = i => ({
  fundCode: `fundcode-${i}`,
  mexcode: `mexcode-${i}`,
  sedol: `sedol-${i}`,
  isin: `isin-${i}`,
  coreFund: i !== 0 && i % 12 === 0, // every 12th in core
  softClosed: i !== 0 && i % 10 === 0, // every 10th in closed
  fundFactSheetUrl: [14,15].includes(i) ? null : 'https://www.fundslibrary.co.uk/FundsLibrary.DataRetrieval/Documents.aspx?type=custom_field.www_landg_co_uk.factsheet_CPSWork&user=flweb&id=a09cdfc0-317c-49cf-9fbd-e303a362b716&track1=68896048-52f1-40eb-a86c-3e1d119e18a3&track2=LegalAndGeneralWorkplaceEmployees',
  name: `${fundNames[Math.floor(Math.random() * fundNames.length)]} ${i}`,
  managementCharge: fundManagementCharge[Math.floor(Math.random() * fundManagementCharge.length)],
  managementType: managementTypes[Math.floor(Math.random() * managementTypes.length)],
  unitPrice: Math.floor((Math.random() * 15) + 1),
  managementCompany: managementCompany[Math.floor(Math.random() * managementCompany.length)],
  region: getRandomRegion(Math.floor((Math.random() * 2) + 1)),
  fundType: fundTypes[Math.floor(Math.random() * regions.length)],
  fundAim: 'To provide long-term investment growth through exposure to a diversified range of asset classes.',
  fundPerformanceData: [50, 13,15].includes(i) ? [] : times((261 * 6), i => ({
    date: moment().subtract(i, 'days'), 
    price: getRandomPriceByRange(9500 - i, 10000 - i )})),
  benchmarkPerformanceData: [50, 13, 15].includes(i) ? [] : times((261 * 6), i =>  ({
    date: moment().subtract(i, 'days'), 
    price: getRandomPriceByRange(8500 - i, 9000 - i )})),
  benchmarkPerformanceName: benchmarkPerformanceNames[Math.floor(Math.random() * benchmarkPerformanceNames.length)], 
  lifestyleSwitchingFrequency: lifestyleSwitchingFrequecies[Math.floor(Math.random() * lifestyleSwitchingFrequecies.length)],
  lifestyleProfileData: [
    {
      yearFromRetirement: 11, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 100.00
      }]
    },
    {
      yearFromRetirement: 10, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 80
      },
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 20
      }]
    },
    {
      yearFromRetirement: 9, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 80
      },
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 10
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 10
      }]
    },
    {
      yearFromRetirement: 8, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 60
      },
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 30
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 10
      }]
    },
    {
      yearFromRetirement: 7, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 50
      },
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 30
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 20
      }]
    },
    {
      yearFromRetirement: 6, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 30
      },
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 40
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 30
      }]
    },
    {
      yearFromRetirement: 5, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 20
      },
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 40
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 40
      }]
    },
    {
      yearFromRetirement: 4, 
      funds: [{
        name: 'Fund A',
        fundCode: 'fund-a',
        percentage: 10
      },
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 40
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 50
      }]
    },
    {
      yearFromRetirement: 3, 
      funds: [
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 50
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 50
      }]
    },
    {
      yearFromRetirement: 2, 
      funds: [
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 30
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 70
      }]
    },
    {
      yearFromRetirement: 1, 
      funds: [
      {
        name: 'Fund B',
        fundCode: 'fund-b',
        percentage: 10
      },
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 90
      }]
    },
    {
      yearFromRetirement: 0, 
      funds: [
      {
        name: 'Fund C',
        fundCode: 'fund-c',
        percentage: 70
      },
      {
        name: 'Fund Z',
        fundCode: 'fund-z',
        percentage: 30
      }]
    }
  ]
});

export const workplacePensionFunds = times(200, i =>
  getWorkplacePensionFund(i)
);

// HACK make last fund a lifestyle
workplacePensionFunds[96].fundType = 'Lifestyle profiles';
workplacePensionFunds[97].fundType = 'Lifestyle profiles';
workplacePensionFunds[98].fundType = 'Lifestyle profiles';
workplacePensionFunds[99].fundType = 'Lifestyle profiles';
workplacePensionFunds[96].name = 'World Equity Lifestyle Profile';
workplacePensionFunds[97].name = 'Asian Lifestyle Profile';
workplacePensionFunds[98].name = 'Tech Lifestyle Profile';
workplacePensionFunds[99].name = 'Lycanthropy Lifestyle Profile';
workplacePensionFunds[96].unitPrice = null;
workplacePensionFunds[97].unitPrice = null;
workplacePensionFunds[98].unitPrice = null;
workplacePensionFunds[99].unitPrice = null;

// HACK add a suspended fund code
workplacePensionFunds[34].fundCode = 'BA83';
workplacePensionFunds[34].name = 'Asian Suspended fund';

times(10, i => (workplacePensionFunds[i].fundType = 'Equity funds'));

export const investmentStrategySingle = workplacePensionFunds
  .slice(0, 1)
  .map(({ name, fundCode }) => ({
    fundCode,
    name,
    contributionPercentage: 100
  }));

export const investmentStrategy = workplacePensionFunds
  .slice(0, 2)
  .map(({ name, fundCode }) => ({
    fundCode,
    name,
    contributionPercentage: 50
  }));

export const investmentStrategyLifestyle = workplacePensionFunds
  .slice(-1)
  .map(({ name, fundCode }) => ({
    fundCode,
    name,
    contributionPercentage: 100
  }));

export const suspendedFunds = workplacePensionFunds
  .slice(-1)
  .map(({ name, fundCode }) => ({
    fundCode: 'BA83',
    name: 'Asian Suspended fund',
    contributionPercentage: 100
  }));

export const suspendedFund = {
  fundCode: 'BA83',
  fundTypeLifestyle: false,
  name: 'Asian Suspended fund'
};

export const allSuspendedFunds = [
  {
    fundCode: 'BA83',
    contributionPercentage: 50,
    name: 'Asian Suspended fund'
  },
  {
    fundCode: 'BP43',
    contributionPercentage: 50,
    name: 'something else'
  }
];

export const singleFutureSuspended = [
  {
    fundCode: 'BA83',
    contributionPercentage: 50,
    name: 'Asian Suspended fund'
  },
  {
    fundCode: 'fundcode-43',
    contributionPercentage: 50,
    name: 'not suspended'
  }
];
