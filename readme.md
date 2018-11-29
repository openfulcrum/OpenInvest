# OpenInvest

The open source investment API

We are starting with OpenInvest and specifically buying an ISA. Soon other investment products will be added. If you have a business use for OpenInvest? Want to buy and sell specific financial products or have other requirments? Please [fill out our survey](http://survey.openfulcrum.com) because we are always on the look-out for expanding the partner ecosystem around OpenFulcrum and co-creating new solutions.

# Mock API for GraphQL Schema
To test the API, please install the Mock API server.

[![Build Status](https://travis-ci.org/2fd/graphdoc.svg?branch=master)](https://travis-ci.org/2fd/graphdoc)
![npm (scoped)](https://img.shields.io/npm/v/@2fd/graphdoc.svg?style=flat-square)
![GitHub tag](https://img.shields.io/github/tag/2fd/graphdoc.svg?style=flat-square)

* [edit](#edit)
* [install](#install)
* [use](#use)
* [contributors](#contributors)

## Edit

### Edit your `package.json`

#### For Windows

```javascript
    "build": "rm -rf dist/ && \"./node_modules/.bin/babel\" \"./\" --out-dir dist/ --ignore \"./node_modules,./.babelrc,./package.json,./npm-debug.log\" --copy-files",
```

#### For Linux

```javascript
    "build": "rm -rf dist/ && ./node_modules/.bin/babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
```

## Install

```bash
    npm install
```

```bash
    npm start
```

## Routes

### http://localhost:8080/isa-apply-unauth/graphiql
### http://localhost:8080/switch-redirect-auth/graphiql

## Use

### Navigate to http://localhost:8080/isa-apply-unauth/graphiql
### The following queries can be performed for isa-apply-unauth

```javascript
	// retrieveAllFunds
	{
		personalInvestmentFunds(audience: EXISTING_CUSTOMER, personalInvestmentOrderWrapper: STOCKS_AND_SHARES_ISA) 
		{
			isin
			name
			ongoingCharge
			trackTheMarket
			region
		}
	}
```

```javascript
	// retrieveFundsByIsin
	{
	   personalInvestmentFund(isin: "isin-2") 
	   {
		  isin name ongoingCharge underlyingYield fundSize numberOfHoldings fundFactsheetURL kiidURL assetType managementStyle region unitType
	   }
	}
```

## Contributors

- [<img src="https://avatars1.githubusercontent.com/u/2903325?v=4" width="40"> vijkumar8765](https://github.com/vijkumar8765)
