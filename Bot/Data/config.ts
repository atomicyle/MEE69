import devconfig from './config-dev'
import safeconfig from './safe-config'

export default {
    bot: {
        token: process.env.TOKEN || devconfig.bot.token,
        owners: devconfig.bot.owners || safeconfig.bot.owners,
        prefix: devconfig.bot.prefix || safeconfig.bot.prefix,
        color: devconfig.bot.color || safeconfig.bot.color,
        logchannels: {
            error: devconfig.bot.logchannels.error || safeconfig.bot.logchannels.error,
            command: devconfig.bot.logchannels.command || safeconfig.bot.logchannels.command,
            other: devconfig.bot.logchannels.other || safeconfig.bot.logchannels.other
        }
    },
    database: {
        user: process.env.USER_DB || devconfig.database.user,
        guild: process.env.GUILD_DB || devconfig.database.guild
    },
    keys: {
        supercell: {
            bs: process.env.BS_API_KEY || devconfig.keys.supercell.bs,
            coc: process.env.BS_API_KEY || devconfig.keys.supercell.coc,
            cr: process.env.BS_API_KEY || devconfig.keys.supercell.cr
        },
        starlist: process.env.STARLIST_API_KEY || devconfig.keys.starlist,
        github: process.env.GITHUB_APU_KEY || devconfig.keys.github
    }
}

/**
 * Note: The arrangement has been done in such a way that i can keep the same repository for hosting and for dev build *
 * * * * The format (devconfig file) uses the same format. just fill in your values in the file named dev-config * * * *
 * * * * if process.env[<whatev>] is not there, the bot will use devconfig file and due to safeconfig and devconfig both
 * * * * being there in dev pc but not in host pc, we give priority to devconfig first keeping there no prefix clash * *
 * * * * or any such things. it is recommended not to change anything. * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * devconfig.ts must be kept private under all circumstances * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * safeconfig.ts does not have to be hidden as there is no confidential data in it * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * Starlist API key is optional due to it being a private api. * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * GitHub API key can be obtained failry easily. * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */