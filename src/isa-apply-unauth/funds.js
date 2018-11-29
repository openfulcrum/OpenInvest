import times from 'lodash/times';

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

const assetType = ['Equity', 'Multi Asset', 'Fixed Income', 'Property'];

const managementStyle = ['Actively Managed', 'Index Tracker'];

const regions = ['Africa', 'America', 'Antarctica', 'Europe', 'Pacific'];

const unitType = ['Income', 'Growth'];

// prettier-ignore
const getInvestmentMockFund = i => ({
  isin: `isin-${i}`,
  name: ` ${fundNames[Math.floor(Math.random() * fundNames.length)]} ${i}`,
  ongoingCharge: Number.parseFloat(Math.floor((Math.random() * 3) + 1)).toPrecision(2),
  underlyingYield: Math.floor((Math.random() * 100000) + 1000),
  fundSize: Math.floor((Math.random() * 9999) + 1000),
  numberOfHoldings: Math.floor((Math.random() * 0) + 100),
  aim: `The objective of this fund is to provide
  growth by tracking the performance of
  the FTSE World Europe ex UK Index.`,
  fundFactsheetURL:
    'http://www.fundslibrary.co.uk/fundslibrary.dataretrieval/documents.aspx?user=landgdoc&type=custom_field.www_landg_co_uk.factsheet_UTInt&sedol=B032BL0',
  kiidURL:
    'http://www.fundweblibrary.com/documents/LGIM/REG_DOC/ISIN-GB0033860080/KIID/en/GB/KIID-ISIN-GB0033860080-en-GB.PDF',
  assetManager: `The objective of this fund is to provide
  growth by tracking the performance of
  the FTSE World Europe ex UK Index.`,
  assetType: assetType[Math.floor(Math.random() * assetType.length)],
  trackTheMarket: false,
  managementStyle: managementStyle[Math.floor(Math.random() * managementStyle.length)],
  region: regions[Math.floor(Math.random() * regions.length)],
  unitType: unitType[Math.floor(Math.random() * unitType.length)]
});

export const pensionFunds = times(200, i => getInvestmentMockFund(i));

// WDFU journey hack.... hey wait this whole file is just a hack. hmmmm...
pensionFunds[10].isin = 'WDFU-income';
pensionFunds[1].isin = 'WDFU-growth';
pensionFunds[10].unitType = 'Income';
pensionFunds[1].unitType = 'Growth';

// WW journey HACK
pensionFunds[69].isin = 'GB00B4PM4C84';

times(9, i => {
  pensionFunds[i].trackTheMarket = true;
  pensionFunds[i].unitType = 'Growth';
});
