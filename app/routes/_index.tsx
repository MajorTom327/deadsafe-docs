import Paragraph from "~/components/Paragraph";
import Title from "~/components/Title";
import Image from "~/components/Image";
import logoUrl from "~/assets/deadsafe_logo.webp";

export default function Index() {
  return (
    <div>
      <Image src={logoUrl} />
      <Title>The DeadSafe</Title>
      <Paragraph>
        A web3 game of zombies based on NFT and sharing a total balance. Play
        the game against all other player to be the first one to open the vault.
      </Paragraph>

      <Paragraph>
        The DeadSafe project is a web3 game which use NFT to create internal
        value and make most value going to a common safe. Unlockable only by
        holding all the keys NFT won in the game.
      </Paragraph>

      <Paragraph>
        You have to manage a Quarantine Zone of a city full of zombies. Handle
        refugees and create your self army to explore the city and find all the
        keys. When you get all of them, go to the safe and withdraw all the
        value accumulated during the game.
      </Paragraph>

      <Paragraph>
        Buying ressources NFT make the value of the new received NFT go to the
        safe and grow it value. That make you handle more easily game value to
        find more rapidly the keys.
      </Paragraph>
    </div>
  );
}
