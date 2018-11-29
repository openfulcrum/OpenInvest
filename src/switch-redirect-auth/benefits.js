import moment from 'node-moment';
import { workplacePensionFunds } from './funds';

const suspendedFundCodes = ['BA83', 'BL63', 'BL73', 'BP43', 'BP53', 'BS5Y'];

export const getLifeStyleFund = (monetaryValue = 100) =>
  workplacePensionFunds
    .slice(98, 99)
    .map(({ name, fundCode, unitPrice, softClosed }) => ({
      fundCode,
      name,
      unitPrice: null,
      monetaryValue,
      unitsHeld: null,
      fundTypeLifestyle: true,
      softClosed
    }));

export const benefitsAccountLifestyle = [
  {
    concatBenefitSequenceId: 'a',
    holdings: getLifeStyleFund(),
    type: 'REGULAR'
  }
];

export const workplacePensionHoldings = (funds = 3, unitsHeld = 100) =>
  workplacePensionFunds
    .slice(0, funds)
    .map(({ name, fundCode, unitPrice, softClosed }) => ({
      fundCode,
      name,
      unitPrice,
      monetaryValue: unitsHeld * unitPrice,
      unitsHeld,
      unitPriceDate: moment('August 4, 1997'),
      fundTypeLifestyle: false,
      softClosed
    }));

export const benefitsAccountOne = [
  {
    concatBenefitSequenceId: 'a',
    holdings: workplacePensionHoldings(1, 100),
    type: 'REGULAR'
  }
];

export const benefitsAccount = [
  {
    concatBenefitSequenceId: 'a',
    holdings: workplacePensionHoldings(),
    type: 'TRANSFERVALUE'
  },
  {
    concatBenefitSequenceId: 'b',
    holdings: workplacePensionHoldings(),
    type: 'REGULAR'
  },
  {
    concatBenefitSequenceId: 'c',
    holdings: workplacePensionHoldings(),
    type: 'SINGLE'
  }
];

export const benfitsWithSoftclosed = benefitsAccount.map(
  ({
    holdings,
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  }) => ({
    holdings: holdings.concat([
      {
        fundCode: workplacePensionFunds[30].fundCode,
        name: workplacePensionFunds[30].name,
        monetaryValue: '200',
        unitPrice: '2',
        unitsHeld: 100,
        unitPriceDate: '2018-07-20',
        fundTypeLifestyle: false,
        softClosed: workplacePensionFunds[30].softClosed
      }
    ]),
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  })
);

export const benefitsContribution = [
  {
    concatBenefitSequenceId: 'a',
    holdings: workplacePensionHoldings(1, 300),
    type: 'REGULAR'
  },
  {
    concatBenefitSequenceId: 'b',
    holdings: workplacePensionHoldings(2, 200),
    type: 'TRANSFERVALUE'
  },
  {
    concatBenefitSequenceId: 'c',
    holdings: workplacePensionHoldings(),
    type: 'SINGLE'
  }
];

export const benfitsContributionWithSoftclosed = benefitsContribution.map(
  ({
    holdings,
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  }) => ({
    holdings: holdings.concat([
      {
        fundCode: workplacePensionFunds[20].fundCode,
        name: workplacePensionFunds[20].name,
        monetaryValue: '200',
        unitPrice: '2',
        unitsHeld: 100,
        unitPriceDate: '2018-07-20',
        fundTypeLifestyle: false,
        softClosed: workplacePensionFunds[20].softClosed
      }
    ]),
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  })
);

export const benfitsWithSuspended = benefitsAccount.map(
  ({
    holdings,
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  }) => ({
    holdings: holdings.concat([
      {
        fundCode: 'BA83',
        name: 'Asian Suspended fund',
        monetaryValue: '200',
        unitPrice: '2',
        unitsHeld: 100,
        unitPriceDate: '2018-07-20',
        fundTypeLifestyle: false,
        softClosed: false
      }
    ]),
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  })
);

export const benfitsWithSuspendedSingle = benefitsAccount.map(
  ({
    holdings,
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  }) => ({
    holdings: [
      {
        fundCode: 'BA83',
        name: 'Asian Suspended fund',
        monetaryValue: '200',
        unitPrice: '2',
        unitsHeld: 100,
        unitPriceDate: '2018-07-20',
        fundTypeLifestyle: false,
        softClosed: false
      }
    ],
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  })
);

export const benfitsContributionWithSuspended = benefitsContribution.map(
  ({
    holdings,
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  }) => ({
    holdings: holdings.concat([
      {
        fundCode: 'BA83',
        name: 'Asian Suspended fund',
        monetaryValue: '200',
        unitPrice: '2',
        unitsHeld: 100,
        unitPriceDate: '2018-07-20',
        fundTypeLifestyle: false,
        softClosed: false
      }
    ]),
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  })
);

export const allBenfitsSuspended = benefitsAccount.map(
  ({
    holdings,
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  }) => ({
    holdings: holdings.map(({ fundCode, ...props }, i) => ({
      fundCode: suspendedFundCodes[i],
      ...props
    })),
    concatBenefitSequenceId,
    type,
    lastRegularContributionFrequencyCode
  })
);
