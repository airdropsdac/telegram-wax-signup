const dotenv = require("dotenv")
dotenv.config()

const { EOSIO_PRIVATE_KEYS, TELEGRAM_BOT_API_KEY, WAX_ACCOUNT_NAME, WAX_PERMISSION } = process.env
if(!EOSIO_PRIVATE_KEYS || !TELEGRAM_BOT_API_KEY) throw new Error(`Missing secret env variables`)
const config = {
    "keys": {
        "bot": TELEGRAM_BOT_API_KEY,
        "wax": EOSIO_PRIVATE_KEYS.split(`;`),
    },
    "authorizedChatGroupIds": [-1001182060025],
    "adminUsers": [351493783, 531086315],
    "waxAccountName": WAX_ACCOUNT_NAME || "waxmeetupbot",
    "waxPermission": WAX_PERMISSION || "active",
    "waxSmartContractName": "signupwaxwax",
    "waxAmount": "1.50000000 WAX",
    "waxRpcEndpoint": "https://chain.wax.io",
    "eosRpcEndpoint": "https://eos.eosn.io",
    "shouldPostLinkToAccountAfterCreation": true,
    "newUserDelayMs": 65000,
    "telegramDeveloperId": 531086315
}

module.exports = config