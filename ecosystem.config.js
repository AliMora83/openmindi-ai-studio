// ecosystem.config.js
module.exports = {
    apps: [{
        name: 'openmindi-studio',
        script: 'node_modules/.bin/next',
        args: 'start -p 5000',
        cwd: '/var/www/openmindi-studio',
        env: {
            NODE_ENV: 'production',
            PORT: 5000
        }
    }]
}
