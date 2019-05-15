import { Injectable } from '@angular/core';
import {NGXLoggerMonitor, NGXLogInterface, NGXLogger} from 'ngx-logger';
 
export class MyLoggerMonitor implements NGXLoggerMonitor {
    onLog(log: NGXLogInterface) {
      console.log('Console Logger', log);
    }
  }

@Injectable()
export class LogService  {
  constructor(private logger: NGXLogger) {
    this.logger.registerMonitor(new MyLoggerMonitor())
  }

  log(...str: any[]) {
    this.logger.log(str);
  }
}
