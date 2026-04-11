import svgPaths from "./svg-7n0hh4dqxc";

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#9c4326] text-[12px] top-[0.5px] tracking-[3px] uppercase whitespace-nowrap">01 — Logo</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[54px] relative shrink-0 w-[867px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[54px] left-0 text-[#1b1c1c] text-[36px] top-0 tracking-[-0.72px] whitespace-nowrap">Primary wordmark + symbol</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[600px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#72796e] text-[16px] top-0 w-[590px]">The FreakinFood wordmark pairs the editorial warmth of Newsreader with a noodle bowl symbol — representing the shared love of noodles and pasta across Italian and Vietnamese cuisines, the heart of the brand.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[182px] items-start left-[96px] top-[2168.5px] w-[867px]" data-name="Container">
      <Paragraph />
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option A — Editorial serif with symbol</p>
      </div>
    </div>
  );
}

function NoodleIcon() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="NoodleIcon">
          <path d={svgPaths.p35c05900} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p9111200} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p21150300} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p5ba2b00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.pf7c6816} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p90ce180} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p298faa00} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p14c42480} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p2d334e00} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={svgPaths.p2b4ceb00} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.975" />
          <path d="M21 9L28.5 1.5" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.35" />
          <path d="M23.25 9L31.5 3" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[57px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[57px] left-0 text-[#1b1c1c] text-[38px] top-[0.5px] tracking-[-0.8px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function LogoVariations1() {
  return (
    <div className="h-[57px] relative shrink-0 w-[247.141px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <NoodleIcon />
        <Text />
      </div>
    </div>
  );
}

function LogoCard() {
  return (
    <div className="absolute bg-white content-stretch flex h-[180px] items-center justify-center left-0 px-[88.18px] py-px rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <LogoVariations1 />
    </div>
  );
}

function NoodleIcon1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="NoodleIcon">
          <path d={svgPaths.p35c05900} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p9111200} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p21150300} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p5ba2b00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.pf7c6816} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p90ce180} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p298faa00} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.p14c42480} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p2d334e00} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={svgPaths.p2b4ceb00} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.975" />
          <path d="M21 9L28.5 1.5" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.35" />
          <path d="M23.25 9L31.5 3" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[57px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[57px] left-0 text-[38px] text-white top-[0.5px] tracking-[-0.8px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function LogoVariations2() {
  return (
    <div className="h-[57px] relative shrink-0 w-[247.141px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <NoodleIcon1 />
        <Text1 />
      </div>
    </div>
  );
}

function LogoCard1() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex h-[180px] items-center justify-center left-[443.5px] px-[88.18px] rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <LogoVariations2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <LogoCard />
        <LogoCard1 />
      </div>
    </div>
  );
}

function OptionRow() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[210px] items-start left-[96px] top-[2390.5px] w-[867px]" data-name="OptionRow">
      <Paragraph2 />
      <Container1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option B — Split accent with symbol</p>
      </div>
    </div>
  );
}

function NoodleIcon2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="NoodleIcon">
          <path d={svgPaths.p35c05900} id="Vector" opacity="0.5" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p9111200} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p21150300} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p5ba2b00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.pf7c6816} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p90ce180} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p298faa00} fill="var(--fill-0, #154212)" id="Vector_7" />
          <path d={svgPaths.p14c42480} fill="var(--fill-0, #154212)" id="Vector_8" />
          <path d={svgPaths.p2d334e00} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={svgPaths.p2b4ceb00} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.975" />
          <path d="M21 9L28.5 1.5" id="Vector_11" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.35" />
          <path d="M23.25 9L31.5 3" id="Vector_12" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[57px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[57px] left-0 text-[#1b1c1c] text-[38px] top-[0.5px] tracking-[-0.8px] whitespace-nowrap">Freakin</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[57px] relative shrink-0 w-[78.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[57px] left-0 text-[#9c4326] text-[38px] top-[0.5px] tracking-[-0.8px] whitespace-nowrap">Food</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[57px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function LogoVariations3() {
  return (
    <div className="h-[57px] relative shrink-0 w-[247.141px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <NoodleIcon2 />
        <Container3 />
      </div>
    </div>
  );
}

function LogoCard2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[180px] items-center justify-center left-0 px-[88.18px] py-px rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <LogoVariations3 />
    </div>
  );
}

function NoodleIcon3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="NoodleIcon">
          <path d={svgPaths.p35c05900} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p9111200} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p21150300} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.05" />
          <path d={svgPaths.p5ba2b00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.pf7c6816} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p90ce180} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.2" />
          <path d={svgPaths.p298faa00} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.p14c42480} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p2d334e00} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={svgPaths.p2b4ceb00} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.975" />
          <path d="M21 9L28.5 1.5" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.35" />
          <path d="M23.25 9L31.5 3" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[57px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[57px] left-0 text-[38px] text-white top-[0.5px] tracking-[-0.8px] whitespace-nowrap">Freakin</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[57px] relative shrink-0 w-[78.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[57px] left-0 text-[#d9591f] text-[38px] top-[0.5px] tracking-[-0.8px] whitespace-nowrap">Food</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[57px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function LogoVariations4() {
  return (
    <div className="h-[57px] relative shrink-0 w-[247.141px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <NoodleIcon3 />
        <Container4 />
      </div>
    </div>
  );
}

function LogoCard3() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex h-[180px] items-center justify-center left-[443.5px] px-[88.18px] rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <LogoVariations4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <LogoCard2 />
        <LogoCard3 />
      </div>
    </div>
  );
}

function OptionRow1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[210px] items-start left-[96px] top-[2640.5px] w-[867px]" data-name="OptionRow">
      <Paragraph3 />
      <Container2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option C — Symbol-only mark</p>
      </div>
    </div>
  );
}

function NoodleIcon4() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="NoodleIcon">
          <path d={svgPaths.p84f9a00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p35b56600} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p3284ab98} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p1c61ae00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p4141900} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p19f0a200} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p32988580} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.pce96500} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p24ed9980} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.75" />
          <path d={svgPaths.pea9ec80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.51667" />
          <path d="M32.6667 14L44.3333 2.33333" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="2.1" />
          <path d="M36.1667 14L49 4.66667" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="2.1" />
        </g>
      </svg>
    </div>
  );
}

function LogoCard4() {
  return (
    <div className="absolute bg-white content-stretch flex h-[180px] items-center justify-center left-0 px-[183.75px] py-px rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <NoodleIcon4 />
    </div>
  );
}

function NoodleIcon5() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="NoodleIcon">
          <path d={svgPaths.p84f9a00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p35b56600} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p3284ab98} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p1c61ae00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p4141900} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p19f0a200} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p32988580} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.pce96500} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p24ed9980} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.75" />
          <path d={svgPaths.pea9ec80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.51667" />
          <path d="M32.6667 14L44.3333 2.33333" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="2.1" />
          <path d="M36.1667 14L49 4.66667" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="2.1" />
        </g>
      </svg>
    </div>
  );
}

