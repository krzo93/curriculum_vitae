import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import LegalLayout from '../components/LegalLayout'

function PrivacySL() {
  return (
    <>
      <p>
        Ta politika zasebnosti pojasnjuje, kako zbiram, uporabljam in varujem vaše osebne podatke
        na spletni strani <span className="text-white font-medium">YOUR_URL</span> (v nadaljevanju
        "spletna stran"). Upravljavec osebnih podatkov na tej spletni strani je{' '}
        <span className="text-white font-medium">Matic Križaj</span>.
      </p>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">1. Katere osebne podatke zbiram?</h2>
        <p className="mb-3">
          Zbiram samo tiste osebne podatke, ki mi jih prostovoljno posredujete, in tiste, ki so
          nujni za delovanje spletne strani. Zbiram lahko naslednje podatke:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <span className="text-white/80 font-medium">Podatki iz kontaktnega obrazca:</span>{' '}
            Če me kontaktirate prek obrazca na spletni strani ali po e-pošti, zbiram vaše ime,
            e-poštni naslov in vsebino vašega sporočila.
          </li>
          <li>
            <span className="text-white/80 font-medium">Funkcionalni piškotki:</span>{' '}
            Spletna stran uporablja lokalno shrambo brskalnika (localStorage) izključno za
            shranjevanje vaše izbire glede piškotkov. Nobeni sledilni ali analitični piškotki
            niso v uporabi.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">2. Namen zbiranja podatkov</h2>
        <p className="mb-2">Vaše podatke uporabljam izključno za:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Odgovarjanje na vaša povpraševanja in sporočila.</li>
          <li>Osnovno delovanje spletne strani (shranjevanje vaše izbire glede piškotkov).</li>
        </ul>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">3. Souporaba in posredovanje podatkov</h2>
        <p>
          Vaših osebnih podatkov ne prodajam, ne posojam in ne posredujem tretjim osebam, razen
          če bi to od mene zahteval zakon.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">4. Hramba podatkov</h2>
        <p>
          Vaše podatke iz kontaktnega obrazca ali e-pošte hranim le toliko časa, kolikor je
          potrebno za uspešno komunikacijo z vami, oziroma do vaše zahteve po izbrisu.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">5. Vaše pravice</h2>
        <p className="mb-3">
          Skladno s Splošno uredbo o varstvu podatkov (GDPR) in slovensko zakonodajo (ZVOP-2)
          imate pravico do:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Dostopa do svojih osebnih podatkov.</li>
          <li>Popravka ali izbrisa osebnih podatkov.</li>
          <li>Omejitve obdelave in ugovora obdelavi.</li>
        </ul>
        <p className="mt-4">
          Za uveljavljanje teh pravic ali za kakršna koli vprašanja v zvezi z vašimi podatki mi
          lahko pišete na:{' '}
          <a href="mailto:matic.krizaj93@gmail.com" className="text-primary hover:underline underline-offset-2">
            matic.krizaj93@gmail.com
          </a>.
        </p>
      </div>
    </>
  )
}

function PrivacyEN() {
  return (
    <>
      <p>
        This Privacy Policy explains how I collect, use, and protect your personal data on the
        website <span className="text-white font-medium">YOUR_URL</span> (hereinafter "the
        website"). The data controller for this website is{' '}
        <span className="text-white font-medium">Matic Križaj</span>.
      </p>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">1. What personal data do I collect?</h2>
        <p className="mb-3">
          I only collect personal data that you voluntarily provide to me, and data that is
          necessary for the operation of the website. I may collect the following data:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <span className="text-white/80 font-medium">Contact form data:</span>{' '}
            If you contact me via the contact form on the website or by email, I collect your
            name, email address, and the content of your message.
          </li>
          <li>
            <span className="text-white/80 font-medium">Functional cookies:</span>{' '}
            The website uses browser local storage (localStorage) exclusively to store your cookie
            preference. No tracking or analytics cookies are in use.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">2. Purpose of data collection</h2>
        <p className="mb-2">I use your data exclusively for:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Responding to your inquiries and messages.</li>
          <li>Basic website functionality (storing your cookie preference).</li>
        </ul>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">3. Sharing and transfer of data</h2>
        <p>
          I do not sell, lend, or transfer your personal data to third parties, unless required
          to do so by law.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">4. Data retention</h2>
        <p>
          I retain your contact form or email data only for as long as necessary for successful
          communication with you, or until your deletion request.
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold text-lg mb-3">5. Your rights</h2>
        <p className="mb-3">
          In accordance with the General Data Protection Regulation (GDPR) you have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Access your personal data.</li>
          <li>Rectification or erasure of personal data.</li>
          <li>Restriction of processing and objection to processing.</li>
        </ul>
        <p className="mt-4">
          To exercise these rights or for any questions regarding your data, you can write to me
          at:{' '}
          <a href="mailto:matic.krizaj93@gmail.com" className="text-primary hover:underline underline-offset-2">
            matic.krizaj93@gmail.com
          </a>.
        </p>
      </div>
    </>
  )
}

export default function Privacy() {
  const { lang } = useLanguage()
  return (
    <LegalLayout titleKey="privacy">
      {lang === 'sl' ? <PrivacySL /> : <PrivacyEN />}
    </LegalLayout>
  )
}
