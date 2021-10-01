import { BigInt, log } from "@graphprotocol/graph-ts";
import { Payment as BridgePayment } from "../generated/templates/PaymentBridge/PaymentBridge";
import { Payment, Bridge } from "../generated/schema";

export function handlePayment(event: BridgePayment): void {
  let paymentId = event.address.toHex();
  log.info("Initializing Payment, {}", [paymentId]);
  let payment = new Payment(paymentId);
  payment.tokenAddress = event.params.token;
  payment.payer = event.params.payer;
  payment.recipient = event.params.recipient;
  payment.save();
}
