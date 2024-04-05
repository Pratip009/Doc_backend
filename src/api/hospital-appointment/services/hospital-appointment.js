'use strict';

/**
 * hospital-appointment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hospital-appointment.hospital-appointment');
