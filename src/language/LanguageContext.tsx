import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "ro" | "en";

type TranslationEntry = {
  ro: string;
  en: string;
  aliases?: string[];
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const STORAGE_KEY = "orion_language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

const entries: TranslationEntry[] = [
  { ro: "Acasă", en: "Home", aliases: ["Home"] },
  { ro: "Magazin", en: "Shop", aliases: ["Shop"] },
  { ro: "Portofoliu", en: "Portfolio" },
  { ro: "Despre Noi", en: "About Us" },
  { ro: "Cataloage", en: "Catalogs" },
  { ro: "Work in Progress", en: "Work in Progress" },
  { ro: "Intră în cont", en: "Sign In", aliases: ["Sign In", "IntrÄƒ Ã®n cont"] },
  { ro: "Deconectare", en: "Log Out", aliases: ["Logout"] },
  { ro: "Cont logat", en: "Signed-in Account" },
  { ro: "Produse favorite", en: "Favorite Products" },
  { ro: "produs selectat", en: "selected product" },
  { ro: "produse selectate", en: "selected products" },
  { ro: "Cere Ofertă", en: "Request Quote", aliases: ["Cere OfertÄƒ"] },
  { ro: "Iluminat Arhitectural.", en: "Architectural Lighting." },
  { ro: "Din 1996.", en: "Since 1996." },
  {
    ro: "Prin experiență, profesionalism și o înțelegere profundă a modului în care lumina influențează percepția unui spațiu, Orion Grup creează interioare și proiecte arhitecturale în care estetica și funcționalitatea coexistă natural.",
    en: "Through experience, professionalism and a deep understanding of how light shapes the perception of a space, Orion Grup creates interiors and architectural projects where aesthetics and functionality coexist naturally.",
    aliases: [
      "Prin experienÈ›Äƒ, profesionalism È™i o Ã®nÈ›elegere profundÄƒ a modului Ã®n care lumina influenÈ›eazÄƒ percepÈ›ia unui spaÈ›iu, Orion Grup creeazÄƒ interioare È™i proiecte arhitecturale Ã®n care estetica È™i funcÈ›ionalitatea coexistÄƒ natural.",
      "Prin experienÈ›Äƒ, profesionalism È™i o Ã®nÈ›elegere profundÄƒ a modului Ã®n care lumina influenÈ›eazÄƒ percepÈ›ia unui spaÈ›iu, Orion Grup creeazÄƒ interioare È™i proiecte arhitecturale premium.",
    ],
  },
  { ro: "Începe-ți proiectul", en: "Start Your Project", aliases: ["ÃŽncepe-È›i proiectul", "Start your project"] },
  { ro: "Camera 3D", en: "3D Room" },
  { ro: "Lumina schimba atmosfera unui interior", en: "Light Changes the Atmosphere of an Interior" },
  {
    ro: "Ajusteaza intensitatea si temperatura din consola pentru a vedea cum aceeasi camera poate deveni mai calda, mai neutra sau mai tehnica.",
    en: "Adjust the intensity and temperature from the console to see how the same room can become warmer, more neutral or more technical.",
  },
  { ro: "Intensitate", en: "Intensity" },
  { ro: "Controleaza cat de puternic domina lumina ambientul.", en: "Control how strongly light defines the atmosphere." },
  { ro: "Temperatura", en: "Temperature" },
  { ro: "Temperatura lumina", en: "Light Temperature" },
  { ro: "Treci de la lumina calda la o atmosfera neutra sau rece.", en: "Move from warm light to a neutral or cool atmosphere." },
  {
    ro: "Trage cu mouse-ul pentru a roti camera. Panoul din dreapta controleaza scenariul de lumina.",
    en: "Drag with the mouse to rotate the room. The panel on the right controls the lighting scenario.",
  },
  { ro: "Control lumini", en: "Light Controls" },
  { ro: "calda", en: "warm" },
  { ro: "neutra", en: "neutral" },
  { ro: "rece", en: "cool" },
  { ro: "Portofoliul Nostru", en: "Our Portfolio" },
  {
    ro: "O scurtă previzualizare a efectului serviciilor și produselor noastre de înaltă calitate",
    en: "A short preview of the impact created by our high-quality services and products",
    aliases: ["O scurtÄƒ previzualizare a efectului serviciilor È™i produselor noastre de Ã®naltÄƒ calitate"],
  },
  { ro: "Despre Noi", en: "About Us" },
  {
    ro: "Pasiunea noastră pentru lumină și design modern ne motivează să aducem în casele și spațiile clienților soluții inovatoare, elegante și eficiente.",
    en: "Our passion for light and modern design motivates us to bring innovative, elegant and efficient solutions into our clients' homes and spaces.",
    aliases: ["Pasiunea noastrÄƒ pentru luminÄƒ È™i design modern ne motiveazÄƒ sÄƒ aducem Ã®n casele È™i spaÈ›iile clienÈ›ilor soluÈ›ii inovatoare, elegante È™i eficiente."],
  },
  { ro: "O poveste construită pe lumină", en: "A Story Built on Light", aliases: ["O poveste construitÄƒ pe luminÄƒ"] },
  {
    ro: "De la începuturile noastre, ne-am dedicat creării de soluții de iluminat care îmbină funcționalitatea cu estetica. Fiecare proiect reflectă atenția la detalii și dorința de a transforma spațiile în experiențe vizuale memorabile.",
    en: "From the beginning, we have been dedicated to creating lighting solutions that combine functionality with aesthetics. Every project reflects attention to detail and the desire to transform spaces into memorable visual experiences.",
    aliases: ["De la Ã®nceputurile noastre, ne-am dedicat creÄƒrii de soluÈ›ii de iluminat care Ã®mbinÄƒ funcÈ›ionalitatea cu estetica. Fiecare proiect reflectÄƒ atenÈ›ia la detalii È™i dorinÈ›a de a transforma spaÈ›iile Ã®n experienÈ›e vizuale memorabile."],
  },
  {
    ro: "Astăzi, portofoliul nostru include colaborări cu designeri, arhitecți și companii care apreciază calitatea și inovația.",
    en: "Today, our portfolio includes collaborations with designers, architects and companies that value quality and innovation.",
    aliases: ["AstÄƒzi, portofoliul nostru include colaborÄƒri cu designeri, arhitecÈ›i È™i companii care apreciazÄƒ calitatea È™i inovaÈ›ia."],
  },
  { ro: "Soluții de iluminat selectate cu atenție, ce îmbină estetica rafinată cu funcționalitatea cotidiană.", en: "Carefully selected lighting solutions that combine refined aesthetics with everyday functionality.", aliases: ["SoluÈ›ii de iluminat selectate cu atenÈ›ie, ce Ã®mbinÄƒ estetica rafinatÄƒ cu funcÈ›ionalitatea cotidianÄƒ."] },
  { ro: "Se încarcă produsele...", en: "Loading products...", aliases: ["Se Ã®ncarcÄƒ produsele..."] },
  { ro: "Nu am putut încărca produsele:", en: "Could not load products:", aliases: ["Nu am putut Ã®ncÄƒrca produsele:"] },
  { ro: "Nu există produse momentan.", en: "There are no products at the moment.", aliases: ["Nu existÄƒ produse momentan."] },
  { ro: "Vezi întreaga listă", en: "View Full List", aliases: ["Vezi Ã®ntreaga listÄƒ"] },
  { ro: "Elimină de la favorite", en: "Remove from Favorites", aliases: ["EliminÄƒ de la favorite"] },
  { ro: "Adaugă la favorite", en: "Add to Favorites", aliases: ["AdaugÄƒ la favorite"] },
  { ro: "Hai să începem proiectul tău", en: "Let's Start Your Project", aliases: ["Hai sÄƒ Ã®ncepem proiectul tÄƒu"] },
  { ro: "Suntem aici să îți oferim informațiile și suportul de care ai nevoie.", en: "We are here to give you the information and support you need.", aliases: ["Suntem aici sÄƒ Ã®È›i oferim informaÈ›iile È™i suportul de care ai nevoie."] },
  { ro: "Trimite o cerere", en: "Send a Request" },
  { ro: "Completează formularul, iar noi revenim către tine cât mai repede cu toate detaliile necesare.", en: "Fill in the form and we will get back to you as soon as possible with the details you need.", aliases: ["CompleteazÄƒ formularul, iar noi revenim cÄƒtre tine cÃ¢t mai repede cu toate detaliile necesare."] },
  { ro: "Nume *", en: "Name *" },
  { ro: "Email *", en: "Email *" },
  { ro: "Telefon *", en: "Phone *" },
  { ro: "CUI (opțional)", en: "VAT ID (optional)", aliases: ["CUI (opÈ›ional)"] },
  { ro: "Mesaj *", en: "Message *" },
  { ro: "Încarcă fișier (opțional)", en: "Upload File (optional)", aliases: ["ÃŽncarcÄƒ fiÈ™ier (opÈ›ional)"] },
  { ro: "Formate acceptate: PDF, DOC, DOCX, JPG, PNG, WEBP. Dimensiune maximă recomandată: 4 MB.", en: "Accepted formats: PDF, DOC, DOCX, JPG, PNG, WEBP. Recommended maximum size: 4 MB.", aliases: ["Formate acceptate: PDF, DOC, DOCX, JPG, PNG, WEBP. Dimensiune maximÄƒ recomandatÄƒ: 4 MB."] },
  { ro: "Sunt de acord cu", en: "I agree with" },
  { ro: "Termenii și Condițiile formularului", en: "the Form Terms and Conditions", aliases: ["Termenii È™i CondiÈ›iile formularului"] },
  { ro: "și confirm că datele trimise pot fi folosite pentru procesarea cererii mele de ofertă.", en: "and confirm that the submitted data may be used to process my quote request.", aliases: ["È™i confirm cÄƒ datele trimise pot fi folosite pentru procesarea cererii mele de ofertÄƒ."] },
  { ro: "Se trimite...", en: "Sending..." },
  { ro: "Trimite mesajul", en: "Send Message" },
  { ro: "Cererea a fost trimisa. Vei primi si un email de confirmare.", en: "Your request has been sent. You will also receive a confirmation email." },
  { ro: "Mesajul nu a putut fi trimis.", en: "The message could not be sent." },
  { ro: "Fișierul este prea mare. Te rugăm să încarci un fișier de maximum 4 MB.", en: "The file is too large. Please upload a file up to 4 MB.", aliases: ["FiÈ™ierul este prea mare. Te rugÄƒm sÄƒ Ã®ncarci un fiÈ™ier de maximum 4 MB."] },
  { ro: "Termeni și Condiții", en: "Terms and Conditions", aliases: ["Termeni È™i CondiÈ›ii"] },
  { ro: "Design and Build by Macarie Mihai-Alexandru", en: "Designed and Built by Macarie Mihai-Alexandru" },
  { ro: "Companie", en: "Company", aliases: ["Company"] },
  { ro: "Funcționalități", en: "Features", aliases: ["Features"] },
  { ro: "Blog", en: "Blog" },
  { ro: "Social Media", en: "Social Media" },
  { ro: "Resurse", en: "Resources", aliases: ["Stuff"] },
  { ro: "Ghid de stil", en: "Style Guide", aliases: ["Style Guide"] },
  { ro: "Licențiere", en: "Licensing", aliases: ["Licensing"] },
  { ro: "Instrucțiuni", en: "Instructions", aliases: ["Instructions"] },
  { ro: "Jurnal modificări", en: "Change Log", aliases: ["Change Log"] },
  { ro: "Înapoi la site", en: "Back to Website", aliases: ["ÃŽnapoi la site"] },
  { ro: "Termeni și Condiții pentru formularul de contact", en: "Terms and Conditions for the Contact Form", aliases: ["Termeni È™i CondiÈ›ii pentru formularul de contact"] },
  { ro: "Ultima actualizare:", en: "Last updated:" },
  { ro: "Ai o întrebare?", en: "Have a Question?", aliases: ["Ai o Ã®ntrebare?"] },
  { ro: "Revenire la pagina principală", en: "Return to Homepage", aliases: ["Revenire la pagina principalÄƒ"] },
  { ro: "Custom is our custom", en: "Custom Is Our Custom" },
  { ro: "Povestea Orion Grup", en: "The Orion Grup Story" },
  { ro: "De ce a apărut Orion Grup?", en: "Why Was Orion Grup Created?", aliases: ["De ce a apÄƒrut Orion Grup?"] },
  { ro: "Concept", en: "Concept" },
  { ro: "Selecție", en: "Selection", aliases: ["SelecÈ›ie"] },
  { ro: "Implementare", en: "Implementation" },
  { ro: "Deschide imaginea", en: "Open Image" },
  { ro: "Închide imaginea", en: "Close Image", aliases: ["ÃŽnchide imaginea"] },
  { ro: "Imagine mărită", en: "Enlarged Image", aliases: ["Imagine mÄƒritÄƒ"] },
  { ro: "All products", en: "All Products" },
  { ro: "You are watching", en: "You Are Viewing" },
  { ro: "Clear all", en: "Clear All" },
  { ro: "Solutions", en: "Solutions" },
  { ro: "Collections", en: "Collections" },
  { ro: "Categories", en: "Categories" },
  { ro: "All Categories", en: "All Categories" },
  { ro: "Lighting", en: "Lighting" },
  { ro: "Interior lighting", en: "Interior Lighting" },
  { ro: "Outdoor lighting", en: "Outdoor Lighting" },
  { ro: "Materials", en: "Materials" },
  { ro: "Styles", en: "Styles" },
  { ro: "Designer", en: "Designer" },
  { ro: "Products", en: "Products" },
  { ro: "Order by:", en: "Order by:" },
  { ro: "Relevance", en: "Relevance" },
  { ro: "List view", en: "List View" },
  { ro: "Grid view", en: "Grid View" },
  { ro: "Loading shop…", en: "Loading Shop...", aliases: ["Loading shopâ€¦"] },
  { ro: "No image", en: "No Image" },
  { ro: "Produsul se încarcă…", en: "Loading Product...", aliases: ["Produsul se Ã®ncarcÄƒâ€¦"] },
  { ro: "Produsul nu a fost găsit", en: "Product Not Found", aliases: ["Produsul nu a fost gÄƒsit"] },
  { ro: "Înapoi la Shop", en: "Back to Shop", aliases: ["ÃŽnapoi la Shop"] },
  { ro: "La cerere", en: "On Request" },
  { ro: "Cod:", en: "Code:" },
  { ro: "Preț", en: "Price", aliases: ["PreÈ›"] },
  { ro: "Cere ofertă", en: "Request Quote", aliases: ["Cere ofertÄƒ"] },
  { ro: "Contactează-ne", en: "Contact Us", aliases: ["ContacteazÄƒ-ne"] },
  { ro: "Specificații tehnice", en: "Technical Specifications", aliases: ["SpecificaÈ›ii tehnice"] },
  { ro: "Dimensiuni", en: "Dimensions" },
  { ro: "Downloads", en: "Downloads" },
  { ro: "Cataloage", en: "Catalogs" },
  { ro: "Nu există specificații momentan.", en: "There are no specifications at the moment.", aliases: ["Nu existÄƒ specificaÈ›ii momentan."] },
  { ro: "Nu există imagini pentru dimensiuni momentan.", en: "There are no dimension images at the moment.", aliases: ["Nu existÄƒ imagini pentru dimensiuni momentan."] },
  { ro: "Nu există documente momentan.", en: "There are no documents at the moment.", aliases: ["Nu existÄƒ documente momentan."] },
  { ro: "Produse similare", en: "Similar Products" },
  { ro: "Acces privat", en: "Private Access" },
  { ro: "Se verifică accesul...", en: "Checking Access...", aliases: ["Se verificÄƒ accesul..."] },
  { ro: "Vezi lucrările", en: "View Works", aliases: ["Vezi lucrÄƒrile"] },
  { ro: "Autentifică-te pentru acces", en: "Sign In for Access", aliases: ["AutentificÄƒ-te pentru acces"] },
  { ro: "Click pentru mărire", en: "Click to Enlarge", aliases: ["Click pentru mÄƒrire"] },
  { ro: "Acces pentru utilizatori autentificați", en: "Access for Authenticated Users", aliases: ["Acces pentru utilizatori autentificaÈ›i"] },
  { ro: "Conținut blocat", en: "Locked Content", aliases: ["ConÈ›inut blocat"] },
  { ro: "Autentifică-te", en: "Sign In", aliases: ["AutentificÄƒ-te"] },
  { ro: "Blocat", en: "Locked" },
  { ro: "Vezi imaginea", en: "View Image" },
  { ro: "Înapoi la prima pagină", en: "Back to Homepage", aliases: ["ÃŽnapoi la prima paginÄƒ"] },
  { ro: "Cataloage Orion Grup", en: "Orion Grup Catalogs" },
  { ro: "CATALOG DIGITAL", en: "DIGITAL CATALOG" },
  { ro: "Click pentru previzualizare", en: "Click to Preview" },
  { ro: "Vezi", en: "View" },
  { ro: "Descarcă", en: "Download", aliases: ["DescarcÄƒ"] },
  { ro: "Vezi catalogul", en: "View Catalog" },
  { ro: "Descarcă catalogul", en: "Download Catalog", aliases: ["DescarcÄƒ catalogul"] },
  { ro: "Previzualizare catalog", en: "Catalog Preview" },
  { ro: "Închide catalogul", en: "Close Catalog", aliases: ["ÃŽnchide catalogul"] },
  { ro: "Cont Orion Grup", en: "Orion Grup Account" },
  { ro: "Acces privat la resursele Orion Grup", en: "Private Access to Orion Grup Resources" },
  { ro: "Creează cont", en: "Create Account", aliases: ["CreeazÄƒ cont"] },
  { ro: "Intră în cont", en: "Sign In", aliases: ["IntrÄƒ Ã®n cont"] },
  { ro: "Nume persoană fizică / Nume firmă", en: "Person Name / Company Name", aliases: ["Nume persoanÄƒ fizicÄƒ / Nume firmÄƒ"] },
  { ro: "opțional", en: "optional", aliases: ["opÈ›ional"] },
  { ro: "Parolă", en: "Password", aliases: ["ParolÄƒ"] },
  { ro: "Minimum 6 caractere", en: "Minimum 6 characters" },
  { ro: "Abonare la newsletter", en: "Newsletter Subscription" },
  { ro: "Se procesează...", en: "Processing...", aliases: ["Se proceseazÄƒ..."] },
  { ro: "Înapoi la", en: "Back to", aliases: ["ÃŽnapoi la"] },
  { ro: "pagina principală", en: "homepage", aliases: ["pagina principalÄƒ"] },
  { ro: "Se încarcă portofoliul...", en: "Loading Portfolio...", aliases: ["Se Ã®ncarcÄƒ portofoliul..."] },
  { ro: "Nu am putut încărca portofoliul:", en: "Could not load portfolio:", aliases: ["Nu am putut Ã®ncÄƒrca portofoliul:"] },
  { ro: "Nu există proiecte în portofoliu momentan.", en: "There are no portfolio projects at the moment.", aliases: ["Nu existÄƒ proiecte Ã®n portofoliu momentan."] },
  { ro: "Toate categoriile", en: "All Categories" },
  { ro: "Următoarele", en: "Next", aliases: ["UrmÄƒtoarele"] },
  { ro: "Următoarele proiecte", en: "Next Projects", aliases: ["UrmÄƒtoarele proiecte"] },
  { ro: "Se încarcă proiectul...", en: "Loading Project...", aliases: ["Se Ã®ncarcÄƒ proiectul..."] },
  { ro: "Proiectul nu a fost găsit.", en: "Project Not Found.", aliases: ["Proiectul nu a fost gÄƒsit."] },
  { ro: "Înapoi la portofoliu", en: "Back to Portfolio", aliases: ["ÃŽnapoi la portofoliu"] },
  { ro: "Proiect Orion Grup", en: "Orion Grup Project" },
  { ro: "De pe șantier la realitate", en: "From Site to Reality", aliases: ["De pe È™antier la realitate", "De pe santier la realitate"] },
  { ro: "Nu există imagini principale pentru acest proiect.", en: "There are no main images for this project.", aliases: ["Nu existÄƒ imagini principale pentru acest proiect."] },
  { ro: "Nu există imagini pentru secțiunea de șantier.", en: "There are no images for the site section.", aliases: ["Nu existÄƒ imagini pentru secÈ›iunea de È™antier."] },
  { ro: "Imaginea anterioară", en: "Previous Image", aliases: ["Imaginea anterioarÄƒ"] },
  { ro: "Imaginea următoare", en: "Next Image", aliases: ["Imaginea urmÄƒtoare"] },
  { ro: "Mergi la imaginea", en: "Go to Image" },
  { ro: "Transformarea Spațiului cu Iluminat", en: "Transforming Spaces with Lighting", aliases: ["Transformarea SpaÈ›iului cu Iluminat"] },
  { ro: "Indoor Lighting", en: "Indoor Lighting" },
  { ro: "Retail Lighting", en: "Retail Lighting" },
  { ro: "Iluminat fațade", en: "Facade Lighting", aliases: ["Iluminat faÈ›ade"] },
  {
    ro: "Nu lăsăm atmosfera la voia întâmplării. De la primele schițe pe planșetă până la ultimul detaliu de montaj, orchestrăm fiecare accent, umbră și lumen. O fuziune între inginerie pură și rafinament estetic, calculată la milimetru pentru identitatea spațiului tău.",
    en: "We do not leave atmosphere to chance. From the first sketches to the final installation detail, we orchestrate every accent, shadow and lumen. A fusion of precise engineering and aesthetic refinement, calculated to the millimeter for your space's identity.",
    aliases: ["Nu lÄƒsÄƒm atmosfera la voia Ã®ntÃ¢mplÄƒrii. De la primele schiÈ›e pe planÈ™etÄƒ pÃ¢nÄƒ la ultimul detaliu de montaj, orchestrÄƒm fiecare accent, umbrÄƒ È™i lumen. O fuziune Ã®ntre inginerie purÄƒ È™i rafinament estetic, calculatÄƒ la milimetru pentru identitatea spaÈ›iului tÄƒu."],
  },
  {
    ro: "Compania noastră a fost fondată în anul 1996 cu misiunea de a oferi clienților noștri soluții de iluminat și instalații electrice de înaltă calitate, iar de atunci ne-am angajat să atingem acest obiectiv. De-a lungul anilor, ne-am construit o reputație de excelență în industria noastră și ne mândrim cu munca pe care o facem.",
    en: "Our company was founded in 1996 with the mission of offering our clients high-quality lighting and electrical installation solutions, and we have remained committed to that goal ever since. Over the years, we have built a reputation for excellence in our industry and we take pride in the work we do.",
    aliases: ["Compania noastrÄƒ a fost fondatÄƒ Ã®n anul 1996 cu misiunea de a oferi clienÈ›ilor noÈ™tri soluÈ›ii de iluminat È™i instalaÈ›ii electrice de Ã®naltÄƒ calitate, iar de atunci ne-am angajat sÄƒ atingem acest obiectiv. De-a lungul anilor, ne-am construit o reputaÈ›ie de excelenÈ›Äƒ Ã®n industria noastrÄƒ È™i ne mÃ¢ndrim cu munca pe care o facem."],
  },
  {
    ro: "Lucrăm cu o gamă largă de clienți, de la proprietari de locuințe la corporații mari și suntem capabili să oferim soluții de iluminat personalizate pentru orice proiect. Echipa noastră de experți are cunoștințe extinse în domeniul iluminatului, iar noi cercetăm și ne menținem în permanență la curent cu cele mai recente tendințe și tehnologii.",
    en: "We work with a wide range of clients, from homeowners to large corporations, and we can provide customized lighting solutions for any project. Our expert team has extensive lighting knowledge, and we constantly research and stay up to date with the latest trends and technologies.",
    aliases: ["LucrÄƒm cu o gamÄƒ largÄƒ de clienÈ›i, de la proprietari de locuinÈ›e la corporaÈ›ii mari È™i suntem capabili sÄƒ oferim soluÈ›ii de iluminat personalizate pentru orice proiect. Echipa noastrÄƒ de experÈ›i are cunoÈ™tinÈ›e extinse Ã®n domeniul iluminatului, iar noi cercetÄƒm È™i ne menÈ›inem Ã®n permanenÈ›Äƒ la curent cu cele mai recente tendinÈ›e È™i tehnologii."],
  },
  {
    ro: "În esența noastră, credem în furnizarea de servicii excepționale pentru clienți. Înțelegem că fiecare proiect este unic și ne acordăm timpul necesar pentru a asculta nevoile și preferințele clienților noștri. Lucrăm îndeaproape cu clienții noștri pe parcursul întregului proces, de la concept până la instalare, pentru a ne asigura că viziunea lor este realizată.",
    en: "At our core, we believe in delivering exceptional service to clients. We understand that every project is unique, so we take the time to listen to each client's needs and preferences. We work closely with our clients throughout the entire process, from concept to installation, to make sure their vision is brought to life.",
    aliases: ["ÃŽn esenÈ›a noastrÄƒ, credem Ã®n furnizarea de servicii excepÈ›ionale pentru clienÈ›i. ÃŽnÈ›elegem cÄƒ fiecare proiect este unic È™i ne acordÄƒm timpul necesar pentru a asculta nevoile È™i preferinÈ›ele clienÈ›ilor noÈ™tri. LucrÄƒm Ã®ndeaproape cu clienÈ›ii noÈ™tri pe parcursul Ã®ntregului proces, de la concept pÃ¢nÄƒ la instalare, pentru a ne asigura cÄƒ viziunea lor este realizatÄƒ."],
  },
  {
    ro: "De asemenea, ne angajăm să promovăm durabilitatea, eficiența energetică și în mod special etica în prețurile competitive pe care le oferim. Considerăm că este important să reducem impactul asupra mediului și să ne ajutăm clienții să economisească din costurile energetice. Oferim o gamă largă de opțiuni de iluminat eficiente din punct de vedere energetic și explorăm mereu noi modalități de a reduce amprenta de carbon.",
    en: "We are also committed to promoting sustainability, energy efficiency and, in particular, ethical standards in the competitive pricing we offer. We believe it is important to reduce environmental impact and help our clients save on energy costs. We offer a wide range of energy-efficient lighting options and continually explore new ways to reduce our carbon footprint.",
    aliases: ["De asemenea, ne angajÄƒm sÄƒ promovÄƒm durabilitatea, eficienÈ›a energeticÄƒ È™i Ã®n mod special etica Ã®n preÈ›urile competitive pe care le oferim. ConsiderÄƒm cÄƒ este important sÄƒ reducem impactul asupra mediului È™i sÄƒ ne ajutÄƒm clienÈ›ii sÄƒ economiseascÄƒ din costurile energetice. Oferim o gamÄƒ largÄƒ de opÈ›iuni de iluminat eficiente din punct de vedere energetic È™i explorÄƒm mereu noi modalitÄƒÈ›i de a reduce amprenta de carbon."],
  },
  {
    ro: "Vă mulțumim că ne luați în considerare pentru nevoile dvs. de iluminat și instalații electrice. Așteptăm cu nerăbdare să lucrăm cu dvs. și să vă oferim produse și servicii de cea mai înaltă calitate.",
    en: "Thank you for considering us for your lighting and electrical installation needs. We look forward to working with you and providing products and services of the highest quality.",
    aliases: ["VÄƒ mulÈ›umim cÄƒ ne luaÈ›i Ã®n considerare pentru nevoile dvs. de iluminat È™i instalaÈ›ii electrice. AÈ™teptÄƒm cu nerÄƒbdare sÄƒ lucrÄƒm cu dvs. È™i sÄƒ vÄƒ oferim produse È™i servicii de cea mai Ã®naltÄƒ calitate."],
  },
  {
    ro: "Etapa preliminară presupune o serie de consultări aprofundate privind proiectul de arhitectură sau de amenajare interioară, desfășurate alături de beneficiar și, acolo unde este necesar, împreună cu arhitectul sau designerul de interior. Este un proces complex, care se poate întinde pe parcursul mai multor zile sau chiar săptămâni, tocmai datorită atenției acordate fiecărui detaliu: de la stabilirea atmosferei luminoase ideale pentru fiecare spațiu, până la selecția soluțiilor de iluminat, integrarea elementelor tehnice și armonizarea perfectă a funcționalității cu estetica proiectului.",
    en: "The preliminary stage includes a series of in-depth consultations around the architecture or interior design project, carried out with the client and, where needed, together with the architect or interior designer. It is a complex process that can take several days or even weeks because every detail matters: defining the ideal lighting atmosphere for each space, selecting lighting solutions, integrating technical elements and aligning functionality with the project's aesthetics.",
    aliases: ["Etapa preliminarÄƒ presupune o serie de consultÄƒri aprofundate privind proiectul de arhitecturÄƒ sau de amenajare interioarÄƒ, desfÄƒÈ™urate alÄƒturi de beneficiar È™i, acolo unde este necesar, Ã®mpreunÄƒ cu arhitectul sau designerul de interior. Este un proces complex, care se poate Ã®ntinde pe parcursul mai multor zile sau chiar sÄƒptÄƒmÃ¢ni, tocmai datoritÄƒ atenÈ›iei acordate fiecÄƒrui detaliu: de la stabilirea atmosferei luminoase ideale pentru fiecare spaÈ›iu, pÃ¢nÄƒ la selecÈ›ia soluÈ›iilor de iluminat, integrarea elementelor tehnice È™i armonizarea perfectÄƒ a funcÈ›ionalitÄƒÈ›ii cu estetica proiectului."],
  },
  {
    ro: "După înțelegerea în profunzime a temei și a cerințelor proiectului, realizăm o selecție riguroasă a soluțiilor de iluminat, propunând exclusiv acele opțiuni care răspund cu adevărat conceptului, exigențelor estetice și bugetului disponibil. Nu mizăm pe liste ample de produse lăsate ulterior spre filtrare, ci pe recomandări curate, argumentate și atent calibrate, menite să aducă valoare reală proiectului. În această etapă, prioritatea noastră nu este volumul, ci contribuția autentică la reușita întregii lucrări, prin soluții premium, relevante și impecabil integrate.",
    en: "After fully understanding the brief and project requirements, we create a rigorous selection of lighting solutions, proposing only the options that truly match the concept, aesthetic expectations and available budget. We do not rely on broad lists of products to be filtered later, but on clear, well-argued and carefully calibrated recommendations designed to bring real value to the project. At this stage, our priority is not volume, but a meaningful contribution to the success of the entire work through premium, relevant and seamlessly integrated solutions.",
    aliases: ["DupÄƒ Ã®nÈ›elegerea Ã®n profunzime a temei È™i a cerinÈ›elor proiectului, realizÄƒm o selecÈ›ie riguroasÄƒ a soluÈ›iilor de iluminat, propunÃ¢nd exclusiv acele opÈ›iuni care rÄƒspund cu adevÄƒrat conceptului, exigenÈ›elor estetice È™i bugetului disponibil. Nu mizÄƒm pe liste ample de produse lÄƒsate ulterior spre filtrare, ci pe recomandÄƒri curate, argumentate È™i atent calibrate, menite sÄƒ aducÄƒ valoare realÄƒ proiectului. ÃŽn aceastÄƒ etapÄƒ, prioritatea noastrÄƒ nu este volumul, ci contribuÈ›ia autenticÄƒ la reuÈ™ita Ã®ntregii lucrÄƒri, prin soluÈ›ii premium, relevante È™i impecabil integrate."],
  },
  {
    ro: "Relația cu noi continuă dincolo de momentul achiziției, printr-un proces de asistență post-vânzare atent susținut și prin implicare activă în etapa de implementare și montaj. Ne asigurăm că fiecare soluție este pusă în operă corect, în acord cu standardele tehnice și estetice ale proiectului, deoarece execuția influențează decisiv rezultatul final. Având în vedere gradul ridicat de complexitate al soluțiilor de ultimă generație din portofoliul nostru, expertiza și prezența noastră în această etapă devin esențiale pentru o integrare impecabilă și pentru obținerea efectului dorit.",
    en: "Our relationship continues beyond the purchase through a carefully supported after-sales process and active involvement during implementation and installation. We make sure every solution is installed correctly, in line with the project's technical and aesthetic standards, because execution has a decisive impact on the final result. Given the high complexity of the latest-generation solutions in our portfolio, our expertise and presence at this stage are essential for flawless integration and for achieving the intended effect.",
    aliases: ["RelaÈ›ia cu noi continuÄƒ dincolo de momentul achiziÈ›iei, printr-un proces de asistenÈ›Äƒ post-vÃ¢nzare atent susÈ›inut È™i prin implicare activÄƒ Ã®n etapa de implementare È™i montaj. Ne asigurÄƒm cÄƒ fiecare soluÈ›ie este pusÄƒ Ã®n operÄƒ corect, Ã®n acord cu standardele tehnice È™i estetice ale proiectului, deoarece execuÈ›ia influenÈ›eazÄƒ decisiv rezultatul final. AvÃ¢nd Ã®n vedere gradul ridicat de complexitate al soluÈ›iilor de ultimÄƒ generaÈ›ie din portofoliul nostru, expertiza È™i prezenÈ›a noastrÄƒ Ã®n aceastÄƒ etapÄƒ devin esenÈ›iale pentru o integrare impecabilÄƒ È™i pentru obÈ›inerea efectului dorit."],
  },
  {
    ro: "Intră într-o zonă dedicată clienților Orion Grup, unde ai acces la cataloage, informații actualizate despre produse și materiale utile pentru proiecte de iluminat și instalații electrice.",
    en: "Enter a dedicated area for Orion Grup clients, where you can access catalogs, updated product information and useful materials for lighting and electrical installation projects.",
    aliases: ["IntrÄƒ Ã®ntr-o zonÄƒ dedicatÄƒ clienÈ›ilor Orion Grup, unde ai acces la cataloage, informaÈ›ii actualizate despre produse È™i materiale utile pentru proiecte de iluminat È™i instalaÈ›ii electrice."],
  },
  {
    ro: "Cataloagele sunt disponibile doar utilizatorilor autentificați, pentru ca tu să ai mereu la îndemână documentația potrivită atunci când alegi sau recomanzi soluții Orion Grup.",
    en: "The catalogs are available only to authenticated users, so you always have the right documentation at hand when choosing or recommending Orion Grup solutions.",
    aliases: ["Cataloagele sunt disponibile doar utilizatorilor autentificaÈ›i, pentru ca tu sÄƒ ai mereu la Ã®ndemÃ¢nÄƒ documentaÈ›ia potrivitÄƒ atunci cÃ¢nd alegi sau recomanzi soluÈ›ii Orion Grup."],
  },
  {
    ro: "Vreau să primesc noutăți, cataloage și recomandări despre soluțiile Orion Grup.",
    en: "I want to receive news, catalogs and recommendations about Orion Grup solutions.",
    aliases: ["Vreau sÄƒ primesc noutÄƒÈ›i, cataloage È™i recomandÄƒri despre soluÈ›iile Orion Grup."],
  },
  {
    ro: "Accesează catalogul digital Orion Grup direct pe site. Îl poți previzualiza în format flipbook sau îl poți deschide pentru descărcare.",
    en: "Access the Orion Grup digital catalog directly on the website. You can preview it as a flipbook or open it for download.",
    aliases: ["AcceseazÄƒ catalogul digital Orion Grup direct pe site. ÃŽl poÈ›i previzualiza Ã®n format flipbook sau Ã®l poÈ›i deschide pentru descÄƒrcare."],
  },
  {
    ro: "Urmărește imagini reale din proiectele Orion Grup aflate în lucru: montaj, instalații, corpuri de iluminat, teste și detalii direct din șantier.",
    en: "Follow real images from Orion Grup projects in progress: installation, electrical work, lighting fixtures, tests and details directly from the site.",
    aliases: ["UrmÄƒreÈ™te imagini reale din proiectele Orion Grup aflate Ã®n lucru: montaj, instalaÈ›ii, corpuri de iluminat, teste È™i detalii direct din È™antier."],
  },
  {
    ro: "Pentru a vedea pagina completă și toate lucrările în desfășurare, autentifică-te în contul Orion Grup.",
    en: "To view the full page and all ongoing works, sign in to your Orion Grup account.",
    aliases: ["Pentru a vedea pagina completÄƒ È™i toate lucrÄƒrile Ã®n desfÄƒÈ™urare, autentificÄƒ-te Ã®n contul Orion Grup."],
  },
  {
    ro: "O galerie dedicată proiectelor Orion Grup aflate în lucru. Aici poți vedea imagini reale din șantier, etape de montaj, verificări, instalații și detalii tehnice din proiectele în desfășurare.",
    en: "A gallery dedicated to Orion Grup projects currently in progress. Here you can see real site images, installation stages, checks, electrical work and technical details from ongoing projects.",
    aliases: ["O galerie dedicatÄƒ proiectelor Orion Grup aflate Ã®n lucru. Aici poÈ›i vedea imagini reale din È™antier, etape de montaj, verificÄƒri, instalaÈ›ii È™i detalii tehnice din proiectele Ã®n desfÄƒÈ™urare."],
  },
  {
    ro: "Această pagină este disponibilă doar pentru utilizatorii autentificați. Autentifică-te pentru a vedea imaginile complete din proiectele aflate în lucru.",
    en: "This page is available only to authenticated users. Sign in to view the full images from projects in progress.",
    aliases: ["AceastÄƒ paginÄƒ este disponibilÄƒ doar pentru utilizatorii autentificaÈ›i. AutentificÄƒ-te pentru a vedea imaginile complete din proiectele aflate Ã®n lucru."],
  },
  {
    ro: "Această pagină explică modul în care sunt folosite datele transmise prin formularul de contact și cerere de ofertă de pe site-ul Orion Grup.",
    en: "This page explains how data submitted through the contact and quote request form on the Orion Grup website is used.",
    aliases: ["AceastÄƒ paginÄƒ explicÄƒ modul Ã®n care sunt folosite datele transmise prin formularul de contact È™i cerere de ofertÄƒ de pe site-ul Orion Grup."],
  },
  { ro: "1. Rolul formularului", en: "1. Purpose of the Form" },
  { ro: "2. Datele care pot fi colectate", en: "2. Data That May Be Collected" },
  { ro: "3. Produsele favorite", en: "3. Favorite Products" },
  { ro: "4. Fișiere atașate", en: "4. Attached Files", aliases: ["4. FiÈ™iere ataÈ™ate"] },
  { ro: "5. Scopul folosirii datelor", en: "5. Purpose of Data Use" },
  { ro: "6. Trimiterea emailurilor prin servicii terțe", en: "6. Sending Emails Through Third-Party Services", aliases: ["6. Trimiterea emailurilor prin servicii terÈ›e"] },
  { ro: "7. Confirmarea către utilizator", en: "7. User Confirmation", aliases: ["7. Confirmarea cÄƒtre utilizator"] },
  { ro: "8. Obligațiile utilizatorului", en: "8. User Obligations", aliases: ["8. ObligaÈ›iile utilizatorului"] },
  { ro: "9. Securitate și limitări tehnice", en: "9. Security and Technical Limitations", aliases: ["9. Securitate È™i limitÄƒri tehnice"] },
  { ro: "10. Păstrarea datelor", en: "10. Data Retention", aliases: ["10. PÄƒstrarea datelor"] },
  { ro: "11. Drepturile utilizatorului", en: "11. User Rights" },
  { ro: "12. Modificarea termenilor", en: "12. Changes to These Terms" },
  {
    ro: "Pentru clarificări privind formularul, produsele sau procesarea cererilor de ofertă, poți contacta Orion Grup folosind datele publicate pe site.",
    en: "For clarifications about the form, products or quote request processing, you can contact Orion Grup using the contact details published on the website.",
    aliases: ["Pentru clarificÄƒri privind formularul, produsele sau procesarea cererilor de ofertÄƒ, poÈ›i contacta Orion Grup folosind datele publicate pe site."],
  },
];

const normalizedEntries = entries.flatMap((entry) => {
  const values = [entry.ro, entry.en, ...(entry.aliases ?? [])];
  return values.map((value) => ({ key: normalize(value), entry }));
});

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

function translateValue(value: string, language: Language) {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const normalized = normalize(value);
  if (!normalized) return value;

  const match = normalizedEntries.find((item) => item.key === normalized);
  if (!match) return value;

  return `${leading}${match.entry[language]}${trailing}`;
}

function translateTextNodes(root: ParentNode, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "OPTION"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalize(node.nodeValue ?? "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach((node) => {
    const next = translateValue(node.nodeValue ?? "", language);
    if (next !== node.nodeValue) node.nodeValue = next;
  });
}

function translateAttributes(root: ParentNode, language: Language) {
  const elements =
    root instanceof Element ? [root, ...Array.from(root.querySelectorAll("*"))] : Array.from(root.querySelectorAll("*"));

  elements.forEach((element) => {
    ["placeholder", "aria-label", "title", "alt"].forEach((attr) => {
      const value = element.getAttribute(attr);
      if (!value) return;

      const next = translateValue(value, language);
      if (next !== value) element.setAttribute(attr, next);
    });
  });
}

function translatePage(language: Language) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = language;
  translateTextNodes(document.body, language);
  translateAttributes(document.body, language);
}

function readInitialLanguage(): Language {
  if (typeof window === "undefined") return "ro";
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "ro";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => {
      const next = current === "ro" ? "en" : "ro";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  useEffect(() => {
    translatePage(language);

    let queued = false;
    const run = () => {
      queued = false;
      translatePage(language);
    };

    const observer = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(run);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["placeholder", "aria-label", "title", "alt"],
    });

    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
