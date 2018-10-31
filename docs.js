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
            //server: docma.ServerType.GITHUB,
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
        src: [
            {information: './README.md'},
            {examples: './examples/examples.md'},
            {popcorn: './dist/**/*.js'},
        ],
        jsdoc: {
            sort: "kind"
        },
        dest: './docs',
        clean: true,
        template: {
            options: {
                title: "Popcorn Time API",
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