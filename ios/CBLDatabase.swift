//
//  CBLDatabase.swift
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

@objc(CBLDatabase)
class CBLDatabase :
    NSObject, RCTBridgeModule {
    
    static func moduleName() -> String! {
        return "CBLDatabase"
    }
    
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc(logConsole:withLevel:errorBlock:)
    static func logConsole(domain: String,
                    level: String,
                    errorCallback:RCTResponseErrorBlock){
        
        guard !domain.isEmpty else {
            let error = NSError(domain: "\(ResponseStrings.InvalidArgs): domain", code: 1, userInfo: [NSLocalizedDescriptionKey: "\(ResponseStrings.InvalidArgs): domain"]);
            errorCallback(error);
            return
        }
        
        guard !level.isEmpty else {
            let error = NSError(domain: "\(ResponseStrings.InvalidArgs): level", code: 1, userInfo: [NSLocalizedDescriptionKey: "\(ResponseStrings.InvalidArgs): level"]);
            errorCallback(error);
            return
        }
        
        //set domain
        
        // todo CBL-Lite Enterprise
        // "listener": LogDomain.listener.rawValue
        Database.log.console.domains = switch domain {
            case "all": .all
            case "database": .database
            case "query": .query
            case "replicator": .replicator
            case "network": .network
            default: .database
        }
        
        //set log level
        Database.log.console.level = switch level {
            case "debug": .debug
            case "verbose": .verbose
            case "info": .info
            case "warning": .warning
            case "error": .error
            case "none": .none
            default: .info
        }
    }
}
