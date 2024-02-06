#!/usr/bin/expect

#set timeout of command to prevent hanging 
set timeout -1

# spawn yarn
spawn yarn 

# wait for process to complete
expect eof

cd example
cd ios 
spawn pod install
expect eof 