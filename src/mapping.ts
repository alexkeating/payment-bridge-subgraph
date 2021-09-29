import { log, BigInt } from "@graphprotocol/graph-ts";
import {
  PaymentBridgeFactory,
  NewPaymentBridge
} from "../generated/PaymentBridgeFactory/PaymentBridgeFactory";
import { Bridge } from "../generated/schema";

export function handleNewPaymentBridge(event: NewPaymentBridge): void {
  let bridgeId = event.address.toHex();
  log.info("Initializing PaymentBridge, {}", [bridgeId]);
  let bridge = new Bridge(bridgeId);
  bridge.bridgeOwner = event.params.bridgeOwner;
  bridge.bridge = event.params.bridge;
  bridge.save();
}