function LogoCard5() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex h-[180px] items-center justify-center left-[443.5px] px-[183.75px] rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <NoodleIcon5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <LogoCard4 />
        <LogoCard5 />
      </div>
    </div>
  );
}

function OptionRow2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[210px] items-start left-[96px] top-[2890.5px] w-[867px]" data-name="OptionRow">
      <Paragraph4 />
      <Container5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option D — Clean uppercase editorial</p>
      </div>
    </div>
  );
}

function LogoVariations5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[322.211px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#1b1c1c] text-[32px] top-[-0.5px] tracking-[8px] uppercase whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function LogoCard6() {
  return (
    <div className="absolute bg-white content-stretch flex h-[180px] items-center justify-center left-0 pl-[50.641px] pr-[50.648px] py-px rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <LogoVariations5 />
    </div>
  );
}

function LogoVariations6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[322.211px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[48px] left-0 not-italic text-[32px] text-white top-[-0.5px] tracking-[8px] uppercase whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function LogoCard7() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex h-[180px] items-center justify-center left-[443.5px] pl-[50.641px] pr-[50.648px] rounded-[14px] top-0 w-[423.5px]" data-name="LogoCard">
      <LogoVariations6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <LogoCard6 />
        <LogoCard7 />
      </div>
    </div>
  );
}

function OptionRow3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[210px] items-start left-[96px] top-[3140.5px] w-[867px]" data-name="OptionRow">
      <Paragraph5 />
      <Container6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#9c4326] text-[12px] top-[0.5px] tracking-[3px] uppercase whitespace-nowrap">02 — Square Logos</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[54px] left-0 text-[#1b1c1c] text-[36px] top-0 tracking-[-0.72px] whitespace-nowrap">Square mark variations</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[26px] relative shrink-0 w-[600px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#72796e] text-[16px] top-0 whitespace-nowrap">Compact square formats for app icons, social avatars, and favicon use.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[130px] items-start left-[96px] top-[3414.5px] w-[867px]" data-name="Container">
      <Paragraph6 />
      <Heading1 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option E — Symbol + stacked wordmark</p>
      </div>
    </div>
  );
}

function NoodleIcon6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[40px]" data-name="NoodleIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[14.98%_62.5%_79.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] left-1/2 right-[45.83%] top-[10.81%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.98%_29.17%_79.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_59.82%_54.17%_37.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.62%_47.32%_54.17%_49.57%]" data-name="Vector">
          <div className="absolute inset-[-7.86%_-53.47%_-7.86%_-53.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57967 9.81721">
              <path d={svgPaths.p1bcef480} id="Vector" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_34.82%_54.17%_62.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 13.3333">
            <path d={svgPaths.p33cab400} fill="var(--fill-0, #9C4326)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 3.33333">
            <path d={svgPaths.p253f6700} fill="var(--fill-0, #9C4326)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[57.13%_29.17%_40.46%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-64.95%_-3.75%_-64.96%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9168 2.21231">
              <path d={svgPaths.p1a253600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.46%_31.25%_32.13%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-56.29%_-3.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2501 2.0455">
              <path d={svgPaths.p3be5f740} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.08333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[58.33%] right-[20.83%] top-[4.17%]" data-name="Vector">
          <div className="absolute inset-[-9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.83333 9.83333">
              <path d="M0.75 9.08333L9.08333 0.75" id="Vector" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[64.58%] right-[12.5%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-11.25%_-8.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6668 8.16677">
              <path d={svgPaths.p2c420e00} id="Vector" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.797px] relative shrink-0 w-[52.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[#1b1c1c] text-[18px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Freakin</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[35.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[#9c4326] text-[18px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Food</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[39.594px] relative shrink-0 w-[52.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function LogoVariations7() {
  return (
    <div className="h-[87.594px] relative shrink-0 w-[52.773px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <NoodleIcon6 />
        <Container10 />
      </div>
    </div>
  );
}

function SquareLogoCard() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 pl-[74.484px] pr-[74.492px] py-px rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <LogoVariations7 />
    </div>
  );
}

