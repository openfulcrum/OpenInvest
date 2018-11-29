import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import moment from 'node-moment';

export const monetaryAmount = new GraphQLScalarType({
  name: 'MonetaryAmount',
  description: 'MonetaryAmount custom scalar type',
  parseValue(value) {
    return parseFloat(value);
  },
  serialize(value) {
    return value.toString().toLocaleString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.FLOAT) {
      return parseFloat(ast.value);
    }
    return null;
  }
});

export const date = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new moment(value);
  },
  serialize(value) {
    return moment(value).format('YYYY-MM-DD');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  }
});
