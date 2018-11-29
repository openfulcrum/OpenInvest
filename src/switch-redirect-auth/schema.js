/* eslint-disable */
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

export const switchRedirectAuth = `

#Authenticated GraphQL schema
#v0.2.16
#A monetary value. Always specified as #0.00 format, with no leading zeros and always 2 decimal places.
scalar MonetaryAmount
#All dates are in yyyy-mm-dd format
scalar Date


#-------- QUERY/MUTATION INTERFACE DEFINITION
schema {
    query: QueryType
    mutation: MutationType
}
type QueryType {
    workplacePensionSwitchAndRedirectCheckAllowed(policyNumber: String): WorkplacePensionSwitchAndRedirectCheckAllowedResponse!
    workplacePensionHoldings(policyNumber: String): WorkplacePensionHoldings
    workplacePensionCustomerDetails(policyNumber: String) : WorkplacePensionCustomerDetails!
    workplacePensionFundUniverseSchemeAndCategory(policyNumber: String!, schemeCategory: String!, schemeMembership: String!, pensionProductId: String!) : [WorkplacePensionFund]!
    workplacePensionFundDetails(fundCodes: [String!]!): [WorkplacePensionFund]!
    workplacePensionFundBasket(policyNumber: String, basketType: BasketType!): FundsInBasket
    version: String!
    unhashPolicyNumber(hashedPolicyNumber: String!): String!
}
type MutationType {
    workplacePensionSaveBasket(policyNumber: String, basketType: BasketType!, fundsInBasket: FundsInBasketInput!): Outcome
    workplacePensionSwitchAndRedirectOrder(policyNumber: String, order: WorkplacePensionInput!): WorkplacePensionSwitchAndRedirectOrderResponse!
}

#------- ENUMS

enum Outcome {
    SUCCESS
    FAILURE
}

enum BasketType {
    HOLDINGS
    CONTRIBUTIONS
}

enum BenefitType {
    REGULAR
    SINGLE
    TRANSFERVALUE
}

enum LastRegularContributionFrequencyCode {
    WEEKLY
    FOUR_WEEKLY
    MONTHLY
}

enum LifestyleSwitchingFrequency {
    MONTHLY
    QUARTERLY
    SIX_MONTHLY
    ANNUALLY
}

#------- INPUT TYPES

input WorkplacePensionInput {
    benefitsHoldings: [BenefitInput!]
    benefitsFutureContributions: [BenefitInput!]
    emailAddress: String!
}

input BenefitInput {
    # This is benefitId + sequence number as a string
    concatBenefitSequenceId: String
    funds: [FundInput!]!
}

input FundInput {
    fundCode: String!
    percentage: Float!
    fundTypeLifestyle: Boolean!
}

input FundsInBasketInput {
    benefits: [BasketBenefitListInput!]
    basketType: BasketType!
}

input BasketBenefitListInput {
    concatBenefitSequenceId: String
    funds: [BasketFundsInput!]
}

input BasketFundsInput {
    fundCode: String
    fundTypeLifestyle: Boolean
    name: String
}

#------- TYPES

type FundsInBasket {
    benefits: [BasketBenefitList!]
    basketType: BasketType!
}

type BasketBenefitList {
    concatBenefitSequenceId: String
    funds: [BasketFunds!]
}

type BasketFunds {
    fundCode: String
    fundTypeLifestyle: Boolean
    name: String
}

type WorkplacePensionHoldings {
    benefits: [Benefit!]!
    future: [InvestmentStrategy!]
    lastRegularContribution: MonetaryAmount
    lastRegularContributionFrequencyCode: LastRegularContributionFrequencyCode
    facilitatedAdviserChargeAvailable: Boolean
}

type Benefit {
    # This is benefitId + sequence number as a string
    concatBenefitSequenceId: String
    holdings: [WorkplacePensionHolding]!
    type: BenefitType!
}

type InvestmentStrategy {
    fundCode: String
    contributionPercentage: Float
    name: String
}

type WorkplacePensionHolding {
    fundCode: String
    name: String
    fundTypeLifestyle:Boolean
    monetaryValue: MonetaryAmount
    unitPrice: MonetaryAmount
    unitsHeld: Float
    unitPriceDate: Date
    softClosed: Boolean
}

type ChartData {
    date: Date!
    price: Float
}

type LifestyleProfileFund {
    name: String!
    fundCode: String!
    percentage: Float!
}

type LifestyleProfileData {
    yearFromRetirement: Int!
    funds: [LifestyleProfileFund!]!
}

type WorkplacePensionFund {
    fundCode: String
    isin: String
    sedol: String
    mexcode: String
    name: String
    fundType: String
    fundAim: String
    unitPrice: MonetaryAmount
    managementCharge: Float
    managementType: String
    coreFund: Boolean
    softClosed: Boolean
    managementCompany: String
    region: [String]
    fundFactSheetUrl: String
    fundPerformanceData: [ChartData!]
    benchmarkPerformanceName: String
    benchmarkPerformanceData: [ChartData!]
    lifestyleSwitchingFrequency: LifestyleSwitchingFrequency
    lifestyleProfileData: [LifestyleProfileData!]
}

type WorkplacePensionCustomerDetails {
    emailAddress: String
    schemeMembership: String
    schemeCategory: String
    pensionProductId: String
}

type WorkInProgressCheck {
    wipSet: Boolean!
    wipExpiryDateIsIndefinite: Boolean
    wipExpiryDate: Date
}

type WorkplacePensionSwitchAndRedirectOrderResponse {
    outcome: Outcome!
    wipResponse: WorkplacePensionSwitchAndRedirectCheckAllowedResponse
}

type WorkplacePensionSwitchAndRedirectCheckAllowedResponse {
    permittedByScheme: Boolean!
    wipStatus: WorkInProgressCheck
    noPostalAddress: Boolean
}

`;

export const schema = makeExecutableSchema({
  typeDefs: switchRedirectAuth,
  resolvers
});
