#!/bin/bash

version=$1

orig=https://raw.githubusercontent.com/k8scommerce/k8scommerce/main/docs/swagger/v1/admin.json
dest=.

# get the root path of the directory this file resides
# this enables this script to be called from any path
# https://gist.github.com/olegch/1730673
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

# generate the
openapi-generator generate \
    -g typescript-angular \
    -i https://raw.githubusercontent.com/k8scommerce/k8scommerce/main/docs/swagger/v1/admin.json \
    -o $ROOT/../$dest \
    --additional-properties=platform=browser,npmName=@k8scommerce/admin-gateway-sdk,npmVersion=$version

# currently there is an error in the generator
# that makes the delete method have 3 params instead of two
# let's fix them

perl -pi -e 'BEGIN{undef $/;} s/(return\s+this.httpClient.delete)(.*?)\n\s+body,(.*?);/$1$2$3;/smg' $ROOT/../$dest/api/admin.service.ts

# push to github
$ROOT/gitpush.sh k8scommerce admin-gateway-sdk "update to version ${version}" "github.com"

# publish to npm
npm publish


