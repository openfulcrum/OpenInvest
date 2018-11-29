import moment from 'node-moment';

import {
  investmentStrategy,
  investmentStrategySingle,
  investmentStrategyLifestyle,
  workplacePensionFunds,
  suspendedFunds,
  allSuspendedFunds,
  suspendedFund,
  singleFutureSuspended
} from './funds';
import {
  benefitsAccountLifestyle,
  benefitsAccountOne,
  benefitsAccount,
  benefitsContribution,
  benfitsWithSoftclosed,
  benfitsContributionWithSoftclosed,
  benfitsWithSuspended,
  benfitsContributionWithSuspended,
  benfitsWithSuspendedSingle,
  allBenfitsSuspended
} from './benefits';

import { monetaryAmount, date } from './types';

const policyNumbers = {
  HAS_SWITCH_AND_REDIRECT_SINGLE_FUND: 'HAS_SWITCH_AND_REDIRECT_SINGLE_FUND',
  HAS_SWITCH_AND_REDIRECT_SINGLE_FUND_WITH_BASKET:
    'HAS_SWITCH_AND_REDIRECT_SINGLE_FUND_WITH_BASKET',
  HAS_SWITCH_AND_REDIRECT_SINGLE_FUND_WITH_BASKET_FUTURE:
    'HAS_SWITCH_AND_REDIRECT_SINGLE_FUND_WITH_BASKET_FUTURE',
  HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND:
    'HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND',
  HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND_WITH_BASKET:
    'HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND_WITH_BASKET',
  HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND_WITH_BASKET_FUTURE:
    'HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND_WITH_BASKET_FUTURE',
  NO_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT:
    'NO_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT',
  HAS_SWITCH_AND_REDIRECT_NO_FUNDS_ACCOUNT:
    'HAS_SWITCH_AND_REDIRECT_NO_FUNDS_ACCOUNT',
  HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT:
    'HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT',
  HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT_WITH_BASKET:
    'HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT_WITH_BASKET',
  HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT_WITH_BASKET_FUTURE:
    'HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT_WITH_BASKET_FUTURE',
  HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_CONTRIBUTION:
    'HAS_SWITCH_AND_REDIRECT_HAS_FUNDS_CONTRIBUTION',
  HAS_SWITCH_AND_REDIRECT_HAS_NO_CONTRIBUTION:
    'HAS_SWITCH_AND_REDIRECT_HAS_NO_CONTRIBUTION',
  NO_POSTAL_ACCOUNT: 'NO_POSTAL_ACCOUNT',
  HAS_WIP_ACCOUNT: 'HAS_WIP_ACCOUNT',
  HAS_INDEFINITE_WIP_ACCOUNT: 'HAS_INDEFINITE_WIP_ACCOUNT',
  HAS_SOFTCLOSED: 'HAS_SOFTCLOSED',
  HAS_SOFTCLOSED_CONTRIBUTION: 'HAS_SOFTCLOSED_CONTRIBUTION',
  NO_FAC: 'NO_FAC',
  HAS_SUSPENDED: 'HAS_SUSPENDED',
  HAS_SUSPENDED_HAS_SUSPENDED_CONTRIBUTION:
    'HAS_SUSPENDED_HAS_SUSPENDED_CONTRIBUTION',
  HAS_SUSPENDED_WITH_BASKET: 'HAS_SUSPENDED_WITH_BASKET',
  HAS_SUSPENDED_NO_HOLDING_WITH_BASKET: 'HAS_SUSPENDED_NO_HOLDING_WITH_BASKET',
  HAS_SUSPENDED_NO_HOLDING_SINGLE_WITH_BASKET:
    'HAS_SUSPENDED_NO_HOLDING_SINGLE_WITH_BASKET',
  HAS_SUSPENDED_CONTRIBUTION: 'HAS_SUSPENDED_CONTRIBUTION',
  HAS_SUSPENDED_CONTRIBUTION_WITH_BASKET_FUTURE:
    'HAS_SUSPENDED_CONTRIBUTION_WITH_BASKET_FUTURE',
  HAS_SUSPENDED_CONTRIBUTION_NO_HOLDING_WITH_BASKET_FUTURE:
    'HAS_SUSPENDED_CONTRIBUTION_NO_HOLDING_WITH_BASKET_FUTURE',
  HAS_SUSPENDED_CONTRIBUTION_NO_HOLDING_SINGLE_WITH_BASKET_FUTURE:
    'HAS_SUSPENDED_CONTRIBUTION_NO_HOLDING_SINGLE_WITH_BASKET_FUTURE',
  HAS_SUSPENDED_WITH_FUTURE: 'HAS_SUSPENDED_WITH_FUTURE',
  ALL_HOLDINGS_SUSPENDED: 'ALL_HOLDINGS_SUSPENDED',
  ALL_FUTURE_SUSPENDED: 'ALL_FUTURE_SUSPENDED',
  SINGLE_FUTURE_SUSPENDED: 'SINGLE_FUTURE_SUSPENDED',
  ALL_SUSPENDED: 'ALL_SUSPENDED'
};

