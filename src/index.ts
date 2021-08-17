import BaseComponent from './common/base';
import logger from './common/logger';
import { InputProps } from './common/entity';
import { loadComponent } from '@xsahxl/core';

export default class ComponentDemo extends BaseComponent {
  constructor(props) {
    super(props);
  }
  /**
   * demo 实例
   * @param inputs
   * @returns
   */
  public async test(inputs: InputProps) {
    logger.info('download fc-deploy ncc test');
    const fcdeploy = await loadComponent('fc-deploy');
    logger.info('download website not ncc test');
    const website = await loadComponent('website');
    logger.info('download many component');
    const domain = await loadComponent('domain');
    const jamstack = await loadComponent('jamstack-api');
    const fcapi = await loadComponent('fc-api');
    const fcdefault = await loadComponent('fc-default');
    const fcbasesdk = await loadComponent('fc-base-sdk');
    return { fcdeploy, website, domain, jamstack, fcapi, fcdefault, fcbasesdk };
  }
}
