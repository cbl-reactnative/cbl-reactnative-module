//
//  CBLLogDomain.swift
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//

import Foundation
import CouchbaseLiteSwift

@objc(CBLLogDomain)
class CBLLogDomain : NSObject, RCTBridgeModule {
    
    @objc
    static func moduleName() -> String! {
        return "CBLLogDomain";
    }
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
     @objc(getDomains:)
     func getDomains(_ callback: RCTResponseSenderBlock) {
        let domains = [
            "rawValue",
            "all",
            "database",
            "query",
            "replicator",
            "network",
            //"listener"
        ]
        callback([NSNull(), domains])
    }
    
}