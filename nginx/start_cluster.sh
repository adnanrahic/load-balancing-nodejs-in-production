#!/bin/bash

num_cpus=$(grep -c ^processor /proc/cpuinfo)
for num in $(seq 1 $num_cpus); do 
  port=$((3000 + num))
  systemctl start app@${port}
done

exit 0
