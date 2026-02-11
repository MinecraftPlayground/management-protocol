import type { ExtractParams, ExtractResult, ParamsNever } from './json_rpc/schema/methods/index.ts';
import type { minecraft } from './definitions/index.ts';
import type { MethodObject } from './json_rpc/schema/method_object.ts';


export class Client<Methods extends MethodObject = minecraft.methodes.All> {
  private requestId : number = 0;
  constructor() {

  }

  public call<MethodName extends Methods['name']>(
    method : MethodName,
    ...params : ParamsNever<ExtractParams<Methods, MethodName>>
  ) : Promise<ExtractResult<Methods, MethodName>> {
    const id = ++this.requestId;

    return new Promise((resolve, reject) => {
      
    });
  }
}