function NoodleIcon7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[40px]" data-name="NoodleIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[14.98%_62.5%_79.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] left-1/2 right-[45.83%] top-[10.81%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.98%_29.17%_79.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_59.82%_54.17%_37.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.62%_47.32%_54.17%_49.57%]" data-name="Vector">
          <div className="absolute inset-[-7.86%_-53.47%_-7.86%_-53.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57967 9.81721">
              <path d={svgPaths.p1bcef480} id="Vector" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_34.82%_54.17%_62.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 13.3333">
            <path d={svgPaths.p33cab400} fill="var(--fill-0, #D9591F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 3.33333">
            <path d={svgPaths.p253f6700} fill="var(--fill-0, #D9591F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[57.13%_29.17%_40.46%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-64.95%_-3.75%_-64.96%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9168 2.21231">
              <path d={svgPaths.p1a253600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.46%_31.25%_32.13%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-56.29%_-3.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2501 2.0455">
              <path d={svgPaths.p3be5f740} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.08333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[58.33%] right-[20.83%] top-[4.17%]" data-name="Vector">
          <div className="absolute inset-[-9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.83333 9.83333">
              <path d="M0.75 9.08333L9.08333 0.75" id="Vector" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[64.58%] right-[12.5%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-11.25%_-8.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6668 8.16677">
              <path d={svgPaths.p2c420e00} id="Vector" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.797px] relative shrink-0 w-[52.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[18px] text-white top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Freakin</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[35.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[#d9591f] text-[18px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Food</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[39.594px] relative shrink-0 w-[52.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function LogoVariations8() {
  return (
    <div className="h-[87.594px] relative shrink-0 w-[52.773px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <NoodleIcon7 />
        <Container11 />
      </div>
    </div>
  );
}

function SquareLogoCard1() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex items-center justify-center left-[221.75px] pl-[74.484px] pr-[74.492px] rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <LogoVariations8 />
    </div>
  );
}

function NoodleIcon8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[40px]" data-name="NoodleIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[14.98%_62.5%_79.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] left-1/2 right-[45.83%] top-[10.81%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.4" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.98%_29.17%_79.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_59.82%_54.17%_37.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.62%_47.32%_54.17%_49.57%]" data-name="Vector">
          <div className="absolute inset-[-7.86%_-53.47%_-7.86%_-53.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57967 9.81721">
              <path d={svgPaths.p1bcef480} id="Vector" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_34.82%_54.17%_62.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 13.3333">
            <path d={svgPaths.p33cab400} fill="var(--fill-0, #154212)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 3.33333">
            <path d={svgPaths.p253f6700} fill="var(--fill-0, #154212)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[57.13%_29.17%_40.46%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-64.95%_-3.75%_-64.96%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9168 2.21231">
              <path d={svgPaths.p1a253600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.46%_31.25%_32.13%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-56.29%_-3.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2501 2.0455">
              <path d={svgPaths.p3be5f740} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.08333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[58.33%] right-[20.83%] top-[4.17%]" data-name="Vector">
          <div className="absolute inset-[-9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.83333 9.83333">
              <path d="M0.75 9.08333L9.08333 0.75" id="Vector" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[64.58%] right-[12.5%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-11.25%_-8.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6668 8.16677">
              <path d={svgPaths.p2c420e00} id="Vector" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[19.797px] relative shrink-0 w-[52.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[#1b1c1c] text-[18px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Freakin</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[35.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[#154212] text-[18px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Food</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[39.594px] relative shrink-0 w-[52.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function LogoVariations9() {
  return (
    <div className="h-[87.594px] relative shrink-0 w-[52.773px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <NoodleIcon8 />
        <Container12 />
      </div>
    </div>
  );
}

function SquareLogoCard2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[443.5px] pl-[74.484px] pr-[74.492px] py-px rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <LogoVariations9 />
    </div>
  );
}

function NoodleIcon9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[40px]" data-name="NoodleIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[14.98%_62.5%_79.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] left-1/2 right-[45.83%] top-[10.81%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.4" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.98%_29.17%_79.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83333 3.50959">
              <path d={svgPaths.pd5e4b00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_59.82%_54.17%_37.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.62%_47.32%_54.17%_49.57%]" data-name="Vector">
          <div className="absolute inset-[-7.86%_-53.47%_-7.86%_-53.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57967 9.81721">
              <path d={svgPaths.p1bcef480} id="Vector" opacity="0.7" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_34.82%_54.17%_62.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57947 9.23685">
              <path d={svgPaths.p1f6a2d00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 13.3333">
            <path d={svgPaths.p33cab400} fill="var(--fill-0, #7AB87A)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 3.33333">
            <path d={svgPaths.p253f6700} fill="var(--fill-0, #7AB87A)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[57.13%_29.17%_40.46%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-64.95%_-3.75%_-64.96%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9168 2.21231">
              <path d={svgPaths.p1a253600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.46%_31.25%_32.13%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-56.29%_-3.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2501 2.0455">
              <path d={svgPaths.p3be5f740} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.08333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[58.33%] right-[20.83%] top-[4.17%]" data-name="Vector">
          <div className="absolute inset-[-9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.83333 9.83333">
              <path d="M0.75 9.08333L9.08333 0.75" id="Vector" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[64.58%] right-[12.5%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-11.25%_-8.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6668 8.16677">
              <path d={svgPaths.p2c420e00} id="Vector" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[19.797px] relative shrink-0 w-[52.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[18px] text-white top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Freakin</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[35.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[19.8px] left-0 text-[#7ab87a] text-[18px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">Food</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[39.594px] relative shrink-0 w-[52.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function LogoVariations10() {
  return (
    <div className="h-[87.594px] relative shrink-0 w-[52.773px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <NoodleIcon9 />
        <Container13 />
      </div>
    </div>
  );
}

function SquareLogoCard3() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex items-center justify-center left-[665.25px] pl-[74.484px] pr-[74.492px] rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <LogoVariations10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SquareLogoCard />
        <SquareLogoCard1 />
        <SquareLogoCard2 />
        <SquareLogoCard3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[231.75px] items-start left-[96px] top-[3584.5px] w-[867px]" data-name="Container">
      <Paragraph8 />
      <Container9 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option F — Symbol only (app icon)</p>
      </div>
    </div>
  );
}

function NoodleIcon10() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="NoodleIcon">
          <path d={svgPaths.p84f9a00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p35b56600} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p3284ab98} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p1c61ae00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p4141900} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p19f0a200} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p32988580} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.pce96500} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p24ed9980} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.75" />
          <path d={svgPaths.pea9ec80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.51667" />
          <path d="M32.6667 14L44.3333 2.33333" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="2.1" />
          <path d="M36.1667 14L49 4.66667" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="2.1" />
        </g>
      </svg>
    </div>
  );
}

function SquareLogoCard4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 px-[72.875px] py-px rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <NoodleIcon10 />
    </div>
  );
}

function NoodleIcon11() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="NoodleIcon">
          <path d={svgPaths.p84f9a00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p35b56600} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p3284ab98} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p1c61ae00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p4141900} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p19f0a200} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p32988580} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.pce96500} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p24ed9980} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.75" />
          <path d={svgPaths.pea9ec80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.51667" />
          <path d="M32.6667 14L44.3333 2.33333" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="2.1" />
          <path d="M36.1667 14L49 4.66667" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="2.1" />
        </g>
      </svg>
    </div>
  );
}

function SquareLogoCard5() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex items-center justify-center left-[221.75px] px-[72.875px] rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <NoodleIcon11 />
    </div>
  );
}

function NoodleIcon12() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="NoodleIcon">
          <path d={svgPaths.p84f9a00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p35b56600} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p3284ab98} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p1c61ae00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p4141900} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p19f0a200} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p32988580} fill="var(--fill-0, #154212)" id="Vector_7" />
          <path d={svgPaths.pce96500} fill="var(--fill-0, #154212)" id="Vector_8" />
          <path d={svgPaths.p24ed9980} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.75" />
          <path d={svgPaths.pea9ec80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.51667" />
          <path d="M32.6667 14L44.3333 2.33333" id="Vector_11" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="2.1" />
          <path d="M36.1667 14L49 4.66667" id="Vector_12" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="2.1" />
        </g>
      </svg>
    </div>
  );
}

function SquareLogoCard6() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[443.5px] px-[72.875px] py-px rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <NoodleIcon12 />
    </div>
  );
}

function NoodleIcon13() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="NoodleIcon">
          <path d={svgPaths.p84f9a00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p35b56600} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p3284ab98} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.63333" />
          <path d={svgPaths.p1c61ae00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p4141900} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p19f0a200} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.86667" />
          <path d={svgPaths.p32988580} fill="var(--fill-0, #7AB87A)" id="Vector_7" />
          <path d={svgPaths.pce96500} fill="var(--fill-0, #7AB87A)" id="Vector_8" />
          <path d={svgPaths.p24ed9980} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.75" />
          <path d={svgPaths.pea9ec80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.51667" />
          <path d="M32.6667 14L44.3333 2.33333" id="Vector_11" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="2.1" />
          <path d="M36.1667 14L49 4.66667" id="Vector_12" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="2.1" />
        </g>
      </svg>
    </div>
  );
}

