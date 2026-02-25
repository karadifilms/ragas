const ragas = [
  { kannada: "ಅಂಬುರುಹದಳನೇತ್ರೆ", english: "Amburuhadalanethre", file: "amburuhadalanethre.m4a" },
  { kannada: "ರಾಗ ನಾಟಿ", english: "Raag Nattai", file: "raag_nattai.m4a" },
  { kannada: "ರಾಗ ಕಾಂಭೋಜಿ", english: "Raag Kambhoji", file: "raag_kambhoji.m4a" },
  { kannada: "ರಾಗ ಭೈರವಿ", english: "Raag Bhairavi", file: "raag_bhairavi.m4a" },
  { kannada: "ರಾಗ ಶಂಕರಾಭರಣ", english: "Raag Shankarabharana", file: "raag_shankarabharana.m4a" },
  { kannada: "ರಾಗ ಪೀಲು", english: "Raag Pilu", file: "raag_pilu.m4a" },
  { kannada: "ರಾಗ ಕಲ್ಯಾಣಿ", english: "Raag Kalyani", file: "raag_raag_kalyani.m4a" },
  { kannada: "ರಾಗ ಕೇದಾರಗೌಳ", english: "Raag Kedaragowla", file: "raag_kedaragowla.m4a" },
  { kannada: "ರಾಗ ಸರಸ್ವತಿ", english: "Raag Saraswathi", file: "raag_saraswathi.m4a" },
  { kannada: "ರಾಗ ಬೇಗಡೆ", english: "Raag Begade", file: "raag_begade.m4a" },
  { kannada: "ರಾಗ ಶುದ್ಧಧನ್ಯಾಸಿ", english: "Raag Shuddhadhanyasi", file: "raag_shuddhadhanyasi.m4a" },
  { kannada: "ರಾಗ ಬಿಲಹರಿ", english: "Raag Bilahari", file: "raag_bilahari.m4a" },
  { kannada: "ರಾಗ ಅಭೋಗಿ", english: "Raag Abhogi", file: "raag_abhogi.m4a" },
  { kannada: "ರಾಗ ನವರೋಜು", english: "Raag Navaroju", file: "raag_navaroju.m4a" },
  { kannada: "ರಾಗ ಖರಹರಪ್ರಿಯ", english: "Raag Kharaharapriya", file: "raag_kharaharapriya.m4a" },
  { kannada: "ರಾಗ ಜೋಗ್", english: "Raag Jog", file: "raag_jog.m4a" },
  { kannada: "ರಾಗ ನೀಲಾಂಬರಿ", english: "Raag Neelambari", file: "raag_neelambari.m4a" },
  { kannada: "ರಾಗ ಯಮನ್ ಕಲ್ಯಾಣಿ", english: "Raag Yaman Kalyani", file: "raag_yaman_kalyani.m4a" },
  { kannada: "ರಾಗ ರೀತಿಗೌಳ", english: "Raag Reetigowla", file: "raag_reetigowla.m4a" },
  { kannada: "ರಾಗ ಸುರುಟಿ", english: "Raag Suruti", file: "raag_suruti.m4a" },
  { kannada: "ರಾಗ ನಾಟಿಕುರುಂಜಿ", english: "Raag Natikurunji", file: "raag_natikurunji.m4a" },
  { kannada: "ರಾಗ ಖಮಾಚ್", english: "Raag Khamach", file: "raag_khamach.m4a" },
  { kannada: "ರಾಗ ಷಣ್ಮುಖಪ್ರಿಯ", english: "Raag Shanmukhapriya", file: "raag_shanmukhapriya.m4a" },
  { kannada: "ರಾಗ ಹಮೀರ್ ಕಲ್ಯಾಣಿ", english: "Raag Hamir Kalyani", file: "raag_hamir_kalyani.m4a" },
  { kannada: "ರಾಗ ಸೂರ್ಯ", english: "Raag Surya", file: "raag_surya.m4a" },
  { kannada: "ರಾಗ ಭಾಗೇಶ್ರೀ", english: "Raag Bhaageshri", file: "raag_bhaageshri.m4a" },
  { kannada: "ರಾಗ ಅಠಾಣ", english: "Raag Atana", file: "raag_atana.m4a" },
  { kannada: "ರಾಗ ಹಿಂದೋಳ", english: "Raag Hindolam", file: "raag_hindolam.m4a" },
  { kannada: "ರಾಗ ಬೇಹಾಗ್", english: "Raag Behag", file: "raag_behag.m4a" },
  { kannada: "ರಾಗ ಸಿಂಹೇಂದ್ರಮಧ್ಯಮ", english: "Raag Simhendramadhyama", file: "raag_simhendramadhyama.m4a" },
  { kannada: "ರಾಗ ಅಭೇರಿ", english: "Raag Abheri", file: "raag_abheri.m4a" },
  { kannada: "ರಾಗ ಬೃಂದಾವನಸಾರಂಗ", english: "Raag Brindavana Saranga", file: "raag_brindavana_saranga.m4a" },
  { kannada: "ರಾಗ ಸುಮನಸರಂಜಿನಿ", english: "Raag Sumanasaranjini", file: "raag_sumanasaranjini.m4a" },
  { kannada: "ರಾಗ ಶುದ್ಧಸಾವೇರಿ", english: "Raag Shuddha Saveri", file: "raag_shuddha_saveri.m4a" },
  { kannada: "ರಾಗ ಮೇಘ", english: "Raag Megha", file: "raag_megha.m4a" },
  { kannada: "ರಾಗ ಕಾಪಿ", english: "Raag Kapi", file: "raag_kapi.m4a" },
  { kannada: "ರಾಗ ಮಾಯಾಮಾಳವಗೌಳ", english: "Raag Mayamalavagowla", file: "raag_mayamalavagowla.m4a" },
  { kannada: "ರಾಗ ಮಾಂಡ್", english: "Raag Mand", file: "raag_mand.m4a" },
  { kannada: "ರಾಗ ಜೋನ್ಪುರಿ", english: "Raag Jonpuri", file: "raag_jonpuri.m4a" },
  { kannada: "ರಾಗ ಶಹನಾ", english: "Raag Shahana", file: "raag_shahana.m4a" },
  { kannada: "ರಾಗ ವಸಂತ", english: "Raag Vasantha", file: "raag_vasantha.m4a" },
  { kannada: "ರಾಗ ಸಾಮ", english: "Raag Saama", file: "raag_saama.m4a" },
  { kannada: "ರಾಗ ರೇವತಿ", english: "Raag Revathi", file: "raag_revathi.m4a" },
  { kannada: "ರಾಗ ದೇವಗಾಂಧಾರ", english: "Raag Devagandhara", file: "raag_devagandhara.m4a" },
  { kannada: "ರಾಗ ಚಕ್ರವಾಕ", english: "Raag Chakravaka (Ahir Bhairav)", file: "raag_chakravaka_(ahir_bhairav).m4a" },
  { kannada: "ರಾಗ ನವರಸ ಕನ್ನಡ", english: "Raag Navarasa Kannada", file: "raag_navarasa_kannada.m4a" },
  { kannada: "ರಾಗ ಚಂದ್ರಜ್ಯೋತಿ", english: "Raag Chandrajyothi", file: "raag_chandrajyothi.m4a" },
  { kannada: "ರಾಗ ಕಾನಡ", english: "Raag Kanada", file: "raag_kanada.m4a" },
  { kannada: "ರಾಗ ಸಾರಮತಿ", english: "Raag Saramathi", file: "raag_saramathi.m4a" },
  { kannada: "ರಾಗ ಕನಕಾಂಗಿ", english: "Raag Kanakangi", file: "raag_kanakangi.m4a" },
  { kannada: "ರಾಗ ಕರ್ಣರಂಜಿನಿ", english: "Raag Karnaranjini", file: "raag_karnaranjini.m4a" },
  { kannada: "ರಾಗ ಆನಂದಭೈರವಿ", english: "Raag Anandabhairavi", file: "raag_anandabhairavi.m4a" },
  { kannada: "ರಾಗ ರಂಜನಿ", english: "Raag Ranjani", file: "raag_ranjani.m4a" },
  { kannada: "ರಾಗ ಚಾರುಕೇಶಿ", english: "Raag Charukeshi", file: "raag_charukeshi.m4a" },
  { kannada: "ರಾಗ ಹಂಸಾನಂದಿ", english: "Raag Hamsanandi", file: "raag_hamsanandi.m4a" },
  { kannada: "ರಾಗ ಗೌರಿಮನೋಹರಿ", english: "Raag Gowri Manohari", file: "raag_gowri_manohari.m4a" },
  { kannada: "ರಾಗ ಸಿಂಧೂಭೈರವಿ", english: "Raag Sindhu Bhairavi", file: "raag_sindhu_bhairavi.m4a" },
  { kannada: "ರಾಗ ಶಿವರಂಜಿನಿ", english: "Raag Shivaranjini", file: "raag_shivaranjini.m4a" },
  { kannada: "ರಾಗ ಶುಭಪಂತುವರಾಳಿ", english: "Raag Shubhapantuvarali", file: "raag_shubhapantuvarali.m4a" },
  { kannada: "ರಾಗ ಕಲ್ಯಾಣವಸಂತ", english: "Raag Kalyanavasantha", file: "raag_kalyanavasantha.m4a" },
  { kannada: "ರಾಗ ಪೂರ್ವಿಕಲ್ಯಾಣಿ", english: "Raag Purvi Kalyani", file: "raag_purvi_kalyani.m4a" },
  { kannada: "ರಾಗ ಮೋಹನಕಲ್ಯಾಣಿ", english: "Raag Mohana Kalyani", file: "raag_mohana_kalyani.m4a" },
  { kannada: "ರಾಗ ವಾಸಂತಿ", english: "Raag Vasanthi", file: "raag_vasanthi.m4a" },
  { kannada: "ರಾಗ ಪುನ್ನಾಗವರಾಳಿ", english: "Raag Punnagavarali", file: "raag_punnagavarali.m4a" },
  { kannada: "ರಾಗ ದ್ವಿಜಾವಂತಿ", english: "Raag Dwijavanti", file: "raag_dwijavanti.m4a" },
  { kannada: "ರಾಗ ತೋಡಿ", english: "Raag Thodi", file: "raag_thodi.m4a" },
  { kannada: "ರಾಗ ಕಲಾವತಿ", english: "Raag Kalavathi", file: "raag_kalavathi.m4a" },
  { kannada: "ರಾಗ ಹನುಮತೋಡಿ", english: "Raag Hanumathodi", file: "raag_hanumathodi.m4a" },
  { kannada: "ರಾಗ ದೇಶ್", english: "Raag Desh", file: "raag_desh.m4a" },
  { kannada: "ರಾಗ ಹಂಸಧ್ವನಿ", english: "Raag Hamsadhwani", file: "raag_hamsadhwani.m4a" },
  { kannada: "ರಾಗ ಆರಭಿ", english: "Raag Arabhi", file: "raag_arabhi.m4a" },
  { kannada: "ರಾಗ ಶ್ರೀರಾಗ", english: "Raag Shreeraga", file: "raag_shreeraga.m4a" },
  { kannada: "ರಾಗ ಮಧ್ಯಮಾವತಿ", english: "Raag Madhyamavathi", file: "raag_madhyamavathi.m4a" },
  { kannada: "ರಾಗ ಮೋಹನ", english: "Raag Mohana", file: "raag_mohana.m4a" },
  { kannada: "ರಾಗ ಸಾವೇರಿ", english: "Raag Saveri", file: "raag_saveri.m4a" },
  { kannada: "ರಾಗ ಭೌಳಿ", english: "Raag Bhowli", file: "raag_bhowli.m4a" },
  { kannada: "ಮಂಗಳ", english: "Mangalam", file: "mangalam.m4a" },
];

