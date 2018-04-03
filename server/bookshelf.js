import knex from 'knex';
import bookshelf from 'bookshelf';
import knexConfig from './knexfile';

const configuration = (process.env.NODE_ENV === 'production') ? knexConfig.production : knexConfig.development

console.log(process.env.NODE_ENV)

export default bookshelf(knex(configuration));