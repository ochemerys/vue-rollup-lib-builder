# Vue Rollup library boilerplate

The boilerplate allows quickly create a project for building Vue.js components library with rollup.js.

## Setup project

Clone repository and install dependencies

``` bush
git clone https://github.com/ochemerys/vue-rollup-lib-builder.git
npm install
```

## Run project in development mode

Run in dev server

``` bush
npm run serve
```

and open in browser provided url

## Run unit tests

``` bush
npm t
```

## Configuration of build process

```rollup.config.js``` under ```build``` folder contains settings to build custom library

Names of files created during the build process are configured by output configuration "file" option.

Created library namespace is configured by output configuration "name" option.

for example:

``` javascript
output: {
      compact: true,
      file: 'dist/sample-vue-rollup-lib.ssr.js',
      format: 'cjs',
      name: 'VueCustomLib',
      exports: 'named',
      globals,
    },
```

## Run Build

To build components library run

``` bush
npm run build
```

and to see created js files, go to dist folder to list created files

``` bush
cd dist
ls
```

## Implementation example

index.html is an example of library implementation

After build open in browser index.html to see example

Notes:

To use the library on html page with vue.js, add script tag pointing to created js min file.

``` html
 <script src="./dist/sample-vue-rollup-lib.min.js"></script>  
```

To let Vue know about components

``` javascript
Vue.use(VueCustomLib.HelloWorld);
Vue.use(VueCustomLib.AppBanner);
```

where "VueCustomLib" is configured namespace for the library.
