"use client"

import { useState } from "react"
import { CreditCard, Lock, ChevronDown, Check, AlertCircle } from "lucide-react"
import "./payment-styles.css"

export default function TemuPaymentGateway() {
  const [selectedPayment, setSelectedPayment] = useState("card")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const [name, setName] = useState("")

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return value
  }

  return (
    <div className={`temu-payment-container`}>
      <div className="temu-payment-header">
        <h1>Finalizar Pago</h1>
      </div>

      <div className="temu-payment-summary">
        <div className="temu-payment-summary-header">
          <h2>Resumen del pedido</h2>
          <button className="temu-collapse-btn">
            <ChevronDown size={20} />
          </button>
        </div>
        <div className="temu-payment-summary-content">
          <div className="temu-payment-item">
            <div className="temu-payment-item-name">Subtotal</div>
            <div className="temu-payment-item-price">$59.99</div>
          </div>
          <div className="temu-payment-item">
            <div className="temu-payment-item-name">Envío</div>
            <div className="temu-payment-item-price">$4.99</div>
          </div>
          <div className="temu-payment-item temu-payment-total">
            <div className="temu-payment-item-name">Total</div>
            <div className="temu-payment-item-price">$64.98</div>
          </div>
        </div>
      </div>

      <div className="temu-payment-methods">
        <h2>Método de pago</h2>
        <div className="temu-payment-options">
          <div
            className={`temu-payment-option ${selectedPayment === "card" ? "selected" : ""}`}
            onClick={() => setSelectedPayment("card")}
          >
            <div className="temu-payment-option-radio">{selectedPayment === "card" && <Check size={16} />}</div>
            <div className="temu-payment-option-icon">
              <CreditCard size={20} />
            </div>
            <div className="temu-payment-option-label">Tarjeta de crédito/débito</div>
          </div>

          <div
            className={`temu-payment-option ${selectedPayment === "paypal" ? "selected" : ""}`}
            onClick={() => setSelectedPayment("paypal")}
          >
            <div className="temu-payment-option-radio">{selectedPayment === "paypal" && <Check size={16} />}</div>
            <div className="temu-payment-option-icon paypal-icon">
              <span className="paypal-text">
                Pay<span className="paypal-text-pal">Pal</span>
              </span>
            </div>
            <div className="temu-payment-option-label">PayPal</div>
          </div>
        </div>
      </div>

      {selectedPayment === "card" && (
        <div className="temu-payment-form">
          <div className="temu-form-group">
            <label htmlFor="cardNumber">Número de tarjeta</label>
            <div className="temu-input-wrapper">
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                maxLength={19}
              />
              <div className="temu-card-icons">
                <span className="temu-card-icon visa"></span>
                <span className="temu-card-icon mastercard"></span>
                <span className="temu-card-icon amex"></span>
              </div>
            </div>
          </div>

          <div className="temu-form-row">
            <div className="temu-form-group">
              <label htmlFor="expiry">Fecha de expiración</label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/AA"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                maxLength={5}
              />
            </div>
            <div className="temu-form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                maxLength={4}
              />
            </div>
          </div>

          <div className="temu-form-group">
            <label htmlFor="name">Nombre en la tarjeta</label>
            <input
              type="text"
              id="name"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      )}

      <button className="temu-payment-button">Pagar $64.98</button>

      <div className="temu-payment-security">
        <Lock size={16} />
        <span>Pago seguro con cifrado SSL</span>
      </div>

      <div className="temu-payment-info">
        <div className="temu-payment-info-item">
          <AlertCircle size={16} />
          <span>
            Al realizar tu compra, aceptas nuestros <a href="#">Términos y Condiciones</a> y{" "}
            <a href="#">Política de Privacidad</a>.
          </span>
        </div>
      </div>
    </div>
  )
}
