#!/bin/bash

# Read the JSON file and extract the list of unused dependencies
unused_dependencies=$(jq -r '.dependencies[]' ./unused-deps.json)

# Loop through the unused dependencies and remove them
for dep in $unused_dependencies; do
  echo "Removing dependency: $dep"
  yarn remove "$dep"
done
