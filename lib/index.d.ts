import BaseComponent from './common/base';
import { InputProps } from './common/entity';
export default class ComponentDemo extends BaseComponent {
    constructor(props: any);
    /**
     * demo 实例
     * @param inputs
     * @returns
     */
    test(inputs: InputProps): Promise<{
        fcdeploy: any;
        website: any;
        domain: any;
        jamstack: any;
        fcapi: any;
        fcdefault: any;
        fcbasesdk: any;
    }>;
}
