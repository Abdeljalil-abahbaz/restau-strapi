import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutsRestaurants extends Schema.Component {
  collectionName: 'components_layouts_restaurants';
  info: {
    displayName: 'Home';
    icon: 'layout';
    description: '';
  };
  attributes: {
    grid: Attribute.JSON;
  };
}

export interface ViewsHome extends Schema.Component {
  collectionName: 'components_views_homes';
  info: {
    displayName: 'restaurants';
    icon: 'restaurant';
    description: '';
  };
  attributes: {
    grid: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layouts.restaurants': LayoutsRestaurants;
      'views.home': ViewsHome;
    }
  }
}
