import type { ExtractParams, ExtractResult, ParamsNever } from './json_rpc/schema/index.ts';
import type { minecraft } from './definitions/index.ts';
import type { MethodObjectDefinition } from './json_rpc/schema/method_object_definition.ts';
import type { NotificationObjectDefinition } from './json_rpc/schema/notification_object_definition.ts';


export class Client<Methods extends MethodObjectDefinition | NotificationObjectDefinition = minecraft.methods.All> {
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

  public notify<MethodName extends Methods['name']>(
    method : MethodName,
    listener : (...params : ExtractParams<Methods, MethodName>) => void
  ) : void {
    
  }
}

