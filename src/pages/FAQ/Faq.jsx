import Accordion from "../../components/Accordion/Accordion"

export default function Faq(){

    return (
        <div>
            <h1>Često postavljena pitanja</h1>
            <Accordion question="Kako se upisati?">Odaberite tečaj i ispunite kontakt formu -javit ćemo se povratno.</Accordion>
            <Accordion question="Način plaćanja?">Kartice i bankovne uplate su podržane.</Accordion>
            <Accordion question="Jesu li materijali dostupni?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eaque consequatur incidunt perspiciatis, cumque dolore aliquam a magni, quis libero similique voluptatibus velit. Voluptas unde necessitatibus quidem eveniet expedita sapiente?</Accordion>
            <Accordion question="Mogu li dobiti račun?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro rem. Et ducimus voluptas animi assumenda neque at, quae sed perferendis dolore iure voluptatum amet minima. Soluta suscipit sapiente sed!</Accordion>
            <Accordion question="Trebam li predznanje?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro rem. Et ducimus voluptas animi assumenda neque at, quae sed perferendis dolore iure voluptatum amet minima. Soluta suscipit sapiente sed!</Accordion>
        </div>
    )
}