const audio = document.getElementById("audio-player");
const ragaList = document.getElementById("raga-list");
let activeRow = null;

function resetBtn(row) {
  const btn = row.querySelector(".play-pause-btn");
  btn.textContent = row.dataset.num;
  btn.setAttribute("aria-label", "Play");
}

ragas.forEach((raga, i) => {
  const num = i + 1;
  const row = document.createElement("tr");
  row.dataset.num = num;

  const btn = document.createElement("button");
  btn.className = "play-pause-btn";
  btn.textContent = num;
  btn.setAttribute("aria-label", "Play");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (activeRow === row) {
      if (audio.paused) audio.play();
      else audio.pause();
    }
  });

  row.innerHTML = `<td class="num"></td><td class="kn">${raga.kannada}</td><td class="en">${raga.english}</td>`;
  row.querySelector(".num").appendChild(btn);

  row.addEventListener("click", (e) => {
    if (e.target === btn) return;

    if (activeRow === row) {
      if (audio.duration) {
        const rect = row.getBoundingClientRect();
        const fraction = (e.clientX - rect.left) / rect.width;
        audio.currentTime = audio.duration * Math.max(0, Math.min(1, fraction));
      }
      if (audio.paused) audio.play();
      return;
    }

    if (activeRow) {
      activeRow.classList.remove("playing");
      activeRow.style.removeProperty("--progress");
      resetBtn(activeRow);
    }
    activeRow = row;
    audio.src = "data/" + raga.file;
    audio.play();
    row.classList.add("playing");
  });

  ragaList.appendChild(row);
});

audio.addEventListener("play", () => {
  if (activeRow) {
    activeRow.classList.add("playing");
    const btn = activeRow.querySelector(".play-pause-btn");
    btn.textContent = "⏸";
    btn.setAttribute("aria-label", "Pause");
  }
});

audio.addEventListener("pause", () => {
  if (activeRow) {
    activeRow.classList.remove("playing");
    const btn = activeRow.querySelector(".play-pause-btn");
    btn.textContent = "▶";
    btn.setAttribute("aria-label", "Play");
  }
});

audio.addEventListener("timeupdate", () => {
  if (activeRow && audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    activeRow.style.setProperty("--progress", pct + "%");
  }
});

audio.addEventListener("ended", () => {
  if (activeRow) {
    activeRow.classList.remove("playing");
    activeRow.style.removeProperty("--progress");
    resetBtn(activeRow);
  }
  activeRow = null;
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && activeRow) {
    e.preventDefault();
    if (audio.paused) audio.play();
    else audio.pause();
  }
});
