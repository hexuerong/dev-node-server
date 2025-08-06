const ENV = {
  development: 'development',
  production: 'production'
}

export default {
  apps: [
    {
      name: 'koa-app',
      script: './src/app.ts',
      watch: './src',
      env_production: {
        NODE_ENV: ENV.development
      },
      env_development: {
        NODE_ENV: ENV.production
      }
    }
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
