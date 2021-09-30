#! /usr/bin/bash
ALL_FILES=$(ls)
for FILE in $ALL_FILES
do
  case $FILE in

  *.mp3 | *.flac )
    mkdir -p ./music && mv $FILE ./music
    ;;
  
  *.png | *.jpg )
    mkdir -p ./images && mv $FILE ./images
    ;;

  *.avi | *.mov )
    mkdir -p ./videos && mv $FILE ./videos
    ;;

  *.log )
    rm -f *.log
    ;;
  esac
done