function SquareLogoCard7() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex items-center justify-center left-[665.25px] px-[72.875px] rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <NoodleIcon13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SquareLogoCard4 />
        <SquareLogoCard5 />
        <SquareLogoCard6 />
        <SquareLogoCard7 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[231.75px] items-start left-[96px] top-[3856.25px] w-[867px]" data-name="Container">
      <Paragraph9 />
      <Container15 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">{`Option G — Monogram "FF"`}</p>
      </div>
    </div>
  );
}

function LogoVariations11() {
  return (
    <div className="h-[72px] relative shrink-0 w-[52.977px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[72px] left-0 text-[#1b1c1c] text-[48px] top-0 tracking-[-2px] whitespace-nowrap">FF</p>
      </div>
    </div>
  );
}

function SquareLogoCard8() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 pl-[74.383px] pr-[74.391px] py-px rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <LogoVariations11 />
    </div>
  );
}

function LogoVariations12() {
  return (
    <div className="h-[72px] relative shrink-0 w-[52.977px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[72px] left-0 text-[48px] text-white top-0 tracking-[-2px] whitespace-nowrap">FF</p>
      </div>
    </div>
  );
}

function SquareLogoCard9() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex items-center justify-center left-[221.75px] pl-[74.383px] pr-[74.391px] rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <LogoVariations12 />
    </div>
  );
}

function LogoVariations13() {
  return (
    <div className="h-[72px] relative shrink-0 w-[52.977px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[72px] left-0 text-[#9c4326] text-[48px] top-0 tracking-[-2px] whitespace-nowrap">FF</p>
      </div>
    </div>
  );
}

function SquareLogoCard10() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[443.5px] pl-[74.383px] pr-[74.391px] py-px rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <LogoVariations13 />
    </div>
  );
}

function LogoVariations14() {
  return (
    <div className="h-[72px] relative shrink-0 w-[52.977px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[72px] left-0 text-[#d9591f] text-[48px] top-0 tracking-[-2px] whitespace-nowrap">FF</p>
      </div>
    </div>
  );
}

function SquareLogoCard11() {
  return (
    <div className="absolute bg-[#1b1c1c] content-stretch flex items-center justify-center left-[665.25px] pl-[74.383px] pr-[74.391px] rounded-[14px] size-[201.75px] top-0" data-name="SquareLogoCard">
      <LogoVariations14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SquareLogoCard8 />
        <SquareLogoCard9 />
        <SquareLogoCard10 />
        <SquareLogoCard11 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[231.75px] items-start left-[96px] top-[4128px] w-[867px]" data-name="Container">
      <Paragraph10 />
      <Container17 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#9c4326] text-[12px] top-[0.5px] tracking-[3px] uppercase whitespace-nowrap">{`03 — WordPress & Website`}</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[54px] left-0 text-[#1b1c1c] text-[36px] top-0 tracking-[-0.72px] whitespace-nowrap">Website logo placements</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[52px] relative shrink-0 w-[600px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#72796e] text-[16px] top-0 w-[577px]">Logo variations sized and styled for WordPress headers, footers, favicons, and mobile navigation — ready for direct implementation.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[156px] items-start left-[96px] top-[4439.75px] w-[867px]" data-name="Container">
      <Paragraph11 />
      <Heading2 />
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option H — Site header (navbar)</p>
      </div>
    </div>
  );
}

function NoodleIcon14() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="NoodleIcon">
          <path d={svgPaths.p1d263800} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p32707e00} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p2af53a00} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p23a6ca00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.pc1b03f0} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p3d328b80} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p127bae00} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p2d646580} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p33c93080} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.875" />
          <path d={svgPaths.p47338c0} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.758333" />
          <path d="M16.3333 7L22.1667 1.16667" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.05" />
          <path d="M18.0833 7L24.5 2.33333" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.05" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[33px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#1b1c1c] text-[22px] top-[-0.5px] tracking-[-0.5px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[33px] relative shrink-0 w-[148.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <NoodleIcon14 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[52.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#3a3936] text-[13px] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">Recipes</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[48.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#3a3936] text-[13px] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">Culture</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[40.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#3a3936] text-[13px] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#9c4326] text-[13px] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">Subscribe</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[279.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Text15 />
        <Text16 />
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function LogoVariations15() {
  return (
    <div className="h-[64px] relative shrink-0 w-[865px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <LogoVariations15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Light header — 64px tall</p>
      </div>
    </div>
  );
}

function WebPreviewCard() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="WebPreviewCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container21 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function NoodleIcon15() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="NoodleIcon">
          <path d={svgPaths.p1d263800} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p32707e00} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p2af53a00} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p23a6ca00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.pc1b03f0} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p3d328b80} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p127bae00} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.p2d646580} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p33c93080} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.875" />
          <path d={svgPaths.p47338c0} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.758333" />
          <path d="M16.3333 7L22.1667 1.16667" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.05" />
          <path d="M18.0833 7L24.5 2.33333" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.05" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex-[1_0_0] h-[33px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[33px] left-0 text-[22px] text-white top-[-0.5px] tracking-[-0.5px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[33px] relative shrink-0 w-[148.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <NoodleIcon15 />
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[52.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.7)] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">Recipes</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[48.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.7)] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">Culture</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[40.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.7)] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#d9591f] text-[13px] top-[-0.5px] tracking-[0.3px] whitespace-nowrap">Subscribe</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[279.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Text20 />
        <Text21 />
        <Text22 />
        <Text23 />
      </div>
    </div>
  );
}

function LogoVariations16() {
  return (
    <div className="h-[64px] relative shrink-0 w-[867px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#1b1c1c] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LogoVariations16 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Dark header — 64px tall</p>
      </div>
    </div>
  );
}

function WebPreviewCard1() {
  return (
    <div className="h-[88.5px] relative shrink-0 w-[867px]" data-name="WebPreviewCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container24 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <WebPreviewCard />
        <WebPreviewCard1 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[229px] items-start left-[96px] top-[4635.75px] w-[867px]" data-name="Container">
      <Paragraph13 />
      <Container20 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option I — Centered header (magazine / editorial)</p>
      </div>
    </div>
  );
}

