import { assets } from "./data/Assets";

export default function AssetShowcase() {
    return (
        <div>
            <h2 id="assets" className="text-8xl text-center">Assets</h2>

            <div className="flex flex-row flex-wrap">
                <div className="m-9 p-9 mt-3 w-full">

                    {assets.map((asset, index) => {
                        return (
                            <article key={index} className="flex flex-row min-h-[480px] p-5 mb-9">
                                <div className="flex flex-col w-1/2">
                                    <h3 className="text-3xl mb-4 underline">{asset.title}</h3>

                                    <div
                                        className="mb-4 ml-3 text-white "
                                    >
                                        {asset.description}                                        
                                    </div>
                                </div>
                                <div className="relative w-1/2">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={asset.ytIframe}
                                        title={asset.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop;"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </article>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}
