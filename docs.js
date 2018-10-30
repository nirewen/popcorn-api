'use strict';

const docma = require('docma');
const pkg = require('./package');

docma.create()
    .build({
        app: {
            title: pkg.name,
            base: '/popcorn-api',
            entrance: 'content:readme',
            routing: 'query',
            server: docma.ServerType.GITHUB,
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
            {readme: './README.md'},
            {popcorn: './dist/**/*.js'},
        ],
        jsdoc: {
            sort: false
        },
        dest: './docs',
        clean: true,
        template: {
            options: {
                title: pkg.name,
                navItems: [
                    {
                        label: 'Readme',
                        href: '?content=readme',
                    },
                    {
                        label: 'Documentation',
                        href: '?api=popcorn',
                        iconClass: 'ico-book',
                    },
                    {
                        label: 'GitHub',
                        href: pkg.repository.homepage,
                        target: '_blank',
                        iconClass: 'ico-md ico-github',
                    },
                ],
            },
        },
    })
    .catch(console.error);