import type { Schema, Attribute } from '@strapi/strapi';

export interface WeekDaysWeek extends Schema.Component {
  collectionName: 'components_week_days_weeks';
  info: {
    displayName: 'week';
    icon: 'grid';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'week-days.week': WeekDaysWeek;
    }
  }
}
