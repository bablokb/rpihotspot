#!/bin/bash

# '{"constatus": "up", 
#   "contime": "12:33", 
#   "localip": "10.1.2.3", 
#   "remoteip": "10.1.1.1", 
#   "conclients": "5"
#  }'

ppp0=`LANG=en ifconfig ppp0 | grep "inet addr"`
if [ -z "$ppp0" ]; then
  constatus="down"
else
  constatus="up"
  read contime < <(ps -p `cat /var/run/ppp0.pid` -o etime=)
  read inet localip remoteip mask <<< "$ppp0"
  localip="${localip#*:}"
  remoteip="${remoteip#*:}"
fi

conclients=`arp -an -i br0 | grep br0 | wc -l`

cat << EOF
{ "constatus": "$constatus",
  "contime": "$contime",
  "localip": "$localip",
  "remoteip": "$remoteip",
  "conclients": "$conclients"
}
EOF