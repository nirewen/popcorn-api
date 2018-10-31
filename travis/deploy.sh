#!/bin/bash

set -e

if [ "$TRAVIS_BRANCH" != "master" -o -n "$TRAVIS_TAG" -o "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo -e "Not building for a non master branch push - building without deploying."
  npm run build
  npm run docs
  exit 0
fi

echo -e "Building for a master branch push - building and deploying."

REPO=$(git config remote.origin.url)
SHA=$(git rev-parse --verify HEAD)

TARGET_BRANCH="gh-pages"
git clone $REPO distr -b $TARGET_BRANCH

npm run build
npm run docs

rsync -vau docs/ distr/

cd distr
git add --all .
git config user.name "Travis CI"
git config user.email "${COMMIT_EMAIL}"
git commit -m "Docs build: ${SHA}" || true
git push "https://${GH_TOKEN}@${GH_REF}" $TARGET_BRANCH