export const getBenefits = policyNumber => {
  switch (policyNumber) {
    case policyNumbers.HAS_SUSPENDED:
    case policyNumbers.HAS_SUSPENDED_WITH_BASKET:
    case policyNumbers.HAS_SUSPENDED_HAS_SUSPENDED_CONTRIBUTION:
      return benfitsWithSuspended;
    case policyNumbers.ALL_HOLDINGS_SUSPENDED:
    case policyNumbers.ALL_SUSPENDED:
      return allBenfitsSuspended;
    case policyNumbers.HAS_SUSPENDED_CONTRIBUTION:
      return benfitsContributionWithSuspended;
    case policyNumbers.HAS_SOFTCLOSED_CONTRIBUTION:
      return benfitsContributionWithSoftclosed;
    case policyNumbers.HAS_SOFTCLOSED:
      return benfitsWithSoftclosed;
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND:
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND_WITH_BASKET:
      return benefitsAccountLifestyle;
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_SINGLE_FUND:
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_SINGLE_FUND_WITH_BASKET:
      return benefitsAccountOne;
    default:
      return policyNumber.endsWith('ACCOUNT') ||
        policyNumber.endsWith('ACCOUNT_WITH_BASKET')
        ? benefitsAccount
        : benefitsContribution;
  }
};

export const getFuture = policyNumber => {
  switch (policyNumber) {
    case policyNumbers.HAS_SUSPENDED_WITH_FUTURE:
    case policyNumbers.HAS_SUSPENDED_CONTRIBUTION_WITH_BASKET_FUTURE:
    case policyNumbers.HAS_SUSPENDED_HAS_SUSPENDED_CONTRIBUTION:
      return suspendedFunds;
    case policyNumbers.ALL_FUTURE_SUSPENDED:
    case policyNumbers.ALL_SUSPENDED:
      return allSuspendedFunds;
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND:
      return investmentStrategyLifestyle;
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_SINGLE_FUND:
      return investmentStrategySingle;
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_HAS_NO_CONTRIBUTION:
      return [];
    case policyNumbers.SINGLE_FUTURE_SUSPENDED:
      return singleFutureSuspended;
    default:
      return investmentStrategy;
  }
};

export const getBasketHoldings = policyNumber => {
  switch (policyNumber) {
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_LIFESTYLE_FUND_WITH_BASKET:
      return basketConversion(benefitsAccountLifestyle);
    case policyNumbers.HAS_SWITCH_AND_REDIRECT_SINGLE_FUND_WITH_BASKET:
      return basketConversion(benefitsAccountOne);
    case policyNumbers.HAS_SUSPENDED_WITH_BASKET:
    case policyNumbers.HAS_SUSPENDED_NO_HOLDING_WITH_BASKET:
      return basketConversion(benfitsWithSuspended);
    case policyNumbers.HAS_SUSPENDED_NO_HOLDING_SINGLE_WITH_BASKET:
      return basketConversion(benfitsWithSuspendedSingle);
    default:
      return policyNumber.endsWith('ACCOUNT') ||
        policyNumber.endsWith('ACCOUNT_WITH_BASKET')
        ? basketConversion(benefitsAccount)
        : basketConversion(benefitsContribution);
  }
};

