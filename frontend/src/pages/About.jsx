import React from 'react'

const About = () => {
    
    return (
        <div className='sm:py-20'>
            <h1 class="text-3xl font-semibold text-center mx-auto">About our apps</h1>
            <p class="text-2xl text-slate-500 text-center max-w-xl mx-auto">
                A visual collection of our most recent works - each piece <span className='text-yellow-600'>crafted with intention, emotion and style.</span>
            </p>
            <div class="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
                <div class="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <div>
                    <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt=""/>
                    </div>
                    <div class="mt-5 space-y-2">
                        <h3 class="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                        <p class="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                    </div>
                </div>
                <div>
                    <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt=""/>
                    </div>
                    <div class="mt-5 space-y-2">
                        <h3 class="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                        <p class="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                    </div>
                </div>
                <div>
                    <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt=""/>
                    </div>
                    <div class="mt-5 space-y-2">
                        <h3 class="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                        <p class="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
                    </div>
                </div>
                <div>
                    <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png" alt=""/>
                    </div>
                    <div class="mt-5 space-y-2">
                        <h3 class="text-base font-medium text-slate-600">Clear & Comprehensive</h3>
                        <p class="text-sm text-slate-500">Get started fast with usage examples, live previews and code.</p>
                    </div>
                </div>
                <div>
                    <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png" alt=""/>
                    </div>
                    <div class="mt-5 space-y-2">
                        <h3 class="text-base font-medium text-slate-600">Fully Customizable</h3>
                        <p class="text-sm text-slate-500">Easily adapt styles, colors and layout to match your brand or product.</p>
                    </div>
                </div>
                <div>
                    <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png" alt=""/>
                    </div>
                    <div class="mt-5 space-y-2">
                        <h3 class="text-base font-medium text-slate-600">Accessibility First</h3>
                        <p class="text-sm text-slate-500">Built with WCAG standards in mind to ensure inclusive user experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
