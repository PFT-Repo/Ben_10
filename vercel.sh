#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "master"  ]] ; then 
  echo "This is our main branch"
  npm run build:main
else if [[ $VERCEL_GIT_COMMIT_REF == "staggin"  ]] ; then 
  echo "This is our staggin branch"
  npm run build:staggin
else
  echo "This is not our main branch"
  npm run build:development
fi