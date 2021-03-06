const env = require('./env');

const disabledEvents = [
  'GUILD_SYNC',
  'GUILD_UPDATE',
  'GUILD_MEMBER_UPDATE',
  'GUILD_MEMBERS_CHUNK',
  'GUILD_INTEGRATIONS_UPDATE',
  'GUILD_ROLE_CREATE',
  'GUILD_ROLE_DELETE',
  'GUILD_ROLE_UPDATE',
  'GUILD_BAN_ADD',
  'GUILD_BAN_REMOVE',
  'CHANNEL_CREATE',
  'CHANNEL_DELETE',
  'CHANNEL_UPDATE',
  'CHANNEL_PINS_UPDATE',
  'USER_UPDATE',
  'USER_NOTE_UPDATE',
  'USER_SETTINGS_UPDATE',
  'PRESENCE_UPDATE',
  'TYPING_START',
  'RELATIONSHIP_ADD',
  'RELATIONSHIP_REMOVE',
  'WEBHOOKS_UPDATE',
];

module.exports = {
  disabledEvents,
  env,
};
