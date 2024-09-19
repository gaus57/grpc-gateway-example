/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../fetch.pb"
import * as GoogleProtobufEmpty from "../google/protobuf/empty.pb"
export type PingResult = {
  message?: string
}

export type Item = {
  id?: string
  name?: string
}

export type CreateItemParams = {
  item?: Item
}

export type CreateItemResult = {
  item?: Item
}

export type GetItemParams = {
  id?: string
}

export type GetItemResult = {
  item?: Item
}

export type UpdateItemParams = {
  item?: Item
}

export type UpdateItemResult = {
  item?: Item
}

export type DeleteItemParams = {
  id?: string
}

export class ApiV0 {
  static Ping(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<PingResult> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, PingResult>(`/v0/ping?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static CreateItem(req: CreateItemParams, initReq?: fm.InitReq): Promise<CreateItemResult> {
    return fm.fetchReq<CreateItemParams, CreateItemResult>(`/v0/item`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetItem(req: GetItemParams, initReq?: fm.InitReq): Promise<GetItemResult> {
    return fm.fetchReq<GetItemParams, GetItemResult>(`/v0/item/${req["id"]}?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static UpdateItem(req: UpdateItemParams, initReq?: fm.InitReq): Promise<UpdateItemResult> {
    return fm.fetchReq<UpdateItemParams, UpdateItemResult>(`/v0/item`, {...initReq, method: "PUT", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteItem(req: DeleteItemParams, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<DeleteItemParams, GoogleProtobufEmpty.Empty>(`/v0/item/${req["id"]}`, {...initReq, method: "DELETE"})
  }
}