'use strict';

/**
 * student-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-info.student-info');
