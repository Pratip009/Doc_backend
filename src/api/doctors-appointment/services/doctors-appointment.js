'use strict';

/**
 * doctors-appointment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doctors-appointment.doctors-appointment');
