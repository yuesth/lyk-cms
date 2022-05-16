module.exports = ({})=>({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: {
        keys: env.array('APP_KEYS')
    }
})