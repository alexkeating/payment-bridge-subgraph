import { BigInt, log } from "@graphprotocol/graph-ts";
import {
	Payment as BridgePayment
} from "../generated/PaymentBridgeFactory/PaymentBridgeFactory";
import { Payment, Bridge } from "../generated/schema";

export function handlePayment = (event: BridgePayment) => {
	let paymentId = event.address.toHex()
	log.info("Initializing Payment, {}", [paymentId]);
	let payment = new Payment(paymentId);
	payment.tokenAddress = event.params.tokenAddress;
	payment.payee = event.params.payee;
	payment.recipient = event.params.recipient;
	payment.save()
}
