/**
 * @module book
 * @type {object}
 */
module.exports = {

  attributes: {
    yard: { type: 'string', required: true, primaryKey: true },
    state: { type: 'string', required: true },
    city: { type: 'string', required: true },
    address: { type: 'string', required: true },
    zip: { type: 'string' },
    phone: { type: 'string' },
    fax: { type: 'string' }
  }
};
