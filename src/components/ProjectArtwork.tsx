import type { Project } from '../data/projects'

export default function ProjectArtwork({ project }: { project: Project }) {
  return (
    <svg className={`project-artwork project-artwork--${project.id}`} viewBox="0 0 600 360" fill="none" aria-hidden="true">
      {project.id === 'manage-unit' && (
        <>
          <rect width="600" height="360" fill="#D8E4E8" />
          <rect x="54" y="48" width="492" height="264" rx="12" fill="#F8F7F2" />
          <rect x="54" y="48" width="112" height="264" rx="12" fill="#263B45" />
          <rect x="73" y="69" width="18" height="18" rx="5" fill="#E7B87A" />
          <rect x="100" y="73" width="46" height="7" rx="3.5" fill="#F8F7F2" opacity=".8" />
          <rect x="73" y="117" width="74" height="25" rx="5" fill="#F8F7F2" opacity=".15" />
          <rect x="82" y="126" width="38" height="7" rx="3.5" fill="#F8F7F2" opacity=".8" />
          <rect x="184" y="72" width="150" height="13" rx="6.5" fill="#263B45" />
          <rect x="184" y="95" width="104" height="7" rx="3.5" fill="#91A2A3" />
          <rect x="184" y="122" width="202" height="32" rx="6" fill="#EDF1EF" />
          <circle cx="201" cy="138" r="6" stroke="#6F8584" strokeWidth="2" />
          <path d="m205 142 5 5" stroke="#6F8584" strokeWidth="2" strokeLinecap="round" />
          <rect x="220" y="135" width="112" height="6" rx="3" fill="#A5B2AE" />
          <rect x="399" y="122" width="124" height="32" rx="16" fill="#DDE9DF" />
          <circle cx="415" cy="138" r="4" fill="#5B8567" />
          <rect x="427" y="135" width="71" height="6" rx="3" fill="#54705E" />
          <rect x="184" y="174" width="339" height="1" fill="#E3E7E2" />
          <rect x="184" y="192" width="37" height="29" rx="5" fill="#E7ECE8" />
          <path d="M193 210h19l-3-8h-13l-3 8Z" stroke="#536C70" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="198" cy="212" r="2" fill="#536C70" />
          <circle cx="207" cy="212" r="2" fill="#536C70" />
          <rect x="233" y="196" width="110" height="7" rx="3.5" fill="#50616A" />
          <rect x="233" y="210" width="70" height="6" rx="3" fill="#A5B2AE" />
          <rect x="445" y="199" width="56" height="18" rx="9" fill="#F2E5D0" />
          <rect x="184" y="237" width="339" height="1" fill="#E3E7E2" />
          <rect x="184" y="254" width="37" height="29" rx="5" fill="#E7ECE8" />
          <path d="M192 272h21l-2-9h-17l-2 9Z" stroke="#536C70" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="198" cy="274" r="2" fill="#536C70" />
          <circle cx="207" cy="274" r="2" fill="#536C70" />
          <rect x="233" y="258" width="91" height="7" rx="3.5" fill="#50616A" />
          <rect x="233" y="272" width="57" height="6" rx="3" fill="#A5B2AE" />
          <rect x="445" y="261" width="56" height="18" rx="9" fill="#E7E9E5" />
        </>
      )}
      {project.id === 'payroll' && (
        <>
          <rect width="600" height="360" fill="#E7DDE8" />
          <circle cx="487" cy="72" r="96" fill="#D7C3D9" opacity=".6" />
          <rect x="74" y="50" width="452" height="262" rx="12" fill="#FBF8F6" />
          <rect x="101" y="78" width="162" height="12" rx="6" fill="#483848" />
          <rect x="101" y="99" width="104" height="7" rx="3.5" fill="#AA9DAA" />
          <circle cx="463" cy="91" r="19" fill="#EFE6EF" />
          <circle cx="463" cy="86" r="5" fill="#9C7F9D" />
          <path d="M453 101c2-7 18-7 20 0" stroke="#9C7F9D" strokeWidth="2" strokeLinecap="round" />
          <rect x="101" y="130" width="190" height="102" rx="8" fill="#F1E9F1" />
          <rect x="119" y="148" width="73" height="7" rx="3.5" fill="#958497" />
          <rect x="119" y="168" width="113" height="16" rx="4" fill="#503B51" />
          <rect x="119" y="200" width="53" height="19" rx="9.5" fill="#E2D2E4" />
          <rect x="301" y="130" width="197" height="102" rx="8" fill="#F7F4F0" stroke="#E8E1DC" />
          <circle cx="351" cy="181" r="31" stroke="#DED4DF" strokeWidth="12" />
          <path d="M351 150a31 31 0 0 1 29 41" stroke="#8B668E" strokeWidth="12" strokeLinecap="round" />
          <rect x="398" y="161" width="71" height="7" rx="3.5" fill="#655769" />
          <rect x="398" y="178" width="53" height="6" rx="3" fill="#B1A5B2" />
          <rect x="398" y="194" width="63" height="6" rx="3" fill="#B1A5B2" />
          <rect x="101" y="251" width="397" height="1" fill="#E9E3E0" />
          <rect x="101" y="268" width="100" height="7" rx="3.5" fill="#88798A" />
          <rect x="381" y="264" width="117" height="22" rx="11" fill="#E8DCE9" />
          <rect x="397" y="272" width="73" height="6" rx="3" fill="#745978" />
        </>
      )}
      {project.id === 'sigudang' && (
        <>
          <rect width="600" height="360" fill="#DDE6DC" />
          <path d="M0 286 194 179l198 107v74H0v-74Z" fill="#CFD9CE" />
          <rect x="57" y="66" width="486" height="237" rx="10" fill="#F8F7F0" />
          <rect x="81" y="88" width="136" height="11" rx="5.5" fill="#34473C" />
          <rect x="81" y="108" width="91" height="6" rx="3" fill="#A2ADA0" />
          <rect x="81" y="136" width="135" height="54" rx="6" fill="#EAF0E8" />
          <rect x="96" y="150" width="65" height="6" rx="3" fill="#899889" />
          <rect x="96" y="166" width="37" height="12" rx="3" fill="#3F5945" />
          <rect x="226" y="136" width="135" height="54" rx="6" fill="#F2ECE0" />
          <rect x="241" y="150" width="64" height="6" rx="3" fill="#A99B7D" />
          <rect x="241" y="166" width="49" height="12" rx="3" fill="#8A7550" />
          <rect x="371" y="136" width="147" height="54" rx="6" fill="#EEF0E9" />
          <rect x="386" y="150" width="70" height="6" rx="3" fill="#9CA393" />
          <rect x="386" y="166" width="80" height="12" rx="3" fill="#56664D" />
          <rect x="81" y="207" width="280" height="1" fill="#E5E8DE" />
          <path d="M96 270v-20h33v20M143 270v-35h33v35M190 270v-26h33v26M237 270v-43h33v43M284 270v-32h33v32" stroke="#789078" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M392 232h109M392 252h82M392 272h94" stroke="#D4DDD2" strokeWidth="8" strokeLinecap="round" />
          <circle cx="504" cy="99" r="4" fill="#6D8B6F" />
          <circle cx="519" cy="99" r="4" fill="#D6BB7E" />
        </>
      )}
      {project.id === 'luma' && (
        <>
          <rect width="600" height="360" fill="#EAD9B9" />
          <circle cx="480" cy="58" r="122" fill="#F3E8D2" opacity=".7" />
          <rect x="72" y="51" width="456" height="260" rx="12" fill="#FBF8F0" />
          <rect x="99" y="76" width="62" height="7" rx="3.5" fill="#A18A62" />
          <circle cx="501" cy="80" r="10" fill="#E4D6B9" />
          <rect x="99" y="109" width="173" height="18" rx="4" fill="#453D32" />
          <rect x="99" y="136" width="133" height="7" rx="3.5" fill="#B4A589" />
          <rect x="99" y="165" width="194" height="118" rx="6" fill="#E8D8B8" />
          <rect x="108" y="174" width="176" height="101" rx="4" fill="#D4C09A" />
          <circle cx="241" cy="196" r="16" fill="#F0E5CB" />
          <path d="m109 255 48-42 33 27 26-20 68 54H109v-19Z" fill="#9EAA8A" />
          <rect x="310" y="165" width="190" height="54" rx="6" fill="#F1E8D7" />
          <circle cx="333" cy="192" r="10" fill="#D3AF77" />
          <rect x="352" y="182" width="111" height="7" rx="3.5" fill="#70634E" />
          <rect x="352" y="198" width="83" height="6" rx="3" fill="#B5A78D" />
          <rect x="310" y="230" width="190" height="53" rx="6" fill="#EEE4D2" />
          <circle cx="333" cy="257" r="10" fill="#A5AF92" />
          <rect x="352" y="247" width="91" height="7" rx="3.5" fill="#70634E" />
          <rect x="352" y="263" width="121" height="6" rx="3" fill="#B5A78D" />
        </>
      )}
      {project.id === 'wedding' && (
        <>
          <rect width="600" height="360" fill="#EADBD2" />
          <circle cx="82" cy="304" r="117" fill="#F2E9DF" opacity=".8" />
          <rect x="110" y="37" width="380" height="286" rx="4" fill="#FBF7EF" />
          <rect x="127" y="54" width="346" height="252" rx="2" stroke="#C9B7A8" />
          <path d="M167 112c14-17 23-12 31 0s15 17 25 0M407 112c14-17 23-12 31 0s15 17 25 0" stroke="#B3937D" strokeWidth="2" strokeLinecap="round" />
          <circle cx="300" cy="91" r="5" fill="#B28B72" />
          <path d="M300 96v17" stroke="#B28B72" />
          <rect x="245" y="133" width="110" height="6" rx="3" fill="#B99A87" />
          <text x="300" y="177" textAnchor="middle" fill="#573F3C" fontFamily="Georgia,serif" fontSize="32" fontStyle="italic">Fabi &amp; Oca</text>
          <path d="M229 192h142" stroke="#D7C7BA" />
          <rect x="255" y="207" width="90" height="5" rx="2.5" fill="#AA9487" />
          <rect x="269" y="222" width="62" height="5" rx="2.5" fill="#AA9487" />
          <rect x="281" y="252" width="38" height="15" rx="7.5" fill="#E6D8CD" />
          <path d="M148 283c20-7 25-18 20-33m-20 33c13-12 14-24 8-33m294 33c-20-7-25-18-20-33m20 33c-13-12-14-24-8-33" stroke="#9DAD91" strokeWidth="2" strokeLinecap="round" />
          <circle cx="169" cy="250" r="4" fill="#B9A382" />
          <circle cx="431" cy="250" r="4" fill="#B9A382" />
        </>
      )}
      {project.id === 'masterbus-home' && (
        <>
          <rect width="600" height="360" fill="#DCE3F0" />
          <circle cx="514" cy="67" r="108" fill="#C9D3E8" opacity=".7" />
          <rect x="57" y="49" width="486" height="262" rx="12" fill="#F9F8F4" />
          <rect x="84" y="76" width="164" height="12" rx="6" fill="#303E59" />
          <rect x="84" y="98" width="126" height="7" rx="3.5" fill="#A2AAB8" />
          <rect x="455" y="75" width="61" height="22" rx="11" fill="#E4E9F2" />
          <circle cx="470" cy="86" r="5" fill="#7386A8" />
          <rect x="484" y="83" width="20" height="6" rx="3" fill="#71809A" />
          <rect x="84" y="129" width="136" height="142" rx="8" fill="#F0EDF4" />
          <rect x="102" y="149" width="33" height="33" rx="8" fill="#D9CFE5" />
          <path d="M111 171v-11h15v11m-18 0h21" stroke="#705C82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="102" y="197" width="88" height="7" rx="3.5" fill="#594B62" />
          <rect x="102" y="213" width="72" height="6" rx="3" fill="#A79CAD" />
          <rect x="102" y="238" width="78" height="19" rx="9.5" fill="#E3DCEB" />
          <rect x="232" y="129" width="136" height="142" rx="8" fill="#E9EEF5" />
          <rect x="250" y="149" width="33" height="33" rx="8" fill="#CCD9EA" />
          <path d="M258 159h17v13h-17zM262 155h9" stroke="#58718E" strokeWidth="2" strokeLinejoin="round" />
          <rect x="250" y="197" width="88" height="7" rx="3.5" fill="#4D5C70" />
          <rect x="250" y="213" width="72" height="6" rx="3" fill="#A0ABBA" />
          <rect x="250" y="238" width="78" height="19" rx="9.5" fill="#DCE5F0" />
          <rect x="380" y="129" width="136" height="142" rx="8" fill="#F3ECE2" />
          <rect x="398" y="149" width="33" height="33" rx="8" fill="#EADBC3" />
          <path d="M406 171v-12h17v12m-13-12v-4m9 4v-4m-9 9h13" stroke="#92764E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="398" y="197" width="88" height="7" rx="3.5" fill="#665945" />
          <rect x="398" y="213" width="72" height="6" rx="3" fill="#B3A794" />
          <rect x="398" y="238" width="78" height="19" rx="9.5" fill="#EDE3D3" />
        </>
      )}
    </svg>
  )
}
