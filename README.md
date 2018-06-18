# vue-wp-api-rest

> A Vue.js blog-app with Vue Router and Vuex using JWT for auth and Wordpress with WP API Rest

## Build Setup

``` bash
# download and install a new Wordpress project on localhost/

# download, install and activate [JWT Authentication for WP-API]('https://it.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/') plugin and check for your wp-config.php file to include
`define('JWT_AUTH_SECRET_KEY', 'yoursecretkey');`

# on your Wordpress main directory check for the .htaccess to include  
`# BEGIN WordPress`
`<IfModule mod_rewrite.c>`
`RewriteEngine On`
`RewriteBase /wordpress/`
`RewriteRule ^index\.php$ - [L]`
`RewriteCond %{REQUEST_FILENAME} !-f`
`RewriteCond %{REQUEST_FILENAME} !-d`
`RewriteRule . /wordpress/index.php [L]`
`RewriteCond %{HTTP:Authorization} ^(.*)`
`SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1`
`</IfModule>`
`# END WordPress`


# download, install and activate [Better REST API Featured Images](https://wordpress.org/plugins/better-rest-api-featured-images/) plugin

# create new categories and articles or use [FakerPress](https://wordpress.org/plugins/fakerpress/) plugin

# install all dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