function NoodleIcon16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="NoodleIcon">
          <path d={svgPaths.p24a6fb40} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p3850efc0} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p2a802200} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p12ce88c0} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.06667" />
          <path d={svgPaths.p17946a40} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.06667" />
          <path d={svgPaths.p5730500} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.06667" />
          <path d={svgPaths.pd600a70} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p28492b00} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.pc49e80} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" />
          <path d={svgPaths.p41f0f80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.866667" />
          <path d="M18.6667 8L25.3333 1.33333" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.2" />
          <path d="M20.6667 8L28 2.66667" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[45px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[45px] left-0 text-[#1b1c1c] text-[30px] top-[-0.5px] tracking-[-0.6px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[195.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <NoodleIcon16 />
        <Text24 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[60.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[2px] uppercase whitespace-nowrap">Recipes</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[57.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[2px] uppercase whitespace-nowrap">Italian</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[2px] uppercase whitespace-nowrap">Vietnamese</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[2px] uppercase whitespace-nowrap">Nordic</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[60.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[2px] uppercase whitespace-nowrap">Stories</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[483.969px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e3e0] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center px-[16px] py-px relative size-full">
        <Text25 />
        <Text26 />
        <Text27 />
        <Text28 />
        <Text29 />
      </div>
    </div>
  );
}

function LogoVariations17() {
  return (
    <div className="h-[151.5px] relative shrink-0 w-[865px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center py-[24px] relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <LogoVariations17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Light centered — editorial blog</p>
      </div>
    </div>
  );
}

function WebPreviewCard2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="WebPreviewCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container29 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function NoodleIcon17() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="NoodleIcon">
          <path d={svgPaths.p24a6fb40} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p3850efc0} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p2a802200} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p12ce88c0} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.06667" />
          <path d={svgPaths.p17946a40} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.06667" />
          <path d={svgPaths.p5730500} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="1.06667" />
          <path d={svgPaths.pd600a70} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.p28492b00} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.pc49e80} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" />
          <path d={svgPaths.p41f0f80} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.866667" />
          <path d="M18.6667 8L25.3333 1.33333" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.2" />
          <path d="M20.6667 8L28 2.66667" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] h-[45px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[45px] left-0 text-[30px] text-white top-[-0.5px] tracking-[-0.6px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[195.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <NoodleIcon17 />
        <Text30 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[60.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.5)] top-0 tracking-[2px] uppercase whitespace-nowrap">Recipes</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[57.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.5)] top-0 tracking-[2px] uppercase whitespace-nowrap">Italian</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.5)] top-0 tracking-[2px] uppercase whitespace-nowrap">Vietnamese</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.5)] top-0 tracking-[2px] uppercase whitespace-nowrap">Nordic</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[60.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.5)] top-0 tracking-[2px] uppercase whitespace-nowrap">Stories</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[483.969px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center px-[16px] py-px relative size-full">
        <Text31 />
        <Text32 />
        <Text33 />
        <Text34 />
        <Text35 />
      </div>
    </div>
  );
}

function LogoVariations18() {
  return (
    <div className="h-[151.5px] relative shrink-0 w-[867px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center py-[24px] relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#1b1c1c] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LogoVariations18 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Dark centered — editorial blog</p>
      </div>
    </div>
  );
}

function WebPreviewCard3() {
  return (
    <div className="h-[176px] relative shrink-0 w-[867px]" data-name="WebPreviewCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container32 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <WebPreviewCard2 />
        <WebPreviewCard3 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[404px] items-start left-[96px] top-[4904.75px] w-[867px]" data-name="Container">
      <Paragraph16 />
      <Container28 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option J — Mobile header (responsive)</p>
      </div>
    </div>
  );
}

function NoodleIcon18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="NoodleIcon">
          <path d="M8 5C8 3.5 9 3 9 4.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M12 4C12 2.5 13 2 13 3.5" id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M16 5C16 3.5 17 3 17 4.5" id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.7" />
          <path d={svgPaths.p19ffc0c0} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p38aea840} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p24e90f00} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p8190e80} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p2f676300} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p17457900} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.75" />
          <path d={svgPaths.p2c6b9828} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.65" />
          <path d="M14 6L19 1" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M15.5 6L21 2" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text36() {
  return (
    <div className="flex-[1_0_0] h-[27px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[27px] left-0 text-[#1b1c1c] text-[18px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[27px] relative shrink-0 w-[120.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <NoodleIcon18 />
        <Text36 />
      </div>
    </div>
  );
}

function Container40() {
  return <div className="bg-[#1b1c1c] h-[2px] rounded-[16777200px] shrink-0 w-[18px]" data-name="Container" />;
}

function Container41() {
  return <div className="bg-[#1b1c1c] h-[2px] rounded-[16777200px] shrink-0 w-[18px]" data-name="Container" />;
}

function Container42() {
  return <div className="bg-[#1b1c1c] flex-[1_0_0] min-h-px min-w-px rounded-[16777200px] w-[12px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="h-[14px] relative shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container40 />
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function LogoVariations19() {
  return (
    <div className="h-[56px] relative shrink-0 w-[288px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[290px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <LogoVariations19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[290px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Light — mobile 56px</p>
      </div>
    </div>
  );
}

function WebPreviewCard4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[82.5px] items-start left-0 top-0 w-[290px]" data-name="WebPreviewCard">
      <Container37 />
      <Paragraph20 />
    </div>
  );
}

function NoodleIcon19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="NoodleIcon">
          <path d="M8 5C8 3.5 9 3 9 4.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M12 4C12 2.5 13 2 13 3.5" id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M16 5C16 3.5 17 3 17 4.5" id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.7" />
          <path d={svgPaths.p19ffc0c0} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p38aea840} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p24e90f00} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p8190e80} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.p2f676300} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p17457900} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.75" />
          <path d={svgPaths.p2c6b9828} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.65" />
          <path d="M14 6L19 1" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M15.5 6L21 2" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="flex-[1_0_0] h-[27px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[27px] left-0 text-[18px] text-white top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[27px] relative shrink-0 w-[120.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <NoodleIcon19 />
        <Text37 />
      </div>
    </div>
  );
}

function Container46() {
  return <div className="bg-white h-[2px] rounded-[16777200px] shrink-0 w-[18px]" data-name="Container" />;
}

function Container47() {
  return <div className="bg-white h-[2px] rounded-[16777200px] shrink-0 w-[18px]" data-name="Container" />;
}

function Container48() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px rounded-[16777200px] w-[12px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="h-[14px] relative shrink-0 w-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container46 />
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function LogoVariations20() {
  return (
    <div className="h-[56px] relative shrink-0 w-[290px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#1b1c1c] h-[56px] relative rounded-[14px] shrink-0 w-[290px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LogoVariations20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[290px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Dark — mobile 56px</p>
      </div>
    </div>
  );
}

function WebPreviewCard5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[82.5px] items-start left-[310px] top-0 w-[290px]" data-name="WebPreviewCard">
      <Container43 />
      <Paragraph21 />
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[600px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <WebPreviewCard4 />
        <WebPreviewCard5 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[112.5px] items-start left-[96px] top-[5348.75px] w-[867px]" data-name="Container">
      <Paragraph19 />
      <Container36 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option K — Site footer</p>
      </div>
    </div>
  );
}

