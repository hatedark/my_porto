import React from "react";

export default function Projects() {
  return (
    <section id="projects" class="projek-section">
      <h2 class="projek-section-header">Berikut beberapa hasil projek milikku</h2>

      <div class="projek-grid">
        <a
          href="https://www.freecodecamp.org/DeRama"
          target="_blank"
          class="projek project-tile"
          rel="noreferrer"
        >
          <img 
            class="projek-image"
            src="https://i.ibb.co/N3yZ51b/Screenshot-2023-08-15-134852.png"
            alt="projek"
          />
          <p class="projek-title">
            <span class="code">&lt;</span>
            Form
            <span class="code">&#47;&gt;</span>
          </p>
        </a>
        <a
          href="https://www.freecodecamp.org/DeRama"
          target="_blank"
          class="projek project-tile"
          rel="noreferrer"
        >
          <img 
            class="projek-image"
            src="https://i.ibb.co/zrz5jWM/Screenshot-2023-08-15-135453.png"
            alt="projek"
          />
          <p class="projek-title">
            <span class="code">&lt;</span>
            Upeti
            <span class="code">&#47;&gt;</span>
          </p>
        </a>
        <a
          href="https://www.freecodecamp.org/DeRama"
          target="_blank"
          class="projek project-tile"
          rel="noreferrer"
        >
          <img 
            class="projek-image"
            src="https://i.ibb.co/qBTs338/Screenshot-2023-08-15-135702.png"
            alt="projek"
          />
          <p class="projek-title">
            <span class="code">&lt;</span>
            Dokumen JS
            <span class="code">&#47;&gt;</span>
          </p>
        </a>
        <a
          href="https://www.freecodecamp.org/DeRama"
          target="_blank"
          class="projek project-tile"
          rel="noreferrer"
        >
          <img 
            class="projek-image"
            src="https://i.ibb.co/0mpb4JP/Screenshot-2023-08-15-135758.png"
            alt="projek"
          />
          <p class="projek-title">
            <span class="code">&lt;</span>
            Halaman Produk
            <span class="code">&#47;&gt;</span>
          </p>
        </a>
      </div>

      <a
        href="https://www.freecodecamp.org/DeRama"
        class="btn btn-lihat-lainnya"
        target="_blank"
        rel="noreferrer"
        >Lihat lainnya<i class="fas fa-chevron-right"></i
      ></a>
    </section>
  );
}