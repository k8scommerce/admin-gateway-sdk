#!/bin/bash

orig=https://raw.githubusercontent.com/k8scommerce/k8scommerce/main/docs/swagger/v1/admin.json
dest=src

# get the root path of the directory this file resides
# this enables this script to be called from any path
# https://gist.github.com/olegch/1730673
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

# generate the 
openapi-generator generate -g typescript-angular -i https://raw.githubusercontent.com/k8scommerce/k8scommerce/main/docs/swagger/v1/admin.json -o $ROOT/../$dest

# currently there is an error in the generator 
# that makes the delete method have 3 params instead of two
# let's fix them

perl -pi -e 'BEGIN{undef $/;} s/(return\s+this.httpClient.delete)(.*?)\n\s+body,(.*?);/$1$2$3;/smg' $ROOT/../$dest/api/admin.service.ts
