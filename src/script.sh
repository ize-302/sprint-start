#!/bin/bash

name=$1
description=$2
language=$3
type=$4
boot_version=$5
group_id=$6
artifact_id=$7
package_name=$8
java_version=$9
target=${10}

cmd=(
	spring init
	--name "$name"
	--description "$description"
	--language "$language"
	--type "$type"
	--boot-version "$boot_version"
	--group-id "$group_id"
	--artifact-id "$artifact_id"
	--package-name "$package_name"
	--java-version "$java_version"
	$target
)
"${cmd[@]}"

