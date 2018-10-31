'use strict';

const docma = require('docma');
const pkg = require('./package');

docma.create()
    .build({
        app: {
            title: 'Popcorn Time API',
            base: '/',
            entrance: 'content:information',
            routing: 'query',
            server: docma.ServerType.GITHUB,
            meta: [
                {name: 'og:title', content: 'Popcorn Time API'},
                {name: 'og:url', content: 'https://popcorn-api.js.org/'},
                {name: 'og:image', content: 'https://popcorn-api.js.org/img/logo.png'},
                {name: 'og:description', content: 'A JavaScript library to easily access the Popcorn Time API'},
                {name: 'og:site_name', content: 'Nirewen'},
                {name: 'og:keywords', content: 'popcorn,time,api,javascript,nodejs'},
                {name: 'theme-color', content: '#f1dec6'}
            ]
        },
        markdown: {
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: false,
            smartypants: false,
            tasks: false,
            emoji: true,
        },
        assets: {
            '/': './img/favicon.ico',
            '/img/': './img/logo.png'
        },
        src: [
            {information: './README.md'},
            {examples: './examples/examples.md'},
            {popcorn: './dist/**/*.js'},
        ],
        jsdoc: {
            sort: 'kind'
        },
        dest: './docs',
        clean: true,
        template: {
            options: {
                title: 'Popcorn Time API',
                logo: 'img/logo.png',
                sidebar: {
                    itemsFolded: true
                },
                navbar: {
                    menu: [
                        {
                            label: 'Information',
                            href: '?content=information',
                            iconClass: 'fas fa-info'
                        },
                        {
                            label: 'Examples',
                            href: '?content=examples',
                            iconClass: 'fab fa-js'
                        },
                        {
                            label: 'Documentation',
                            href: '?api=popcorn',
                            iconClass: 'fas fa-book',
                        },
                        {
                            href: pkg.repository.homepage,
                            target: '_blank',
                            iconClass: 'fab fa-github',
                        },
                    ],
                }
            },
        },
    })
    .catch(console.error);
