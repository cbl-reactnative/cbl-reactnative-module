# Overview
A reference implementation of a React Native for Couchbase Lite on iOS, Mac Catalyst, and Android.

> **⚠ NOTE:** The plugin is not officially supported by Couchbase and there are no guarantees that the APIs exported by the module are up to date with the latest version of Couchbase Lite.

React Native Modules allow mobile apps written in React Native to access native platform APIs. 

**LICENSE**: The source code for the plugin is Apache-licensed, as specified in LICENSE. However, the usage of Couchbase Lite will be guided by the terms and conditions specified in Couchbase's Enterprise or Community License agreements respectively

## Getting Started

Creating modules can be rather fragile and running the wrong yarn command in the wrong directory will destory all your hard work.  To start out, there is a clean.sh script you can run to set yourself back to normal if you break:

```sh
./clean.sh
```

Next, in the "ROOT" directory, you will need to run the following commands:

```sh
yarn
cd example/ios/
pod install
cd ../../
yarn example ios
```

This installs the CocoaPods for the example app and runs the example app on the iOS simulator.  Note all the rules about simulators with iOS and React Native still apply with Metro.
