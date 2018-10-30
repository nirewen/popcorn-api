#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

function docGen {
  npm run-script docs
}
NODE_VERSION=`node --version`
NODE_VERSION=${NODE_VERSION:1:1}

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" -o "$NODE_VERSION" != "5" ]; then
    echo "Skipping deploy; just doing a build."
    exit 0
fi

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

git clone $REPO docs
cd docs
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

rm -rf docs/**/* || exit 0

docGen

cd docs
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"

git push $SSH_REPO $TARGET_BRANCH