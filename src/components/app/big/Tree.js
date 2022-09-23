import { faLightbulb, faRadio, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faDropbox } from "@fortawesome/free-brands-svg-icons";
import Direction from '../small/Direction';

const Tree = () => {
    return (
        <section className="bg-[#16162D] w-full text-white py-2 mt-[5rem]">
            <p className="sm:text-xl mt-[6rem] uppercase text-center">Building The Future of Cloudax</p>
            <h1 className="text-3xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA] font-bold my-6">The Roadmap</h1>
            <p className="w-11/12 md:w-2/4 mx-auto text-center text-[#ffffffa6]">Cloudax is a rapidly expanding ecosystem designed to innovate with various value-added utilities to continuously drive the economic growth of the ecosystem.</p>
            <p className="w-[5rem] h-[5rem] sm:w-[8rem] sm:h-[8rem] flex items-center justify-center mx-auto my-10 rounded-full bg-[#ffffff0f] border-t border-l border-[#ffffff51] font-bold  md:text-2xl">2022</p>

            <div className="mb-[7rem]">
                <Direction
                    icon={faLightbulb}
                    row={true}
                    h1='Ideation'
                    l1={['Ideation', 'Team Formation', 'Market survey and analysis']}
                    y1='June'
                    z1='Phase 1'
                />

                <Direction
                    icon={faDropbox}
                    row={false}
                    h1='Community Growth'
                    l1={['Pre-Launch Marketing', 'Pre-Launch Marketing', 'Growth Strategy']}
                    y1='August'
                    z1='Phase 2'
                />

                <Direction
                    icon={faRadio}
                    h1='Development & TokenLaunch'
                    row={true}
                    y1='September'
                    z1='Phase 3'
                    l1={['Token Platform Launch', 'Ecosystem Testnet', 'Mainnet', 'Token Presale', 'Staking', 'Partnerships', 'Liquidity Pool']}
                />

                <Direction
                    icon={faRocket}
                    h1='NFT Marketplace'
                    row={false}
                    y1='October'
                    l1={['NFT Marketplace Testnet', 'Mainnet Launch', 'Chain Bridge', 'Token Integrations', 'NFT Launchpad']}
                    z1='Phase 4'
                />
            </div>

        </section>
    )
}

export default Tree