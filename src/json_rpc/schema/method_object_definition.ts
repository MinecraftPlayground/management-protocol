export interface MethodObjectDefinition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> {
  type : 'method',
  name : Name,
  params : Params,
  result : Result
}
