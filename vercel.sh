#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "master" ]]; then 
  echo "This is our main branch"
  npm run build
elif [[ $VERCEL_GIT_COMMIT_REF == "staggin" ]]; then 
  echo "This is our staggin branch"
  npm run build:staggin
else
  echo "This is not our main or staggin branch"
  npm run build:development
fi
