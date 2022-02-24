#!/bin/bash

version=$1

function join {
    local IFS="$1"
    shift
    echo "$*"
}

# get the root path of the directory this file resides
# this enables this script to be called from any path
# https://gist.github.com/olegch/1730673
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

keywords=(
    "k8scommerce"
    "admin gateway api"
)
keywords_json=$(printf '%s\n' "${keywords[@]}" | jq -R . | jq -s .)

# set the original and destination vars
# orig=https://raw.githubusercontent.com/k8scommerce/k8scommerce/main/docs/swagger/v1/admin.json
# orig=https://raw.githubusercontent.com/k8scommerce/k8scommerce/feature/cart/docs/swagger/v1/admin.json
orig=$ROOT/../../k8scommerce/docs/swagger/v1/admin.json
dest=$ROOT/../projects/admin-gateway-sdk/src/lib/
# # npm i ng-openapi-gen -g

# remove the dist directory
rm -rf $ROOT/../dist

# generate for angular
openapi --input $orig --output $dest --client angular

# add the version number to the newly created package.json
perl -pi -e "BEGIN{undef $/;} s/\"version\": \"\d+\.\d+\.\d+\",/\"version\": \"$version\",/smg" $ROOT/../package.json
perl -pi -e "BEGIN{undef $/;} s/\"version\": \"\d+\.\d+\.\d+\",/\"version\": \"$version\",/smg" $ROOT/../projects/admin-gateway-sdk/package.json

# remove the package-lock.json file
rm -rf $ROOT/../package-lock.json

# build the project
npm run build

# push to github
$ROOT/gitpush.sh k8scommerce admin-gateway-sdk "update to version ${version}" "github.com"

# publish to npm
cd $ROOT/../dist/admin-gateway-sdk && npm publish && cd $ROOT