function NoodleIcon20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="NoodleIcon">
          <path d="M8 5C8 3.5 9 3 9 4.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M12 4C12 2.5 13 2 13 3.5" id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M16 5C16 3.5 17 3 17 4.5" id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.7" />
          <path d={svgPaths.p19ffc0c0} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p38aea840} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p24e90f00} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p8190e80} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p2f676300} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p17457900} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.75" />
          <path d={svgPaths.p2c6b9828} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.65" />
          <path d="M14 6L19 1" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M15.5 6L21 2" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[30px] relative shrink-0 w-[99.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#1b1c1c] text-[20px] top-0 tracking-[-0.4px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[30px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <NoodleIcon20 />
        <Text38 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[320px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#72796e] text-[13px] top-[-0.5px] w-[256px]">Mediterranean warmth, Southeast Asian freshness, Nordic precision.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[82px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container53 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#1b1c1c] text-[11px] top-0 tracking-[2px] uppercase whitespace-nowrap">Explore</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#72796e] text-[13px] top-[-0.5px] whitespace-nowrap">Recipes</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#72796e] text-[13px] top-[-0.5px] whitespace-nowrap">Stories</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#72796e] text-[13px] top-[-0.5px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[99px] relative shrink-0 w-[65.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text39 />
        <Text40 />
        <Text41 />
        <Text42 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#1b1c1c] text-[11px] top-0 tracking-[2px] uppercase whitespace-nowrap">Connect</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#72796e] text-[13px] top-[-0.5px] whitespace-nowrap">Instagram</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#72796e] text-[13px] top-[-0.5px] whitespace-nowrap">YouTube</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#72796e] text-[13px] top-[-0.5px] whitespace-nowrap">Newsletter</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text43 />
        <Text44 />
        <Text45 />
        <Text46 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[99px] relative shrink-0 w-[174.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-start relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function LogoVariations21() {
  return (
    <div className="h-[164px] relative shrink-0 w-[865px]" data-name="LogoVariations">
      <div aria-hidden="true" className="absolute border-[#e5e3e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-px px-[32px] relative size-full">
        <Container52 />
        <Container54 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <LogoVariations21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Light footer</p>
      </div>
    </div>
  );
}

function WebPreviewCard6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="WebPreviewCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container51 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function NoodleIcon21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="NoodleIcon">
          <path d="M8 5C8 3.5 9 3 9 4.5" id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M12 4C12 2.5 13 2 13 3.5" id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.7" />
          <path d="M16 5C16 3.5 17 3 17 4.5" id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.7" />
          <path d={svgPaths.p19ffc0c0} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p38aea840} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p24e90f00} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.8" />
          <path d={svgPaths.p8190e80} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.p2f676300} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p17457900} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.75" />
          <path d={svgPaths.p2c6b9828} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.65" />
          <path d="M14 6L19 1" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="0.9" />
          <path d="M15.5 6L21 2" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[30px] relative shrink-0 w-[99.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[30px] left-0 text-[20px] text-white top-0 tracking-[-0.4px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[30px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <NoodleIcon21 />
        <Text47 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[320px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] w-[256px]">Mediterranean warmth, Southeast Asian freshness, Nordic precision.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[82px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container59 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-white top-0 tracking-[2px] uppercase whitespace-nowrap">Explore</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] whitespace-nowrap">Recipes</p>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] whitespace-nowrap">Stories</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[65.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[99px] relative shrink-0 w-[65.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text48 />
        <Text49 />
        <Text50 />
        <Text51 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-white top-0 tracking-[2px] uppercase whitespace-nowrap">Connect</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] whitespace-nowrap">Instagram</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] whitespace-nowrap">YouTube</p>
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[69.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] whitespace-nowrap">Newsletter</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] h-[99px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text52 />
        <Text53 />
        <Text54 />
        <Text55 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[99px] relative shrink-0 w-[174.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-start relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function LogoVariations22() {
  return (
    <div className="h-[164px] relative shrink-0 w-[867px]" data-name="LogoVariations">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-px px-[32px] relative size-full">
        <Container58 />
        <Container60 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#1b1c1c] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LogoVariations22 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Dark footer</p>
      </div>
    </div>
  );
}

function WebPreviewCard7() {
  return (
    <div className="h-[188.5px] relative shrink-0 w-[867px]" data-name="WebPreviewCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container57 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <WebPreviewCard6 />
        <WebPreviewCard7 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[429px] items-start left-[96px] top-[5501.25px] w-[867px]" data-name="Container">
      <Paragraph22 />
      <Container50 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">{`Option L — Favicon & browser tab preview`}</p>
      </div>
    </div>
  );
}

function NoodleIcon22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="NoodleIcon">
          <path d={svgPaths.padf4d00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.408333" />
          <path d={svgPaths.p112f7700} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.408333" />
          <path d={svgPaths.p30ad9f80} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.408333" />
          <path d={svgPaths.p7af9fa0} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.466667" />
          <path d={svgPaths.p3de09c00} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.466667" />
          <path d={svgPaths.p51e1700} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.466667" />
          <path d={svgPaths.p33a18500} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p36e29130} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p3f2cc280} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.4375" />
          <path d={svgPaths.pd979f00} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.379167" />
          <path d={svgPaths.p3ec27200} id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.525" />
          <path d="M9.04167 3.5L12.25 1.16667" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.525" />
        </g>
      </svg>
    </div>
  );
}

function Text56() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#3a3936] text-[12px] top-[0.5px] whitespace-nowrap">FreakinFood — Recipes</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-px whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white h-[34px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[204.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <NoodleIcon22 />
        <Text56 />
        <Text57 />
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#3a3936] text-[12px] top-[0.5px] whitespace-nowrap">New Tab</p>
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="h-[18px] relative shrink-0 w-[7.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-px whitespace-nowrap">×</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#e5e3e0] h-[34px] opacity-60 relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[98.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <Text58 />
        <Text59 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f0eeec] h-[42px] relative shrink-0 w-[865px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8px] relative size-full">
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function NoodleIcon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="NoodleIcon">
          <path d={svgPaths.p39e2e890} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.35" />
          <path d="M6 2C6 1.25 6.5 1 6.5 1.75" id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.35" />
          <path d={svgPaths.p367c4990} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.35" />
          <path d={svgPaths.p3a3b9998} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.4" />
          <path d={svgPaths.p836c00} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.4" />
          <path d={svgPaths.p25fc0780} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.4" />
          <path d={svgPaths.p128a0700} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p338efd00} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p3a7f7b40} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.375" />
          <path d={svgPaths.p10980d00} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.325" />
          <path d="M7 3L9.5 0.5" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.45" />
          <path d="M7.75 3L10.5 1" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[18px] relative shrink-0 w-[145.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] whitespace-nowrap">freakinfood.com/recipes</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#f6f3f2] flex-[833_0_0] h-[26px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[12px] relative size-full">
          <NoodleIcon23 />
          <Text60 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-[865px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e3e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-px px-[16px] relative size-full">
        <Container70 />
      </div>
    </div>
  );
}

