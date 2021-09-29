// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Bridge extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bridgeOwner", Value.fromBytes(Bytes.empty()));
    this.set("bridge", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bridge entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bridge entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bridge", id.toString(), this);
    }
  }

  static load(id: string): Bridge | null {
    return changetype<Bridge | null>(store.get("Bridge", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bridgeOwner(): Bytes {
    let value = this.get("bridgeOwner");
    return value!.toBytes();
  }

  set bridgeOwner(value: Bytes) {
    this.set("bridgeOwner", Value.fromBytes(value));
  }

  get bridge(): Bytes {
    let value = this.get("bridge");
    return value!.toBytes();
  }

  set bridge(value: Bytes) {
    this.set("bridge", Value.fromBytes(value));
  }
}

export class Payment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("payee", Value.fromBytes(Bytes.empty()));
    this.set("recipient", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Payment entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Payment", id.toString(), this);
    }
  }

  static load(id: string): Payment | null {
    return changetype<Payment | null>(store.get("Payment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get payee(): Bytes {
    let value = this.get("payee");
    return value!.toBytes();
  }

  set payee(value: Bytes) {
    this.set("payee", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }
}
