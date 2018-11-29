# Mock API for GraphQL Schema

[![Build Status](https://travis-ci.org/2fd/graphdoc.svg?branch=master)](https://travis-ci.org/2fd/graphdoc)
![npm (scoped)](https://img.shields.io/npm/v/@2fd/graphdoc.svg?style=flat-square)
![GitHub tag](https://img.shields.io/github/tag/2fd/graphdoc.svg?style=flat-square)

* [edit](#edit)
* [install](#install)
* [Routes](#routes)
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

### Routes

### http://localhost:8080/isa-apply-unauth/graphiql

## Use

### The graphql mock server start on default port 8080.

### Navigate to http://localhost:8080/isa-apply-unauth/graphiql
### The following queries can be performed for isa-apply-unauth

### RetrieveAllFunds
```javascript
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

### RetrieveFundsByIsin
```javascript
{
   personalInvestmentFund(isin: "isin-2") 
   {
      isin name ongoingCharge underlyingYield fundSize numberOfHoldings fundFactsheetURL kiidURL assetType managementStyle region unitType
   }
}
```

## Contributors

- [<img src="https://avatars1.githubusercontent.com/u/2903325?v=4" width="40"> vijkumar8765](https://github.com/vijkumar8765)