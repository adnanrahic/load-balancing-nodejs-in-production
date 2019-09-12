#!/bin/bash

num_cpus=$(grep -c ^processor /proc/cpuinfo)
init_port=3000
for num in $(seq 1 $num_cpus); do 
  port=$((init_port + num))
  systemctl stop nodeapp${port}
done

exit 0
