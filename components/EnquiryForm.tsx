"use client";
import { useState } from "react";

export default function EnquiryForm({ subject="Concierge request", compact=false }:{subject?:string;compact?:boolean}){
  const [sent,setSent]=useState(false);
  if(sent) return <div className="enquiry-success" role="status"><span>✓</span><h3>Thanks—we’ve got your request.</h3><p>Our local team will review the details and get back to you with suitable options.</p><button onClick={()=>setSent(false)} className="text-link">Send another</button></div>;
  return <form className={compact?"enquiry-form compact":"enquiry-form"} onSubmit={e=>{e.preventDefault();setSent(true)}}>
    <input type="hidden" name="subject" value={subject}/>
    <label><span>Name</span><input required name="name" placeholder="Your name"/></label>
    <label><span>Email</span><input required type="email" name="email" placeholder="you@example.com"/></label>
    <label><span>Phone</span><input type="tel" name="phone" placeholder="Optional"/></label>
    <label><span>Stay dates</span><input name="dates" placeholder="If known"/></label>
    <label className="full"><span>How can we help?</span><textarea required name="message" rows={compact?4:6} placeholder="Tell us about your group and what you have in mind…"/></label>
    <button className="button secondary full" type="submit">Send enquiry</button>
    <small className="full">Your details will only be used to respond to this request.</small>
  </form>
}
