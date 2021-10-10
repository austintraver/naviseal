#!/bin/zsh

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
  --artifacts-dir "${ZSH_SCRIPT:h}/firefox" \
  --overwrite-dest

web-ext sign \
  --artifacts-dir "${ZSH_SCRIPT:h}/firefox" \
  --api-key=${AMO_JWT_ISSUER} \
  --api-secret=${AMO_JWT_SECRET} \
  --id '{2a3c73f9-7877-4b44-939e-f55dd85be49d}' \
  --channel=unlisted
