Package.describe({
    name: 'rlespagnol:skeleton-css'
    , version: '0.0.1'
    , // Brief, one-line summary of the package.
    summary: 'A package to add the Skeleton framework to Meteor'
    , // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/Themandunord/skeleton-css.git'
    , // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.add_files([
    'Skeleton/css/normalize.css'
    , 'Skeleton/css/skeleton.css'
  ], ['client']);
});