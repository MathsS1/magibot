const Commando = require('discord.js-commando');
const env = require('../../config/env');

class Ping extends Commando.Command {
  static options() {
    return {
      usage: `${env.client.prefix} ping`,
      name: 'ping',
      aliases: ['pong', 'ms', 'latency'],
      group: 'simple',
      memberName: 'ping',
      description: 'Calculates ping between sending a message and editing it, giving a nice round-trip latency. The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)',
      details: 'Ping? Pong',
      throttling: {
        usages: 3,
        duration: 10,
      },
      examples: [
        `${env.client.prefix} ping`,
      ],
    };
  }

  constructor(client) {
    super(client, Ping.options());
  }

  async run(message) {
    const m = await message.channel.send('Ping?');
    return m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(this.client.ping)}ms`);
  }
}

module.exports = Ping;
