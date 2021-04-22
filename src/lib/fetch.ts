interface ObjDate {
  [key: string]: unknown;
}
interface Init extends Omit<RequestInit, 'method'|'body' >{
  body?: BodyInit|ObjDate|null;
}
function isObjDate (body: BodyInit|ObjDate|undefined|null): body is ObjDate {
  return Boolean(body ?? typeof body === 'object')
}
export default function wahtFetch (input: RequestInfo, method: 'GET'|'POST'| 'PUT'| 'DELETE', init: Init|undefined): Promise<Response> {
  let fetchInit: RequestInit = { method }
  if (init !== undefined) {
    if (isObjDate(init.body)) {
      init.body = JSON.stringify(init.body)
    }
    fetchInit = { ...fetchInit, ...init, body: init.body }
    if (fetchInit.method !== 'GET') {
      fetchInit.headers = {
        'Content-Type': 'application/json',
        ...fetchInit.headers
      }
    }
  }
  return fetch(input, fetchInit)
}
