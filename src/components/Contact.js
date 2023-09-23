import React from "react";

export default function Contact() {
  return (
    <section id="kontak" class="kontak-section">
      <div class="kontak-section-header">
        <h2>Ayo kita saling kontak...</h2>
        <p>Kamu sukanya kopi atau teh?</p>
      </div>
      <div class="kontak-links">
        <a
          href="https://facebook.com/hatedark"
          target="_blank"
          class="btn kontak-details"
          rel="noreferrer"
          ><i class="fab fa-facebook-square"></i> Facebook</a
        >
        <a
          id="profile-link"
          href="https://github.com/hatedark"
          target="_blank"
          class="btn kontak-details"
          rel="noreferrer"
          ><i class="fab fa-github"></i> GitHub</a
        >
        <a
          href="mailto:deru.dhan@gmail.com"
          class="btn kontak-details"
          ><i class="fab fa-at"></i> Kirim email</a
        >
      </div>
    </section>
  );
}