export const resolvers = {
  QueryType: {
    unhashPolicyNumber: (_, { hashedPolicyNumber } ) => {
      return hashedPolicyNumber.replace('-', '');
    },
    workplacePensionSwitchAndRedirectCheckAllowed: (_, { policyNumber }) => ({
      permittedByScheme:
        policyNumber !== policyNumbers.NO_SWITCH_AND_REDIRECT_HAS_FUNDS_ACCOUNT,
      wipStatus: {
        wipSet: [
          policyNumbers.HAS_INDEFINITE_WIP_ACCOUNT,
          policyNumbers.HAS_WIP_ACCOUNT
        ].includes(policyNumber),
        wipExpiryDateIsIndefinite:
          policyNumber === policyNumbers.HAS_INDEFINITE_WIP_ACCOUNT,
        wipExpiryDate: moment().add(7, 'days')
      },
      noPostalAddress: policyNumber === policyNumbers.NO_POSTAL_ACCOUNT
    }),
    workplacePensionHoldings: (_, { policyNumber }) => ({
      benefits: getBenefits(policyNumber),
      future: getFuture(policyNumber),
      lastRegularContributionFrequencyCode: 'MONTHLY',
      lastRegularContribution:
        policyNumber !== policyNumbers.HAS_SWITCH_AND_REDIRECT_NO_FUNDS_ACCOUNT
          ? parseFloat('700.00')
          : 0,
      facilitatedAdviserChargeAvailable: policyNumber !== policyNumbers.NO_FAC
    }),
    workplacePensionFundUniverseSchemeAndCategory: (
      _,
      { policyNumber, schemeCategory, schemeMembership, pensionProductId }
    ) => workplacePensionFunds,
    workplacePensionFundDetails: (_, { fundCodes }) =>
      workplacePensionFunds.filter(fund =>
        fundCodes.some(code => code === fund.fundCode)
      ),
    workplacePensionCustomerDetails: (_, { policyNumber }) => ({
      emailAddress: 'test@test.com',
      schemeMembership: 'zzzzzzz',
      schemeCategory: 'xxxxxxzx',
      pensionProductId: 'qqqqqqqqqq'
    }),
    workplacePensionFundBasket: (_, { policyNumber, basketType }) => {
      if (policyNumber.endsWith('WITH_BASKET') && basketType === 'HOLDINGS') {
        return {
          basketType: basketType,
          benefits: getBasketHoldings(policyNumber)
        };
      }

      if (
        policyNumber.endsWith('WITH_BASKET_FUTURE') &&
        basketType === 'CONTRIBUTIONS'
      ) {
        let funds = [
          {
            fundCode: 'fundcode-8',
            fundTypeLifestyle: false,
            name: 'Multi-Index 6 Fund 8'
          },
          {
            fundCode: 'fundcode-9',
            fundTypeLifestyle: false,
            name: 'High Income Trust 9'
          }
        ];

        if (
          policyNumber ===
            policyNumbers.HAS_SUSPENDED_CONTRIBUTION_WITH_BASKET_FUTURE ||
          policyNumber ===
            policyNumbers.HAS_SUSPENDED_CONTRIBUTION_NO_HOLDING_WITH_BASKET_FUTURE
        ) {
          funds = [...funds, suspendedFund];
        } else if (
          policyNumber ===
          policyNumbers.HAS_SUSPENDED_CONTRIBUTION_NO_HOLDING_SINGLE_WITH_BASKET_FUTURE
        ) {
          funds = [suspendedFund];
        }
        return {
          basketType: basketType,
          benefits: [
            {
              funds,
              concatBenefitSequenceId: ''
            }
          ]
        };
      }

      return {
        basketType: basketType,
        benefits: []
      };
    }
  },
  MutationType: {
    workplacePensionSaveBasket: (
      _,
      { policyNumber, basketType, fundsInBasket }
    ) => 'SUCCESS',
    workplacePensionSwitchAndRedirectOrder: (_, { policyNumber, order }) => ({
      outcome: 'SUCCESS'
    })
  },
  MonetaryAmount: monetaryAmount,
  Date: date
};

const basketConversion = benifits =>
  benifits.map(benifit => ({
    concatBenefitSequenceId: benifit.concatBenefitSequenceId,
    funds: benifit.holdings
  }));
