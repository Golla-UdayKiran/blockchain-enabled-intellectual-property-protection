import Image from "next/image";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="BLOCKGUARD IP SHIELD: Unleashing Blockchain Magic for Intellectual Property Protection!"
        description="Empower your projects with BLOCKGUARD IP SHIELD, where Blockchain meets AI for unparalleled Intellectual Property security!"
        // ... other MetaHeader props
      />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="text-center mb-6">
            <span className="block text-2xl mb-2">
              🔒 Revolutionize IP Protection with Blockchain! 🌐 Leverage the Power of AI Content Recognition to
              Safeguard Creativity! 🚀 #InnovationGuardians #BlockchainIPShield 🎨✨
            </span>
            <span className="block text-4xl font-bold">BLOCKGUARD IP SHIELD</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-3xl">
              <p className="text-center text-lg mt-8">
                🌟 Welcome to the future of content protection! Dive into the challenge with BLOCKGUARD IP SHIELD – your
                go-to solution for BLOCKCHAIN-ENABLED INTELLECTUAL PROPERTY PROTECTION WITH AI CONTENT RECOGNITION! 🚀
                Safeguard your creations with cutting-edge technology and make your mark in the decentralized world.
                🛡️✨
              </p>
              <p className="text-center text-lg">
                🌐 Elevate your projects with BLOCKGUARD IP SHIELD: Blockchain-Enabled IP Protection featuring AI
                content recognition! Safeguard your intellectual property like never before and explore the endless
                possibilities of secure, decentralized content management. 🔒✨
              </p>
              <p className="text-center text-lg">
                🚀 Ready to take on the challenge? Get started and deploy an NFT to a public network, showcasing your
                skills to the world! Don't forget to share your success on{" "}
                <a href="https://speedrunethereum.com/" target="_blank" rel="noreferrer" className="underline">
                  SpeedRunEthereum.com
                </a>
                . Let BLOCKGUARD IP SHIELD be your trusted companion in this exciting journey! 🌈
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