function LogoVariations23() {
  return (
    <div className="h-[85px] relative shrink-0 w-[865px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container66 />
        <Container69 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <LogoVariations23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">Browser tab simulation</p>
      </div>
    </div>
  );
}

function WebPreviewCard8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="WebPreviewCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container65 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function NoodleIcon24() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="NoodleIcon">
          <path d={svgPaths.p1d263800} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p32707e00} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p2af53a00} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.816667" />
          <path d={svgPaths.p23a6ca00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.pc1b03f0} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p3d328b80} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.933333" />
          <path d={svgPaths.p127bae00} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p2d646580} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p33c93080} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.875" />
          <path d={svgPaths.p47338c0} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.758333" />
          <path d="M16.3333 7L22.1667 1.16667" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.05" />
          <path d="M18.0833 7L24.5 2.33333" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.05" />
        </g>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
        <NoodleIcon24 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[37.883px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">48×48</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72.5px] items-center left-0 top-0 w-[201.75px]" data-name="Container">
      <Container73 />
      <Paragraph29 />
    </div>
  );
}

function NoodleIcon25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="NoodleIcon">
          <path d={svgPaths.pc17b740} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.583333" />
          <path d={svgPaths.p2bdda780} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.583333" />
          <path d={svgPaths.p14c67980} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.583333" />
          <path d={svgPaths.p10283080} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.666667" />
          <path d={svgPaths.p99aa100} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.666667" />
          <path d={svgPaths.p1c7b0300} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.666667" />
          <path d={svgPaths.paaaa100} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p10717f00} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p1ae73e80} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.625" />
          <path d={svgPaths.p85ce800} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.541667" />
          <path d="M11.6667 5L15.8333 0.833334" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.75" />
          <path d="M12.9167 5L17.5 1.66667" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
        <NoodleIcon25 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[36.719px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">32×32</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72.5px] items-center left-[221.75px] top-0 w-[201.75px]" data-name="Container">
      <Container75 />
      <Paragraph30 />
    </div>
  );
}

function NoodleIcon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="NoodleIcon">
          <path d={svgPaths.pd229d80} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.466667" />
          <path d={svgPaths.p3813bf00} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.466667" />
          <path d={svgPaths.p88f0b60} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.466667" />
          <path d={svgPaths.p2032b400} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.533333" />
          <path d={svgPaths.p7744200} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.533333" />
          <path d={svgPaths.p2c016370} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.533333" />
          <path d={svgPaths.p2d095300} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p3c17500} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p1c392000} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.5" />
          <path d={svgPaths.p3f48c700} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.433333" />
          <path d="M9.33333 4L12.6667 0.666666" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.6" />
          <path d="M10.3333 4L14 1.33333" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.6" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-px relative size-full">
        <NoodleIcon26 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[37.156px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">24×24</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72.5px] items-center left-[443.5px] top-0 w-[201.75px]" data-name="Container">
      <Container77 />
      <Paragraph31 />
    </div>
  );
}

function NoodleIcon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="NoodleIcon">
          <path d={svgPaths.p39e2e890} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.35" />
          <path d="M6 2C6 1.25 6.5 1 6.5 1.75" id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.35" />
          <path d={svgPaths.p367c4990} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.35" />
          <path d={svgPaths.p3a3b9998} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.4" />
          <path d={svgPaths.p836c00} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.4" />
          <path d={svgPaths.p25fc0780} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="0.4" />
          <path d={svgPaths.p128a0700} fill="var(--fill-0, #9C4326)" id="Vector_7" />
          <path d={svgPaths.p338efd00} fill="var(--fill-0, #9C4326)" id="Vector_8" />
          <path d={svgPaths.p3a7f7b40} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.375" />
          <path d={svgPaths.p10980d00} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.325" />
          <path d="M7 3L9.5 0.5" id="Vector_11" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.45" />
          <path d="M7.75 3L10.5 1" id="Vector_12" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="0.45" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2px] py-px relative size-full">
        <NoodleIcon27 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[31.305px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">16×16</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72.5px] items-center left-[665.25px] top-0 w-[201.75px]" data-name="Container">
      <Container79 />
      <Paragraph32 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[72.5px] relative shrink-0 w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container72 />
        <Container74 />
        <Container76 />
        <Container78 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <WebPreviewCard8 />
        <Container71 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[234px] items-start left-[96px] top-[5970.25px] w-[867px]" data-name="Container">
      <Paragraph27 />
      <Container64 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[18px] relative shrink-0 w-[867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[2px] uppercase whitespace-nowrap">Option M — WordPress admin branding</p>
      </div>
    </div>
  );
}

