#!/bin/zsh

setopt errexit

tsc

source ${ZSH_SCRIPT:h}/.env

mkdir -p \
  ${ZSH_SCRIPT:h}/chrome \
  ${ZSH_SCRIPT:h}/firefox

zip "${ZSH_SCRIPT:h}/chrome/naviseal.zip" \
    --compression-method deflate \
    --wild-stop-dirs \
    --recurse-paths . \
    -i@publish.txt

web-ext build \
  --overwrite-dest

web-ext sign \
  --api-key=${AMO_JWT_ISSUER} \
  --api-secret=${AMO_JWT_SECRET} \
  --channel=unlisted
