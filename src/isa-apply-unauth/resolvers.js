import { pensionFunds } from './funds';
import { date } from './types';

export const resolvers = {
  QueryType: {
    personalInvestmentOrderCardPaymentStatus: (
      _,
      { temporaryCustomerReference }
    ) => 'SUCCESS',
    personalInvestmentFunds: (
      _,
      { audience, personalInvestmentOrderWrapper }
    ) => pensionFunds,
    personalInvestmentFund: (_, { isin }) => [
      pensionFunds.find(fund => fund.isin === isin[0])
    ],
    personalInvestmentOrderCardPaymentStatus: (
      _,
      { temporaryCustomerReference }
    ) => ({
      cardPaymentStatus: 'AUTH_AND_SETTLED'
    })
  },
  MutationType: {
    personalInvestmentOrder: (_, { order }) => ({
      outcome: 'SUCCESS',
      message: 'Hi there....',
      cardPaymentUrl:
        'https://s3-eu-west-1.amazonaws.com/isa-apply-cc-redirect/redirect-to-localhost-isa-apply-cc-response.html',
      temporaryCustomerReference: '123467asdfgh'
    })
  },
  Date: date
};