function NoodleIcon28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[48px]" data-name="NoodleIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[14.98%_62.5%_79.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.4 4.2115">
              <path d={svgPaths.p1dbcfa00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] left-1/2 right-[45.83%] top-[10.81%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.4 4.2115">
              <path d={svgPaths.p1dbcfa00} id="Vector" opacity="0.4" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.98%_29.17%_79.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-24.9%_-35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.4 4.2115">
              <path d={svgPaths.p1dbcfa00} id="Vector" opacity="0.5" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_59.82%_54.17%_37.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.09537 11.0842">
              <path d={svgPaths.p1020c580} id="Vector" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.62%_47.32%_54.17%_49.57%]" data-name="Vector">
          <div className="absolute inset-[-7.86%_-53.47%_-7.86%_-53.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.0956 11.7807">
              <path d={svgPaths.p464ab00} id="Vector" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[26.07%_34.82%_54.17%_62.07%]" data-name="Vector">
          <div className="absolute inset-[-8.43%_-53.47%_-8.44%_-53.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.09537 11.0842">
              <path d={svgPaths.p1020c580} id="Vector" opacity="0.7" stroke="var(--stroke-0, #9C4326)" strokeLinecap="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 16">
            <path d={svgPaths.pc953000} fill="var(--fill-0, #9C4326)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 4">
            <path d={svgPaths.p232c0a20} fill="var(--fill-0, #9C4326)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[57.13%_29.17%_40.46%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-64.95%_-3.75%_-64.96%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5002 2.65477">
              <path d={svgPaths.p31ec4f60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.46%_31.25%_32.13%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-56.29%_-3.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3001 2.4546">
              <path d={svgPaths.p261eb500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[58.33%] right-[20.83%] top-[4.17%]" data-name="Vector">
          <div className="absolute inset-[-9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8 11.8">
              <path d="M0.9 10.9L10.9 0.9" id="Vector" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[64.58%] right-[12.5%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-11.25%_-8.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8001 9.80013">
              <path d={svgPaths.p1afa5a00} id="Vector" stroke="var(--stroke-0, #154212)" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[36px] relative shrink-0 w-[119.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#1b1c1c] text-[24px] top-0 tracking-[-0.5px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[92px] relative shrink-0 w-[119.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <NoodleIcon28 />
        <Text61 />
      </div>
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-[#e5e3e0] h-[8px] left-[24px] rounded-[4px] top-[24px] w-[60px]" data-name="Container" />;
}

function Container86() {
  return <div className="absolute bg-[#f6f3f2] border border-[#e5e3e0] border-solid h-[32px] left-[24px] rounded-[4px] top-[44px] w-[192px]" data-name="Container" />;
}

function Container87() {
  return <div className="absolute bg-[#e5e3e0] h-[8px] left-[24px] rounded-[4px] top-[88px] w-[60px]" data-name="Container" />;
}

function Container88() {
  return <div className="absolute bg-[#f6f3f2] border border-[#e5e3e0] border-solid h-[32px] left-[24px] rounded-[4px] top-[108px] w-[192px]" data-name="Container" />;
}

function Text62() {
  return (
    <div className="h-[18px] relative shrink-0 w-[35.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">Log In</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bg-[#9c4326] content-stretch flex h-[32px] items-center justify-center left-[24px] pl-[78.445px] pr-[78.453px] rounded-[4px] top-[156px] w-[192px]" data-name="Container">
      <Text62 />
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[240px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container85 />
        <Container86 />
        <Container87 />
        <Container88 />
        <Container89 />
      </div>
    </div>
  );
}

function LogoVariations24() {
  return (
    <div className="bg-[#f6f3f2] h-[408px] relative shrink-0 w-[421.5px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center py-[40px] relative size-full">
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[423.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <LogoVariations24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e3e0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[423.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">WP login page branding</p>
      </div>
    </div>
  );
}

function WebPreviewCard9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[434.5px] items-start left-0 top-0 w-[423.5px]" data-name="WebPreviewCard">
      <Container82 />
      <Paragraph34 />
    </div>
  );
}

function NoodleIcon29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="NoodleIcon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="NoodleIcon">
          <path d={svgPaths.pc17b740} id="Vector" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.583333" />
          <path d={svgPaths.p2bdda780} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.583333" />
          <path d={svgPaths.p14c67980} id="Vector_3" opacity="0.5" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.583333" />
          <path d={svgPaths.p10283080} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.666667" />
          <path d={svgPaths.p99aa100} id="Vector_5" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.666667" />
          <path d={svgPaths.p1c7b0300} id="Vector_6" opacity="0.7" stroke="var(--stroke-0, #D9591F)" strokeLinecap="round" strokeWidth="0.666667" />
          <path d={svgPaths.paaaa100} fill="var(--fill-0, #D9591F)" id="Vector_7" />
          <path d={svgPaths.p10717f00} fill="var(--fill-0, #D9591F)" id="Vector_8" />
          <path d={svgPaths.p1ae73e80} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="0.625" />
          <path d={svgPaths.p85ce800} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.541667" />
          <path d="M11.6667 5L15.8333 0.833334" id="Vector_11" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="0.75" />
          <path d="M12.9167 5L17.5 1.66667" id="Vector_12" stroke="var(--stroke-0, #7AB87A)" strokeLinecap="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[79.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[15px] text-white top-[-0.5px] tracking-[-0.3px] whitespace-nowrap">FreakinFood</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[35.5px] relative shrink-0 w-[168px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-px relative size-full">
        <NoodleIcon29 />
        <Text63 />
      </div>
    </div>
  );
}

function Container95() {
  return <div className="bg-[rgba(255,255,255,0.15)] rounded-[6px] shrink-0 size-[14px]" data-name="Container" />;
}

function Text64() {
  return (
    <div className="h-[18px] relative shrink-0 w-[64.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-[0.5px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[18px] relative shrink-0 w-[168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container95 />
        <Text64 />
      </div>
    </div>
  );
}

function Container97() {
  return <div className="bg-[rgba(255,255,255,0.15)] rounded-[6px] shrink-0 size-[14px]" data-name="Container" />;
}

function Text65() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">Posts</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[18px] relative shrink-0 w-[168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container97 />
        <Text65 />
      </div>
    </div>
  );
}

function Container99() {
  return <div className="bg-[rgba(255,255,255,0.15)] rounded-[6px] shrink-0 size-[14px]" data-name="Container" />;
}

function Text66() {
  return (
    <div className="h-[18px] relative shrink-0 w-[36.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-[0.5px] whitespace-nowrap">Media</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[18px] relative shrink-0 w-[168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container99 />
        <Text66 />
      </div>
    </div>
  );
}

function Container101() {
  return <div className="bg-[rgba(255,255,255,0.15)] rounded-[6px] shrink-0 size-[14px]" data-name="Container" />;
}

function Text67() {
  return (
    <div className="h-[18px] relative shrink-0 w-[35.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-[0.5px] whitespace-nowrap">Pages</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container101 />
        <Text67 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[108px] relative shrink-0 w-[168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container94 />
        <Container96 />
        <Container98 />
        <Container100 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#1b1c1c] h-[240px] relative shrink-0 w-[200px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[16px] pt-[16px] relative size-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container102() {
  return <div className="bg-[#262626] flex-[223.5_0_0] h-[240px] min-h-px min-w-px" data-name="Container" />;
}

function LogoVariations25() {
  return (
    <div className="h-[240px] relative shrink-0 w-[423.5px]" data-name="LogoVariations">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container91 />
        <Container102 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#1b1c1c] h-[240px] relative rounded-[14px] shrink-0 w-[423.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LogoVariations25 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[423.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.3px] uppercase whitespace-nowrap">WP admin sidebar branding</p>
      </div>
    </div>
  );
}

function WebPreviewCard10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[434.5px] items-start left-[443.5px] top-0 w-[423.5px]" data-name="WebPreviewCard">
      <Container90 />
      <Paragraph35 />
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <WebPreviewCard9 />
        <WebPreviewCard10 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[464.5px] items-start left-[96px] top-[6244.25px] w-[867px]" data-name="Container">
      <Paragraph33 />
      <Container81 />
    </div>
  );
}

function LogoVariations() {
  return (
    <div className="bg-[#faf7f5] h-[6780px] relative shrink-0 w-full" data-name="LogoVariations">
      <Container />
      <OptionRow />
      <OptionRow1 />
      <OptionRow2 />
      <OptionRow3 />
      <Container7 />
      <Container8 />
      <Container14 />
      <Container16 />
      <Container18 />
      <Container19 />
      <Container27 />
      <Container35 />
      <Container49 />
      <Container63 />
      <Container80 />
    </div>
  );
}

export default function FreakinfoodLabLogo() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[-2047.5px] relative size-full" data-name="Freakinfood Lab - Logo">
      <LogoVariations />
    </div>
  );
}