"use client"

import { useState } from "react"
import {
  Check,
  ChevronDown,
  ChevronUp,
  Edit,
  Home,
  Info,
  Lock,
  Search,
  ShieldCheck,
  ShoppingBag,
  User,
  X,
} from "lucide-react"
import "./checkout-styles.css"

export default function TemuCheckout() {
  const [showCardModal, setShowCardModal] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [expMonth, setExpMonth] = useState("")
  const [expYear, setExpYear] = useState("")
  const [cvv, setCvv] = useState("")
  const [showOrderSummary, setShowOrderSummary] = useState(true)
  const [donateTree, setDonateTree] = useState(false)

  const [showAddressForm, setShowAddressForm] = useState(false)
  const [addressSaved, setAddressSaved] = useState(false)
  const [name, setName] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [country, setCountry] = useState("Ecuador")
  const [phone, setPhone] = useState("")

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

  return (
    <div className="temu-app">
      <header className="temu-header">
        <div className="temu-header-content">
          <div className="temu-logo">
            <span className="temu-logo-text">Temu</span>
          </div>
          <div className="temu-search">
            <Search size={18} />
            <input type="text" placeholder="Buscar en Temu" />
          </div>
          <div className="temu-header-icons">
            <div className="temu-header-icon">
              <Home size={20} />
              <span>Inicio</span>
            </div>
            <div className="temu-header-icon">
              <ShoppingBag size={20} />
              <span>Carrito</span>
            </div>
            <div className="temu-header-icon">
              <User size={20} />
              <span>Yo</span>
            </div>
          </div>
        </div>
      </header>

      <div className="temu-checkout-container">
        <div className="temu-checkout-content">
          <div className="temu-checkout-products">
            <div className="temu-product-item">
              <div className="temu-product-image">
                <div className="temu-placeholder-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdWbOlLA4ZatoqPixOtellEk3xmna9PWHwA&s" alt="" /></div>
              </div>
              <div className="temu-product-info">
                <div className="temu-product-name">iPhone 12 Pro Max - 128GB - Azul Pacífico</div>
                <div className="temu-product-price">
                  <span className="temu-price-free">GRATIS</span>
                  <span className="temu-price-original">$999.00</span>
                </div>
                <div className="temu-product-tag">
                  <span className="temu-tag-limited">-100%</span> Tiempo limitado
                  <div className="temu-countdown">05:00:19:22</div>
                </div>
              </div>
            </div>

            <div className="temu-product-item">
              <div className="temu-product-image">
                <div className="temu-placeholder-image"><img src="https://m.media-amazon.com/images/I/71hTPUX4+lL._AC_UF894,1000_QL80_.jpg" alt="" /></div>
              </div>
              <div className="temu-product-info">
                <div className="temu-product-name">Collar de Plata 925 con Colgante de Corazón</div>
                <div className="temu-product-price">
                  <span className="temu-price-free">GRATIS</span>
                  <span className="temu-price-original">$29.99</span>
                </div>
                <div className="temu-product-tag">
                  <span className="temu-tag-discount">$0.56 de descuento extra</span>
                </div>
              </div>
            </div>

            <div className="temu-product-item">
              <div className="temu-product-image">
                <div className="temu-placeholder-image"><img src="https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/britany-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg" alt="" /></div>
              </div>
              <div className="temu-product-info">
                <div className="temu-product-name">Anillo Ajustable Chapado en Oro 18K</div>
                <div className="temu-product-price">
                  <span className="temu-price-free">GRATIS</span>
                  <span className="temu-price-original">$15.99</span>
                </div>
                <div className="temu-product-tag">
                  <span className="temu-tag-limited">-100%</span> Tiempo limitado
                </div>
              </div>
            </div>

            <div className="temu-gift-message">
              <div className="temu-gift-icon">🎁</div>
              <div>Agregar una tarjeta de mensaje de regalo gratis</div>
              <div className="temu-gift-arrow">›</div>
            </div>
          </div>

          <div className="temu-shipping-address">
            <h2>Dirección de envío</h2>

            {!addressSaved && !showAddressForm && (
              <div className="temu-no-address">
                <div className="temu-no-address-message">No has agregado una dirección de envío</div>
                <button className="temu-add-address-button" onClick={() => setShowAddressForm(true)}>
                  Agregar dirección
                </button>
              </div>
            )}

            {addressSaved && !showAddressForm && (
              <div className="temu-address-content">
                <div className="temu-address-info">
                  <div className="temu-address-name">{name}</div>
                  <div className="temu-address-details">
                    {street}, {city}, {state} {zipCode}, {country}
                  </div>
                  <div className="temu-address-phone">{phone}</div>
                </div>
                <button className="temu-edit-address" onClick={() => setShowAddressForm(true)}>
                  <Edit size={16} /> Editar
                </button>
              </div>
            )}

            {showAddressForm && (
              <div className="temu-address-form">
                <div className="temu-form-group">
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre y apellido"
                  />
                </div>

                <div className="temu-form-group">
                  <label htmlFor="street">Dirección *</label>
                  <input
                    type="text"
                    id="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Calle, número, colonia"
                  />
                </div>

                <div className="temu-form-row">
                  <div className="temu-form-group">
                    <label htmlFor="city">Ciudad *</label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ciudad"
                    />
                  </div>

                  <div className="temu-form-group">
                    <label htmlFor="state">Estado/Provincia *</label>
                    <input
                      type="text"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Estado o provincia"
                    />
                  </div>
                </div>

                <div className="temu-form-row">
                  <div className="temu-form-group">
                    <label htmlFor="zipCode">Código postal *</label>
                    <input
                      type="text"
                      id="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Código postal"
                    />
                  </div>

                  <div className="temu-form-group">
                    <label htmlFor="country">País *</label>
                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Colombia">Colombia</option>
                      <option value="México">México</option>
                      <option value="Perú">Perú</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Chile">Chile</option>
                    </select>
                  </div>
                </div>

                <div className="temu-form-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Número de teléfono"
                  />
                </div>

                <div className="temu-address-form-buttons">
                  <button
                    className="temu-cancel-button"
                    onClick={() => {
                      setShowAddressForm(false)
                      if (!addressSaved) {
                        setName("")
                        setStreet("")
                        setCity("")
                        setState("")
                        setZipCode("")
                        setPhone("")
                      }
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="temu-save-address-button"
                    onClick={() => {
                      setAddressSaved(true)
                      setShowAddressForm(false)
                    }}
                  >
                    Guardar dirección
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="temu-checkout-summary">
          <div className="temu-summary-header" onClick={() => setShowOrderSummary(!showOrderSummary)}>
            <h2>Resumen del pedido</h2>
            {showOrderSummary ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {showOrderSummary && (
            <div className="temu-summary-content">
              <div className="temu-summary-item">
                <div>Subtotal</div>
                <div>$0.00</div>
              </div>
              <div className="temu-summary-item">
                <div>Envío</div>
                <div className="temu-free-shipping">GRATIS</div>
              </div>
              <div className="temu-summary-item">
                <div>Crédito</div>
                <div>$0.45</div>
              </div>
              <div className="temu-summary-total">
                <div>Total del pedido:</div>
                <div>$0.00</div>
              </div>
              <div className="temu-summary-terms">
                Al finalizar la compra, acepta nuestros <a href="#">Términos de uso</a> y la{" "}
                <a href="#">Política de privacidad</a>.
              </div>
            </div>
          )}

          <div className="temu-plant-tree">
            <div className="temu-tree-header">
              <h3>Planta con Temu</h3>
              <div className="temu-tree-toggle" onClick={() => setDonateTree(!donateTree)}>
                <div className={`temu-toggle ${donateTree ? "active" : ""}`}>
                  <div className="temu-toggle-circle"></div>
                </div>
              </div>
            </div>
            <div className="temu-tree-content">
              Te invitamos a donar $0.35 para financiar un árbol <Info size={14} />
            </div>
          </div>

          <button className="temu-checkout-button" onClick={() => setShowCardModal(true)}>
            Finalizar compra (0)
            <div className="temu-checkout-icon">🔥 4 casi agotado</div>
          </button>

          <div className="temu-guarantee">
            <h3>Entrega garantizada</h3>
            <div className="temu-guarantee-item">
              <Check size={16} className="temu-check-icon" />
              <div>$1.00 de crédito por retraso</div>
            </div>
            <div className="temu-guarantee-item">
              <Check size={16} className="temu-check-icon" />
              <div>Devolución si el artículo está dañado</div>
            </div>
            <div className="temu-guarantee-item">
              <Check size={16} className="temu-check-icon" />
              <div>Reembolso por 30 días sin actualizaciones</div>
            </div>
            <div className="temu-guarantee-item">
              <Check size={16} className="temu-check-icon" />
              <div>Reembolso por 65 días sin entrega</div>
            </div>
            <div className="temu-more-info">
              <a href="#">Ver más información</a> <ChevronRight size={14} />
            </div>
          </div>

          <div className="temu-security">
            <h3>Temu protege la información de tu tarjeta</h3>
            <div className="temu-security-item">
              <ShieldCheck size={16} className="temu-shield-icon" />
              <div>
                Temu sigue el Estándar de Seguridad de Datos para la Industria de Tarjeta de Pago (PCI DSS) cuando
                maneja datos de tarjetas
              </div>
            </div>
            <div className="temu-security-item">
              <ShieldCheck size={16} className="temu-shield-icon" />
              <div>La información de la tarjeta es segura y no está comprometida</div>
            </div>
            <div className="temu-security-item">
              <ShieldCheck size={16} className="temu-shield-icon" />
              <div>Todos los datos están cifrados</div>
            </div>
            <div className="temu-security-item">
              <ShieldCheck size={16} className="temu-shield-icon" />
              <div>Temu nunca vende la información de tu tarjeta</div>
            </div>
          </div>
        </div>

        {showCardModal && (
          <div className="temu-modal-overlay">
            <div className="temu-card-modal">
              <div className="temu-modal-header">
                <h2>Agregar una tarjeta nueva</h2>
                <button className="temu-close-button" onClick={() => setShowCardModal(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="temu-secure-info">
                <Lock size={16} />
                <div>Todos los datos están cifrados</div>
                <ChevronRight size={16} />
              </div>

              <div className="temu-card-icons">
                <div className="temu-card-icon">VISA</div>
                <div className="temu-card-icon">MC</div>
                <div className="temu-card-icon">AMEX</div>
                <div className="temu-card-icon">DISC</div>
                <div className="temu-card-icon">JCB</div>
              </div>

              <div className="temu-form-group">
                <label>* Número de tarjeta</label>
                <div className="temu-input-wrapper">
                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                  />
                  <Check size={20} className="temu-check-valid" />
                </div>
              </div>

              <div className="temu-form-row">
                <div className="temu-form-group">
                  <label>* Fecha de vencimiento</label>
                  <div className="temu-expiry-inputs">
                    <select value={expMonth} onChange={(e) => setExpMonth(e.target.value)}>
                      <option value="">Mes</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select value={expYear} onChange={(e) => setExpYear(e.target.value)}>
                      <option value="">Año</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
                  </div>
                </div>
                <div className="temu-form-group">
                  <label>
                    * CVV <Info size={14} />
                  </label>
                  <input
                    type="text"
                    placeholder="Código de 3 a 4 dígitos"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                    maxLength={4}
                  />
                </div>
              </div>

              
              <button className="temu-add-card-button">Agregar tu tarjeta</button>

              <div className="temu-card-security">
                <ShieldCheck size={20} className="temu-shield-icon" />
                <div>Temu protege la información de tu tarjeta</div>
              </div>

              <div className="temu-security-details">
                <div className="temu-security-item">
                  <Check size={16} className="temu-check-icon" />
                  <div>Temu sigue el Estándar de Seguridad de Datos para la Industria de Tarjeta de Pago (PCI DSS)</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ChevronRight(props: any) {
  return <ChevronDown {...props} className={`${props.className || ""} rotate-270`} />
}
