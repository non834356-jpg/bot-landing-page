import { Bot, Sparkles, Shield, Music, Zap, MessageSquare, Globe, Github, Twitter, Mail } from "lucide-react";
import prayagAvatar from "@/assets/prayag-avatar.jpg";

export const siteConfig = {
  bot: {
    name: "Aerox",
    tagline: "The next-generation Discord bot",
    description:
      "Aerox is an all-in-one Discord bot crafted for modern communities. Moderation, music, fun, utilities — beautifully designed and lightning fast.",
    version: "v3.2.0",
    servers: "120K+",
    users: "8.4M+",
    commands: 240,
    uptime: "99.99%",
    inviteUrl: "https://discord.com/oauth2/authorize",
    supportUrl: "https://discord.gg/aerox",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Commands", href: "/commands" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
  ],

  features: [
    {
      icon: Shield,
      title: "Advanced Moderation",
      description:
        "AI-powered auto-mod, raid protection, and granular permission controls keep your server safe 24/7.",
    },
    {
      icon: Music,
      title: "High-Fidelity Music",
      description:
        "Crystal clear lossless audio streaming from Spotify, YouTube, SoundCloud and Apple Music.",
    },
    {
      icon: Sparkles,
      title: "Custom Embeds",
      description:
        "Create stunning announcements with our visual embed builder — no code required.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Globally distributed infrastructure ensures every command responds in under 50ms.",
    },
    {
      icon: MessageSquare,
      title: "Smart Tickets",
      description:
        "A complete support system with transcripts, categories and staff assignments.",
    },
    {
      icon: Globe,
      title: "20+ Languages",
      description:
        "Fully translated experience for your international community members.",
    },
  ],

  commandCategories: [
{
      name: "Moderation",
      icon: Shield,
      commands: [
        { name: "!ban", description: "ban command", usage: "!ban" },
        { name: "!kick", description: "kick command", usage: "!kick" },
        { name: "!mute", description: "mute command", usage: "!mute" },
        { name: "!warn", description: "warn command", usage: "!warn" },
        { name: "!purge", description: "purge command", usage: "!purge" },
        { name: "!purgebots", description: "purgebots command", usage: "!purgebots" },
        { name: "!hackban", description: "hackban command", usage: "!hackban" },
        { name: "!softban", description: "softban command", usage: "!softban" },
        { name: "!unban", description: "unban command", usage: "!unban" },
        { name: "!unbanall", description: "unbanall command", usage: "!unbanall" },
        { name: "!block", description: "block command", usage: "!block" },
        { name: "!unblock", description: "unblock command", usage: "!unblock" },
        { name: "!unmute", description: "unmute command", usage: "!unmute" },
        { name: "!warninfo", description: "warninfo command", usage: "!warninfo" },
        { name: "!warnreset", description: "warnreset command", usage: "!warnreset" },
        { name: "!modrole", description: "modrole command", usage: "!modrole" },
        { name: "!trusted", description: "trusted command", usage: "!trusted" },
        { name: "!ignore", description: "ignore command", usage: "!ignore" },
        { name: "!media", description: "media command", usage: "!media" },
        { name: "!mediachannel", description: "mediachannel command", usage: "!mediachannel" },
        { name: "!automod", description: "automod command", usage: "!automod" },
        { name: "!antilink", description: "antilink command", usage: "!antilink" },
        { name: "!antinuke", description: "antinuke command", usage: "!antinuke" },
        { name: "!antispam", description: "antispam command", usage: "!antispam" },
        { name: "!antiinvite", description: "antiinvite command", usage: "!antiinvite" },
        { name: "!antiswear", description: "antiswear command", usage: "!antiswear" },
        { name: "!antiunverifiedbot", description: "antiunverifiedbot command", usage: "!antiunverifiedbot" },
        { name: "!hide", description: "hide command", usage: "!hide" },
        { name: "!hideall", description: "hideall command", usage: "!hideall" },
        { name: "!unhide", description: "unhide command", usage: "!unhide" },
        { name: "!unhideall", description: "unhideall command", usage: "!unhideall" },
        { name: "!lock", description: "lock command", usage: "!lock" },
        { name: "!lockall", description: "lockall command", usage: "!lockall" },
        { name: "!unlock", description: "unlock command", usage: "!unlock" },
        { name: "!unlockall", description: "unlockall command", usage: "!unlockall" },
        { name: "!nuke", description: "nuke command", usage: "!nuke" }
      ],
    },
{
      name: "Music",
      icon: Music,
      commands: [
        { name: "!play", description: "play command", usage: "!play" },
        { name: "!playnow", description: "playnow command", usage: "!playnow" },
        { name: "!pause", description: "pause command", usage: "!pause" },
        { name: "!resume", description: "resume command", usage: "!resume" },
        { name: "!skip", description: "skip command", usage: "!skip" },
        { name: "!previous", description: "previous command", usage: "!previous" },
        { name: "!stop", description: "stop command", usage: "!stop" },
        { name: "!forward", description: "forward command", usage: "!forward" },
        { name: "!rewind", description: "rewind command", usage: "!rewind" },
        { name: "!seek", description: "seek command", usage: "!seek" },
        { name: "!replay", description: "replay command", usage: "!replay" },
        { name: "!volume", description: "volume command", usage: "!volume" },
        { name: "!vol", description: "vol command", usage: "!vol" },
        { name: "!queue", description: "queue command", usage: "!queue" },
        { name: "!history", description: "history command", usage: "!history" },
        { name: "!lyric", description: "lyric command", usage: "!lyric" },
        { name: "!playlist", description: "playlist command", usage: "!playlist" },
        { name: "!bassboost", description: "bassboost command", usage: "!bassboost" },
        { name: "!nightcore", description: "nightcore command", usage: "!nightcore" },
        { name: "!vaporwave", description: "vaporwave command", usage: "!vaporwave" },
        { name: "!filter", description: "filter command", usage: "!filter" },
        { name: "!stay247", description: "stay247 command", usage: "!stay247" }
      ],
    },
{
      name: "Utility",
      icon: Zap,
      commands: [
        { name: "!serverinfo", description: "serverinfo command", usage: "!serverinfo" },
        { name: "!userinfo", description: "userinfo command", usage: "!userinfo" },
        { name: "!avatar", description: "avatar command", usage: "!avatar" },
        { name: "!banner", description: "banner command", usage: "!banner" },
        { name: "!roleinfo", description: "roleinfo command", usage: "!roleinfo" },
        { name: "!membercount", description: "membercount command", usage: "!membercount" },
        { name: "!channelcount", description: "channelcount command", usage: "!channelcount" },
        { name: "!stats", description: "stats command", usage: "!stats" },
        { name: "!uptime", description: "uptime command", usage: "!uptime" },
        { name: "!ping", description: "ping command", usage: "!ping" },
        { name: "!help", description: "help command", usage: "!help" },
        { name: "!invite", description: "invite command", usage: "!invite" },
        { name: "!support", description: "support command", usage: "!support" },
        { name: "!team", description: "team command", usage: "!team" },
        { name: "!feedback", description: "feedback command", usage: "!feedback" },
        { name: "!report", description: "report command", usage: "!report" },
        { name: "!suggest", description: "suggest command", usage: "!suggest" },
        { name: "!poll", description: "poll command", usage: "!poll" },
        { name: "!timer", description: "timer command", usage: "!timer" },
        { name: "!translate", description: "translate command", usage: "!translate" },
        { name: "!upload", description: "upload command", usage: "!upload" },
        { name: "!remind", description: "remind command", usage: "!remind" },
        { name: "!backup", description: "backup command", usage: "!backup" },
        { name: "!welcome", description: "welcome command", usage: "!welcome" },
        { name: "!chatbot", description: "chatbot command", usage: "!chatbot" },
        { name: "!counting", description: "counting command", usage: "!counting" },
        { name: "!guessnumber", description: "guessnumber command", usage: "!guessnumber" },
        { name: "!logs", description: "logs command", usage: "!logs" },
        { name: "!autologs", description: "autologs command", usage: "!autologs" },
        { name: "!tempvc", description: "tempvc command", usage: "!tempvc" },
        { name: "!ticket", description: "ticket command", usage: "!ticket" },
        { name: "!sticky", description: "sticky command", usage: "!sticky" },
        { name: "!afk", description: "afk command", usage: "!afk" },
        { name: "!snipe", description: "snipe command", usage: "!snipe" }
      ],
    },
{
      name: "Fun",
      icon: Sparkles,
      commands: [
        { name: "!meme", description: "meme command", usage: "!meme" },
        { name: "!truth", description: "truth command", usage: "!truth" },
        { name: "!dare", description: "dare command", usage: "!dare" },
        { name: "!action", description: "action command", usage: "!action" },
        { name: "!ship", description: "ship command", usage: "!ship" },
        { name: "!quote", description: "quote command", usage: "!quote" },
        { name: "!texttoemoji", description: "texttoemoji command", usage: "!texttoemoji" },
        { name: "!howgay", description: "howgay command", usage: "!howgay" },
        { name: "!howdumb", description: "howdumb command", usage: "!howdumb" },
        { name: "!pickup", description: "pickup command", usage: "!pickup" },
        { name: "!nitro", description: "nitro command", usage: "!nitro" },
        { name: "!pfp", description: "pfp command", usage: "!pfp" },
        { name: "!social", description: "social command", usage: "!social" },
        { name: "!userphone", description: "userphone command", usage: "!userphone" }
      ],
    },
{
      name: "Economy",
      icon: Bot,
      commands: [
        { name: "!balance", description: "balance command", usage: "!balance" },
        { name: "!daily", description: "daily command", usage: "!daily" },
        { name: "!profile", description: "profile command", usage: "!profile" },
        { name: "!invest", description: "invest command", usage: "!invest" },
        { name: "!beg", description: "beg command", usage: "!beg" },
        { name: "!work", description: "work command", usage: "!work" },
        { name: "!mine", description: "mine command", usage: "!mine" },
        { name: "!fish", description: "fish command", usage: "!fish" },
        { name: "!farm", description: "farm command", usage: "!farm" },
        { name: "!crime", description: "crime command", usage: "!crime" },
        { name: "!economy", description: "economy command", usage: "!economy" },
        { name: "!shop", description: "shop command", usage: "!shop" },
        { name: "!slots", description: "slots command", usage: "!slots" },
        { name: "!roulette", description: "roulette command", usage: "!roulette" },
        { name: "!dice", description: "dice command", usage: "!dice" },
        { name: "!coinflip", description: "coinflip command", usage: "!coinflip" }
      ],
    },
{
      name: "Giveaways",
      icon: MessageSquare,
      commands: [
        { name: "!giveaway", description: "giveaway command", usage: "!giveaway" },
        { name: "!gstart", description: "gstart command", usage: "!gstart" },
        { name: "!gedit", description: "gedit command", usage: "!gedit" },
        { name: "!gend", description: "gend command", usage: "!gend" },
        { name: "!greroll", description: "greroll command", usage: "!greroll" },
        { name: "!gpause", description: "gpause command", usage: "!gpause" },
        { name: "!gresume", description: "gresume command", usage: "!gresume" },
        { name: "!gban", description: "gban command", usage: "!gban" },
        { name: "!gunban", description: "gunban command", usage: "!gunban" }
      ],
    },
{
      name: "Voice Control",
      icon: Globe,
      commands: [
        { name: "!vcmute", description: "vcmute command", usage: "!vcmute" },
        { name: "!vcunmute", description: "vcunmute command", usage: "!vcunmute" },
        { name: "!vckick", description: "vckick command", usage: "!vckick" },
        { name: "!vcpull", description: "vcpull command", usage: "!vcpull" },
        { name: "!vcpush", description: "vcpush command", usage: "!vcpush" },
        { name: "!vcmoveall", description: "vcmoveall command", usage: "!vcmoveall" },
        { name: "!vcdeafen", description: "vcdeafen command", usage: "!vcdeafen" },
        { name: "!vcundeafen", description: "vcundeafen command", usage: "!vcundeafen" },
        { name: "!vcrole", description: "vcrole command", usage: "!vcrole" },
        { name: "!vclist", description: "vclist command", usage: "!vclist" }
      ],
    },
{
      name: "Owner",
      icon: Shield,
      commands: [
        { name: "!eval", description: "eval command", usage: "!eval" },
        { name: "!execute", description: "execute command", usage: "!execute" },
        { name: "!reload", description: "reload command", usage: "!reload" },
        { name: "!reloadall", description: "reloadall command", usage: "!reloadall" },
        { name: "!restart", description: "restart command", usage: "!restart" },
        { name: "!blacklist", description: "blacklist command", usage: "!blacklist" },
        { name: "!blacklistuser", description: "blacklistuser command", usage: "!blacklistuser" },
        { name: "!blacklistserver", description: "blacklistserver command", usage: "!blacklistserver" },
        { name: "!updateslash", description: "updateslash command", usage: "!updateslash" },
        { name: "!noprefix", description: "noprefix command", usage: "!noprefix" }
      ],
    },
{
      name: "Searching",
      icon: Zap,
      commands: [
        { name: "!search", description: "search command", usage: "!search" }
      ],
    }
  ],

  team: [
    {
      name: "AeroX 1",
      role: "Founder & Lead Developer",
      bio: "Architects the core. Loves clean code and 3am refactors.",
      avatar: prayagAvatar,
      socials: { github: "#", twitter: "#" },
    },
    {
      name: "AeroX 2",
      role: "Product Designer",
      bio: "Crafts the pixels you fall in love with.",
      avatar: "",
      socials: { github: "#", twitter: "#" },
    },
  ],

  faqs: [
    {
      q: "Is Aerox free to use?",
      a: "Yes, all core features are completely free. We offer an optional Premium tier for advanced music quality and exclusive customization.",
    },
    {
      q: "How do I add Aerox to my server?",
      a: "Click the Invite button anywhere on the site, authorize the bot with the Manage Server permission, and you are ready in seconds.",
    },
    {
      q: "Does Aerox store my messages?",
      a: "No. We only store configuration data essential for commands. See our Privacy page for full details.",
    },
    {
      q: "Can I request a new feature?",
      a: "Absolutely. Join our support server and post in the #suggestions channel, we ship community ideas every week.",
    },
    {
      q: "What happens if the bot goes offline?",
      a: "Our infrastructure is multi-region with automatic failover. In the rare case of downtime, status updates are posted to our support server immediately.",
    },
  ],

  contact: {
    email: "xyz@gmail.com",
    discord: "https://discord.gg/aerox",
    github: "https://github.com/AeroXDevs",
    twitter: "https://twitter.com/nebula_bot",
  },

  socials: [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "xyz@gmail.com", label: "Email" },
  ],

  privacy: {
    lastUpdated: "April 18 2026",
    sections: [
      {
        title: "Information We Collect",
        body: "We collect minimal data required for the bot to function: server IDs, channel IDs, role IDs, and configuration preferences. We never store message content unless explicitly enabled by a server administrator for logging features.",
      },
      {
        title: "How We Use Your Data",
        body: "Your data is used solely to provide bot functionality such as remembering your server's prefix, custom commands, moderation logs, and music queues. We do not sell, rent, or share your data with third parties.",
      },
      {
        title: "Data Retention",
        body: "Configuration data persists while the bot remains in your server. When Nebula is removed, all associated data is automatically purged within 30 days.",
      },
      {
        title: "Your Rights",
        body: "You may request a full export or deletion of your data at any time by contacting our support team via email or Discord.",
      },
    ],
  },

  terms: {
    sections: [
      {
        title: "Acceptable Use",
        body: "By using Nebula, you agree not to abuse the service, attempt to bypass rate limits, or use the bot for illegal activities. Violations may result in a permanent ban from the service.",
      },
      {
        title: "Service Availability",
        body: "While we target 99.99% uptime, Nebula is provided as-is. We are not liable for service interruptions, data loss, or damages arising from use of the bot.",
      },
      {
        title: "Changes to These Terms",
        body: "We may update these terms occasionally. Continued use after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
