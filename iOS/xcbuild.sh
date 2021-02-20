#!/bin/bash

echo "是否更换Framework的名字(yes/no)"
read -t 3 OPTIONS; 
SNAME=
FILES=$(ls)

if [[ $OPTIONS = "yes" ]]; then
	read -p "请输入Framework的名字 > " NAME
	if [[ -z $NAME  ]]; then
		echo "Framework 名字输入错误 请重新执行"
		exit;
	else
		SNAME=$NAME
	fi	
fi

for file in $FILES; do
    if [[ "$file" =~ .+xcodeproj$ ]]; then
        PROJECTNAME="$file"
        PROJECTNAME=${PROJECTNAME/%.xcodeproj/""}
        echo ${#SNAME}
        if [[ ${#SNAME} -lt 1 ]]; then
        	SNAME=$PROJECTNAME	
        fi	
        break;
    fi
done

echo "开始打包============================================================================"

xcodebuild archive \
 		  -scheme $PROJECTNAME \
 		  -sdk iphoneos \
  		  -archivePath "archives/"$SNAME"_devices.xcarchive" \
  		  BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
  		  SKIP_INSTALL=NO

xcodebuild archive \
  		   -scheme $PROJECTNAME \
 		   -sdk iphonesimulator \
 		   -archivePath "archives/"$SNAME"_simulators.xcarchive" \
  		   BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
  		   SKIP_INSTALL=NO

xcodebuild -create-xcframework \
   		   -framework archives/"$SNAME"_devices.xcarchive/Products/Library/Frameworks/"$PROJECTNAME".framework \
   		   -framework archives/"$SNAME"_simulators.xcarchive/Products/Library/Frameworks/"$PROJECTNAME".framework \
  		   -output build/"$SNAME".xcframework
echo "结束打包================================================================================="