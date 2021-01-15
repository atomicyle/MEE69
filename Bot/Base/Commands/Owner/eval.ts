import { Message } from "discord.js";
import { Command } from 'discord-akairo'
import { Util } from "discord.js";

export default class extends Command {
    public constructor() {
        super("command_owner_eval", {
            aliases: ['eval'],
            ownerOnly: true,
            description: {
                short: 'Evaluate some code',
                usage: '< Code >',
                visible: false
            },
            args: [
                {
                    id: 'code',
                    type: 'string',
                    prompt: {
                        start: (message: Message) => `${message.author}, What to evaluate?`
                    },
                    match: 'content'
                },
                {
                    id: 'unsecure',
                    match: 'flag',
                    flag: '*unsecure'//Needs work
                }
            ]
        })
    }

    /**
     * Clean the text
     * @param {string} text The text to be cleaned
     * @private
     */
    private clean(text: string) {
        if (typeof(text) === 'string') {
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        } else {
            return text
        }
    }

    public async exec(message: Message, { code, unsecure }: { code: string, unsecure: string}) {

        code = Util.escapeMarkdown(code)
        
        if(unsecure) {
            console.log(`Unsecure Evaluation Requested`)
        }
        
        try {
            let evalled = await eval(code)
            if(typeof evalled !== 'string') {
                evalled = require('util').inspect(evalled)
            }
            message.util!.send(`\`\`\`js\n${this.clean(evalled)}\`\`\``, { split: true })
        } catch (err) {
            message.util!.send(`**Error:**\`\`\`prolog\n${this.clean(err)}\`\`\``, { split: true })
        }
    }
}