"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { contact } from "@/utils/data";
import Loader from "../components/loader/page";
import sendEmail from "@/services/emailService";
import Overlay from "../components/overlay/page";

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");


  function hideOverlay() {
    setTimeout(() => {
      setResponse("")
    }, 5000)
  }

  async function handleEmailSend() {
    if (name === "") {
      setError("Name can not be empty!")
    } else if (email === "") {
      setError("Email can not be empty!")
    } else if (message === "") {
      setError("Message can not be empty!")
    } else {
      const resqBody = {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
      try {
        setLoading(true)
        const resp = await sendEmail(resqBody)
        setLoading(false)
        setMessage("")
        setResponse("Sent");
        hideOverlay()
      } catch (error) {
        setError(error.message)
        setLoading(false)
        setResponse("Not sent, try again!")
        hideOverlay()
      }
    }
  }
  function address(title, value) {
    return (
      <div className={styles.text}>{title}: <span>{value}</span></div>
    )
  }
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.address}>
          <h2>Reach Me</h2>
          {address("Name", contact.name)}
          {address("Email", contact.email)}
          {address("Country", contact.country)}
          {address("Planet", contact.planet)}
          <h3 className={styles.text}>Public key:<div className={styles.publicKey}><h6>{contact.publikKey}</h6></div></h3>
        </div>
        <div className={styles.form}>
          <h2>Let&apos;s chat</h2>
          <input className={styles.input} placeholder="Name" value={name} onChange={(event) => { setName(event.target.value); setError("") }} />
          <input className={styles.input} placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value); setError("") }} />
          <input className={styles.input} placeholder="Phone" value={phone} onChange={(event) => { setPhone(event.target.value); setError("") }} />
          <textarea className={styles.message} placeholder="Message" value={message} onChange={(event) => { setMessage(event.target.value); setError("") }} />
          <h5 className={styles.error}>{error}</h5>
          <button disabled={loading} className={styles.sendBtn} onClick={() => handleEmailSend()}> {loading ? <Loader /> : "Send"}</button>
        </div>
      </div>
      {response != "" && <div className={styles.overlay}> <Overlay title={"Email"} message={response} /></div>}
    </div>
  );
}
