import { BigInt } from "@graphprotocol/graph-ts";
import {
	Payment as BridgePayment
} from "../generated/PaymentBridgeFactory/PaymentBridgeFactory";
import { Payment } from "../generated/schema";

export function handlePayment = (event: BridgePayment) => {
	let paymentId = event.address.toHex

}
