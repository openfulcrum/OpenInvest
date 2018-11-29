import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { schema as isaApplyUnauthSchema } from './src/isa-apply-unauth/schema';
import { schema as switchRedirectAuthSchema } from './src/switch-redirect-auth/schema';
import adviceReponse from './advice-journey.json';
import adviceReponseReg from './advice-journey-r.json';
import adviceReponseLump from './advice-journey-l.json';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

// isa-apply-unauth
app.use(
  '/isa-apply-unauth/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: isaApplyUnauthSchema })
);
app.get(
  '/isa-apply-unauth/graphiql',
  graphiqlExpress({ endpointURL: '/isa-apply-unauth/graphql' })
);

// switch-redirect-unauth
app.use(
  '/switch-redirect-auth/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: switchRedirectAuthSchema })
);
app.get(
  '/switch-redirect-auth/graphiql',
  graphiqlExpress({ endpointURL: '/switch-redirect-auth/graphql' })
);

app.use('/advice-journey', (_, res) => res.json(adviceReponse));
app.use('/advice-journey-reg', (_, res) => res.json(adviceReponseReg));
app.use('/advice-journey-lump', (_, res) => res.json(adviceReponseLump));

app.listen(PORT);
