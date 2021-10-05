#!/bin/bash
# -O option to download the file with the same name as in the URL
curl -s https://coderbyte.com/api/challenges/logs/web-logs-raw -O > /dev/null
cat web-logs-raw | grep -F 'coderbyte heroku/router' |
# -F option for the input field sperator (white spaces is the default) so the => -F ' ' option here is redundant
# $10 here is the field number
awk -F' ' '{print $10; if($11== "fwd=\"MASKED\""){print "[M]"}}' | 
# -d option for the delimiter and -f for field number
cut -d "=" -f 2 