import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedBlockchain extends Schema.Component {
  collectionName: 'components_shared_blockchains';
  info: {
    displayName: 'Blockchain';
    icon: 'link';
    description: '';
  };
  attributes: {
    ca: Attribute.String;
    explorer: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedProjectInfo extends Schema.Component {
  collectionName: 'components_shared_project_infos';
  info: {
    displayName: 'Project-Info';
    icon: 'book';
    description: '';
  };
  attributes: {
    Socials: Attribute.Component<'shared.socials', true>;
    Blockchain: Attribute.Component<'shared.blockchain', true>;
    Team: Attribute.Component<'shared.team', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSocials extends Schema.Component {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'Socials';
    icon: 'star';
    description: '';
  };
  attributes: {
    website: Attribute.String;
    farcaster: Attribute.String;
    twitter: Attribute.String;
    linkedin: Attribute.String;
    github: Attribute.String;
    youtube: Attribute.String;
    medium: Attribute.String;
    telegram: Attribute.String;
    discord: Attribute.String;
    whitepaper: Attribute.String;
  };
}

export interface SharedTeam extends Schema.Component {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
    description: '';
  };
  attributes: {
    founder: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.blockchain': SharedBlockchain;
      'shared.media': SharedMedia;
      'shared.project-info': SharedProjectInfo;
      'shared.seo': SharedSeo;
      'shared.socials': SharedSocials;
      'shared.team': SharedTeam;
    }
  }
}
