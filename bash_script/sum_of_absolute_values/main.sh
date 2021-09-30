#!/usr/bin/bash
declare -a AbsoluteValues
sum=0
echo 'enter three numerical values seperated by a space: '
read -a values
# "${!values[@]}" will return the list of all array indices
for value in "${!values[@]}"
do
  if [ "${values[value]}" -lt 0 ]
  then
    PositiveVal="${values[value]}"*-1
    AbsoluteValues[value]=$PositiveVal
  else
    AbsoluteValues[value]=${values[value]}
  fi
# the $((...)) is an arthimtic expansion (do arthimtic operation inside) 
  sum=$(($sum+${AbsoluteValues[value]}))
done
echo $sum
