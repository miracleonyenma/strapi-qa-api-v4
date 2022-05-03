'use strict';

/**
 * holder service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::holder.holder');
