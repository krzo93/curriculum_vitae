import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import LegalLayout from '../components/LegalLayout'

function TermsSL() {
  return (
    <>
      <p>
        Dobrodošli na moji osebni spletni strani{' '}
        <span className="text-white font-medium">YOUR_URL</span>. Z obiskom in uporabo te spletne
        strani se strinjate z naslednjimi pogoji uporabe.
      </p>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">1. Namen spletne strani</h2>
        <p>
          Spletna stran je namenjena izključno osebni predstavitvi mojih znanj, izkušenj in
          preteklih projektov (CV in portfelj).
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">2. Intelektualna lastnina in avtorske pravice</h2>
        <p className="mb-3">
          Vsa vsebina na tej spletni strani, vključno z besedili, življenjepisom, fotografijami,
          programsko kodo in grafičnimi elementi, je avtorska lastnina{' '}
          <span className="text-white font-medium">Matica Križaja</span>, razen če ni izrecno
          navedeno drugače. Kopiranje, distribucija, spreminjanje ali uporaba vsebin v komercialne
          namene brez mojega predhodnega pisnega dovoljenja ni dovoljena.
        </p>
        <p>
          Če želite deliti moj CV ali dele mojega portfelja, prosim, da obvezno navedete vir in
          dodate povezavo do te spletne strani.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">3. Omejitev odgovornosti</h2>
        <p className="mb-3">
          Vse informacije na tej spletni strani so informativne narave in zanje ne prevzemam
          nikakršne pravne odgovornosti. Čeprav se trudim, da so objavljeni podatki (npr. o
          izkušnjah ali znanjih) točni in ažurni, ne jamčim za njihovo popolnost.
        </p>
        <p>
          Spletna stran lahko vsebuje povezave do zunanjih spletnih mest (npr. LinkedIn, GitHub,
          pretekli delodajalci). Za vsebino in prakse zasebnosti teh zunanjih spletnih mest ne
          prevzemam nobene odgovornosti.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">4. Spremembe pogojev</h2>
        <p>
          Pridržujem si pravico, da te pogoje uporabe in vsebino spletne strani kadarkoli
          spremenim brez predhodnega obvestila.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">5. Veljavna zakonodaja</h2>
        <p>Za te pogoje uporabe velja zakonodaja Republike Slovenije.</p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">6. Kontakt</h2>
        <p>
          Če imate kakršnakoli vprašanja glede teh pogojev, me lahko kontaktirate na:{' '}
          <a href="mailto:matic.krizaj93@gmail.com" className="text-primary hover:underline underline-offset-2">
            matic.krizaj93@gmail.com
          </a>.
        </p>
      </div>
    </>
  )
}

function TermsEN() {
  return (
    <>
      <p>
        Welcome to my personal website{' '}
        <span className="text-white font-medium">YOUR_URL</span>. By visiting and using this
        website, you agree to the following terms of use.
      </p>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">1. Purpose of the website</h2>
        <p>
          This website is solely intended for the personal presentation of my skills, experience,
          and past projects (CV and portfolio).
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">2. Intellectual property and copyright</h2>
        <p className="mb-3">
          All content on this website, including texts, CV, photographs, source code and graphic
          elements, is the copyrighted property of{' '}
          <span className="text-white font-medium">Matic Križaj</span>, unless explicitly stated
          otherwise. Copying, distribution, modification or use of content for commercial purposes
          without my prior written permission is not permitted.
        </p>
        <p>
          If you wish to share my CV or parts of my portfolio, please ensure you cite the source
          and add a link to this website.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">3. Limitation of liability</h2>
        <p className="mb-3">
          All information on this website is for informational purposes only and I assume no legal
          responsibility for it. Although I strive to ensure that the published data (e.g. about
          experience or skills) is accurate and up-to-date, I do not guarantee its completeness.
        </p>
        <p>
          This website may contain links to external websites (e.g. LinkedIn, GitHub, former
          employers). I assume no responsibility for the content and privacy practices of these
          external websites.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">4. Changes to terms</h2>
        <p>
          I reserve the right to modify these terms of use and the content of the website at any
          time without prior notice.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">5. Applicable law</h2>
        <p>These terms of use are governed by the law of the Republic of Slovenia.</p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">6. Contact</h2>
        <p>
          If you have any questions regarding these terms, you can contact me at:{' '}
          <a href="mailto:matic.krizaj93@gmail.com" className="text-primary hover:underline underline-offset-2">
            matic.krizaj93@gmail.com
          </a>.
        </p>
      </div>
    </>
  )
}

export default function Terms() {
  const { lang } = useLanguage()
  return (
    <LegalLayout titleKey="terms">
      {lang === 'sl' ? <TermsSL /> : <TermsEN />}
    </LegalLayout>
  )
}
