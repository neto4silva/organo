import "./Form.css";
import Select from "../Select";
import Button from "../Button";
import { useState } from "react";

const Form = () => {
  const champions = [
    "Briar",
    "Naafiri",
    "Milio",
    "K’sante",
    "Nilah",
    "Bel’Veth",
    "Renata Glasc",
    "Zeri",
    "Vex",
    "Akshan",
    "Gwen",
    "Viego",
    "Rell",
    "Seraphine",
    "Samira",
    "Yone",
    "Lillia",
    "Sett",
    "Aphelios",
    "Senna",
    "Qiyana",
    "Yuumi",
    "Sylas",
    "Neeko",
    "Pyke",
    "Kai’Sa",
    "Zoe",
    "Ornn",
    "Kayn",
    "Rakan",
    "Xayah",
    "Camille",
    "Ivern",
    "Kled",
    "Taliyah",
    "Aurelion Sol",
    "Jhin",
    "Illaoi",
    "Kindred",
    "Tahm Kench",
    "Ekko",
    "Bard",
    "Rek’Sai",
    "Kalista",
    "Azir",
    "Gnar",
    "Braum",
    "Vel’Koz",
    "Yasuo",
    "Jinx",
    "Lucian",
    "Aatrox",
    "Lissandra",
    "Zac",
    "Quinn",
    "Thresh",
    "Vi",
    "Nami",
    "Zed",
    "Elise",
    "Kha’Zix",
    "Syndra",
    "Rengar",
    "Diana",
    "Zyra",
    "Jayce",
    "Draven",
    "Darius",
    "Varus",
    "Hecarim",
    "Lulu",
    "Fiora",
    "Nautilus",
    "Ziggs",
    "Sejuani",
    "Viktor",
    "Ahri",
    "Volibear",
    "Fizz",
    "Shyvana",
    "Graves",
    "Xerath",
    "Riven",
    "Talon",
    "Skarner",
    "Wukong",
    "Leona",
    "Yorick",
    "Orianna",
    "Vayne",
    "Rumble",
    "Brand",
    "Lee Sin",
    "Nocturne",
    "Jarvan IV",
    "Maokai",
    "Karma",
    "Renekton",
    "Caitlyn",
    "Cassiopeia",
    "Trundle",
    "Irelia",
    "LeBlanc",
    "Lux",
    "Swain",
    "Sona",
    "Miss Fortune",
    "Urgot",
    "Galio",
    "Vladimir",
    "Xin Zhao",
    "Kog’Maw",
    "Olaf",
    "Malzahar",
    "Akali",
    "Garen",
    "Kennen",
    "Shen",
    "Ezreal",
    "Mordekaiser",
    "Gragas",
    "Pantheon",
    "Poppy",
    "Nidalee",
    "Udyr",
    "Heimerdinger",
    "Shaco",
    "Nasus",
    "Corki",
    "Katarina",
    "Blitzcrank",
    "Dr. Mundo",
    "Janna",
    "Malphite",
    "Gangplank",
    "Taric",
    "Kassadin",
    "Veigar",
    "Anivia",
    "Rammus",
    "Amumu",
    "Cho’Gath",
    "Karthus",
    "Evelynn",
    "Tryndamere",
    "Twitch",
    "Singed",
    "Zilean",
    "Alistar",
    "Annie",
    "Ashe",
    "Fiddlesticks",
    "Jax",
    "Kayle",
    "Master Yi",
    "Morgana",
    "Nunu & Willump",
    "Ryze",
    "Sion",
    "Sivir",
    "Soraka",
    "Teemo",
    "Tristana",
    "Twisted Fate",
    "Warwick",
  ];

  const routes = ["Support", "Mid Laner", "Top Laner", "Adcarry"];

  const teams = [
    "JD Gaming",
    "Bilibili Gaming",
    "LNG Esports",
    "Weibo Gaming",
    "Cloud9",
    "NRG",
    "Gen.G",
    "Team Liquid",
    "T1",
    "MAD Lions",
    "G2 Esports",
    "DetonatioN FocusMe",
    "KT Rolster",
    "Dplus KIA",
    "PSG Talon",
    "CTBC Flying Oyster",
    "GAM Esports",
    "Movistar R7",
    "Fnatic",
    "Team Whales",
    "LOUD",
  ];

  const [team, setTeam] = useState("");
  const [champion, setChampion] = useState("");
  const [route, setRoute] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    console.log("Champion:", champion);
    console.log("Route:", route);
    console.log("Team:", team);
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Fill in the data to create Champion Cards</h2>
        <Select
          value={champion}
          onTyped={(value) => setChampion(value)}
          require={true}
          label="Champion"
          itens={champions}
        />
        <Select
          value={route}
          onTyped={(value) => setRoute(value)}
          require={true}
          label="Route"
          itens={routes}
        />
        <Select
          value={team}
          onTyped={(value) => setTeam(value)}
          require={true}
          label="Teams"
          itens={teams}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
