/* eslint-disable */
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

export const isaApplyUnAuth = `

# All dates should be in the format 2018-03-19 i.e. yyyy-MM-dd (ISO 8601 format)
scalar Date

# version 0.5.8
#
# ----Assumptions:-
#  1) For fund summary queries for fetching a list of funds, the consumer will invoke the personalInvestmentFunds(NEW_CUSTOMER, STOCKS_AND_SHARES_ISA) or personalInvestmentFunds(NEW_CUSTOMER, NONE) query but with arguments that can specify a subset of the fund details eg:-
#
#   {
#  		personalInvestmentFunds(NEW_CUSTOMER, STOCKS_AND_SHARES_ISA) {
#			id
#			name
#			filterField1
#			filterField2
#		}
#   }
#
#   to just fetch all the fund attributes that will be used for filtering.
#
# ---- End of Assumptions
#
#
# ---- Topics for discussion:-
#  * joint accounts need to explore more fields for different situations
#  * DECIDED separate address for bankdetails? NO
#  * DECIDED What fields do we need for lump sum reference number? One for payment provider reference (to prove that the amont was paid), one for order reference as our reference to tie order to payment.
#  * DECIDED What fields do we need for lump sum reference number? One for payment provider reference (to prove that the amont was paid), one for order reference as our reference to tie order to payment.
# ---- End of Topics for discussion


#-------- QUERY/MUTATION INTERFACE DEFINITION

  schema {
	query: QueryType
	mutation: MutationType
  }

  type QueryType {

    #Query for full range of funds by audience (new/existing customer) and investment type (ISA/no wrapper). This method is intended to be queried requesting a subset of the available fund attributes so that it can be used in a table. Get individual funds from the 'personalInvestmentFunds' query to get full fund detail for a given fund
    personalInvestmentFunds(audience: PersonalInvestmentAudienceType!, personalInvestmentOrderWrapper: PersonalInvestmentOrderWrapperType!): [PersonalInvestmentFund]

	#Query to retrieve details of one or more funds. It's expected that the client will request the full PersonalInvestmentFund
    personalInvestmentFund(isin: [String]!): [PersonalInvestmentFund]!

	personalInvestmentOrderCardPaymentStatus(temporaryCustomerReference: String!): PersonalInvestmentOrderCardPaymentStatusResponse!
  }

  type MutationType {

	#Submission of a personal investment order
	personalInvestmentOrder(order: PersonalInvestmentOrderInput): OrderResponse

  }

#-------- ENUMS
  enum Outcome {
	SUCCESS
	FAILURE
  }

  enum PersonalInvestmentOrderWrapperType {
    STOCKS_AND_SHARES_ISA
    NONE
  }

  enum PersonalInvestmentAudienceType {
    NEW_CUSTOMER
    EXISTING_CUSTOMER
  }

  enum DateFrequency {
	MONTHLY
  }

  enum PreferredCommunication {
	POST
	EMAIL
  }

  enum CollectionStartDayType {
  	SPECIFIC_DAY
  	LAST_DAY_OF_MONTH
    }

  enum CardPaymentStatus {
    AUTH_AND_SETTLED
    DECLINED
    CANCELLED
    ERROR_WHEN_PROCESSING
  }

  enum RegularPaymentType {
    PAYROLL
    DIRECT_DEBIT
  }
#------- INPUT TYPES

  input PersonalInvestmentOrderInput {
    customerName : CustomerNameInput!
    customerPersonalDetails: CustomerPersonalDetailsInput!
    address: AddressInput!
    fundInvestments: [FundInvestmentInput!]!
    directDebitBankDetails: DirectDebitBankDetailsInput
    mandateBankDetails: MandateBankDetailsInput
    gfReference: String
	acceptMarketing: Boolean!
	acceptOnlineDocumentation: Boolean!
    wrapper: PersonalInvestmentOrderWrapperType!
	preferredCommunication: PreferredCommunication!
	legalAndGeneralAffiliation: LegalAndGeneralAffiliationInput!
  }

  input CustomerNameInput {
    title: String!
    firstName: String!
    lastName: String!
  }

  input CustomerPersonalDetailsInput {
    nationalInsuranceNumber: String
    dateOfBirth: Date!
    emailAddress: String!
    phoneNumber: String
  }

  input FundInvestmentInput {
  	regularPaymentAmount: Float!
  	lumpsumAmount: Float!
    isin: String!
  	collectionStartDayType: CollectionStartDayType!
  	collectionStartDay: Int
    collectionFrequency: DateFrequency!
    regularPaymentType: RegularPaymentType
    }

  input AddressInput {
    line1: String!
    line2: String!
    town: String!
    postCode: String!
  }

  input DirectDebitBankDetailsInput {
    orderApplicantInitials: String!
    orderApplicantSurname: String!
    accountNumber: String!
    sortCode: String!
	jointAccountHolderInitials: String
	jointAccountHolderSurname: String
  }

	input MandateBankDetailsInput {
    orderApplicantFirstName: String!
    orderApplicantSurname: String!
    accountNumber: String!
    sortCode: String!
  }

  input LegalAndGeneralAffiliationInput {
	legalAndGeneralEmployee: Boolean!
	legalAndGeneralShareholder: Boolean!
	legalAndGeneralShareholderRelative: Boolean!
	legalAndGeneralShareHolderRelativeName: String
  }

#------- TYPES

  type OrderResponse {
	outcome: Outcome!
	message: String
	cardPaymentUrl: String
	temporaryCustomerReference: String
  }

  type PersonalInvestmentFund{
    isin: String!
    name: String!
    ongoingCharge: Float!
	underlyingYield: Float!
	fundSize: Float!
	numberOfHoldings: Int!
	aim: String!
	fundFactsheetURL: String
	kiidURL: String!
	unitType: String!
	assetType: String!
	managementStyle: String!
	region: String!
	trackTheMarket: Boolean!
  }

  type PersonalInvestmentOrderCardPaymentStatusResponse {
	cardPaymentStatus: CardPaymentStatus!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: isaApplyUnAuth,
  resolvers
});
