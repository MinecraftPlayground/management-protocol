import type { ExtractParams, ExtractResult, ParamsNever } from './json_rpc/schema/methods/index.ts';
import type { Methods } from './definitions/minecraft.ts';


export class Client<MethodNames extends Methods['name'] = Methods['name']> {
  private requestId : number = 0;
  constructor() {

  }

  public call<MethodName extends MethodNames>(
    method : MethodName,
    ...params : ParamsNever<ExtractParams<Methods, MethodName>>
  ) : Promise<ExtractResult<Methods, MethodName>> {
    const id = ++this.requestId;

    return new Promise((resolve, reject) => {
      
    });
  }
}

new Client().call('minecraft:allowlist')
