import React, { useState, useRef } from 'react';
import { editImage } from '../services/geminiService';
import { Upload, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

export const VisualAlchemy: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
                setResult(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        if (!image || !prompt) return;
        setLoading(true);
        try {
            const generated = await editImage(image, prompt);
            if (generated) setResult(generated);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="visual-alchemy" className="py-24 px-6 border-t border-white/10 bg-sibyl-dark text-white">
            <div className="container mx-auto">
                <div className="mb-12 border-b border-white/10 pb-8">
                    <h2 className="font-display font-bold text-6xl md:text-7xl uppercase leading-none tracking-tighter">
                        Visual Alchemy
                    </h2>
                    <p className="font-sans text-sibyl-gray mt-4 max-w-md">
                        Transmute reality. Upload a photo and use intention (text) to reshape it. Powered by Gemini 2.5.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                   {/* Input Section */}
                   <div className="space-y-8">
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="border border-dashed border-white/20 hover:border-white/80 transition-all duration-300 aspect-[4/5] flex flex-col items-center justify-center cursor-pointer relative group overflow-hidden bg-white/5"
                        >
                            {image ? (
                                <img src={image} className="w-full h-full object-contain p-4" alt="Source" />
                            ) : (
                                <div className="text-center p-6">
                                    <Upload className="w-12 h-12 mx-auto mb-4 text-sibyl-gray group-hover:text-white transition-colors" />
                                    <p className="font-display uppercase tracking-widest text-sm">Upload Source Image</p>
                                </div>
                            )}
                            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                            
                            {image && (
                                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] px-2 py-1 uppercase font-bold tracking-widest border border-white/20">Source</div>
                            )}
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="font-display font-bold text-sm uppercase tracking-widest text-sibyl-gray">Intention</label>
                            <div className="flex gap-0">
                                <input 
                                    type="text" 
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="e.g. Remove the background..."
                                    className="flex-1 bg-transparent border border-white/20 p-4 font-mono text-sm focus:outline-none focus:border-white focus:bg-white/5 transition-all text-white placeholder:text-white/20"
                                />
                                <button 
                                    onClick={handleGenerate}
                                    disabled={!image || !prompt || loading}
                                    className="bg-white text-black px-8 font-display font-bold uppercase hover:bg-sibyl-gray transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {loading ? <RefreshCw className="animate-spin w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                   </div>

                   {/* Output Section */}
                   <div className="space-y-8">
                        <div className="border border-white/10 bg-black aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                                {result ? (
                                    <img src={result} className="w-full h-full object-contain p-4" alt="Result" />
                                ) : (
                                    <div className="text-center text-sibyl-gray">
                                        <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                        <p className="font-mono text-xs uppercase tracking-widest opacity-50">Manifestation awaits</p>
                                    </div>
                                )}
                                
                                {loading && (
                                    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center backdrop-blur-sm z-20">
                                        <div className="font-display font-bold text-4xl animate-pulse tracking-tighter">DIVINING...</div>
                                        <p className="font-mono text-xs text-sibyl-gray mt-2">Consulting Gemini 2.5</p>
                                    </div>
                                )}

                                {result && (
                                     <div className="absolute bottom-4 right-4 bg-white text-black text-[10px] px-2 py-1 uppercase font-bold tracking-widest">Result</div>
                                )}
                        </div>
                        
                        <div className="h-[86px] flex items-end justify-between border-t border-white/10 pt-4">
                             <div>
                                 <p className="font-display font-bold text-sm uppercase tracking-widest text-sibyl-gray mb-1">Status</p>
                                 <div className="flex items-center gap-2">
                                     <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : result ? 'bg-green-500' : 'bg-sibyl-gray'}`}></div>
                                     <span className="font-mono text-xs uppercase">{loading ? 'Processing' : result ? 'Complete' : 'Idle'}</span>
                                 </div>
                             </div>
                             {result && (
                                 <a 
                                    href={result} 
                                    download="sibylhaus-alchemy.png"
                                    className="text-xs font-mono underline underline-offset-4 hover:text-sibyl-gray"
                                 >
                                     Download Artifact
                                 </a>
                             )}
                        </div>
                   </div>
                </div>
            </div>
        </section>
    );
}