import imgImageWithFallback from "figma:asset/b652ba0bc6109c50e792d73e1bdbdead0aa38ae0.png";
import imgImageWithFallback1 from "figma:asset/2055293dc838b29f6482b0fab6e32230290e3e57.png";
import imgImageWithFallback2 from "figma:asset/b2073d23e662dc322792cc1916f19492a051cc5e.png";
import imgImageWithFallback3 from "figma:asset/9f434e8ffad09c795db1ea34642be6c5a4ef271f.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[566.094px] left-0 top-0 w-[1071px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-t from-[rgba(27,28,28,0.6)] h-[566.094px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(27,28,28,0.2)] w-[1071px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute h-[566.094px] left-0 top-0 w-[1071px]" data-name="Container">
      <ImageWithFallback />
      <Container1 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Design System</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[73.891px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[73.899px] left-0 text-[64.26px] text-white top-[-0.5px] tracking-[-1.2852px] whitespace-nowrap">FreakinFood</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[76.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-0.5px] w-[572px]">A high-end editorial design system for freakinfood.com — celebrating the intersection of Mediterranean warmth, Southeast Asian freshness, and Nordic precision.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[488.672px] items-start left-0 pt-[160px] px-[96px] top-[77.42px] w-[768px]" data-name="Container">
      <Label />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(251,249,248,0.12)] h-[38px] left-[789.93px] rounded-[16777200px] top-[32px] w-[249.07px]" data-name="Container">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[20px] not-italic text-[12px] text-white top-[10.5px] tracking-[0.6px] uppercase whitespace-nowrap">Editorial · freakinfood.com</p>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f6f3f2] h-[566.094px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container />
      <Container2 />
      <Container3 />
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">01 — Color Palette</p>
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">Tonal Palette</p>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[609px]">Rooted in nature — the deep chlorophyll of Herb Green, the sun-baked earth of Terracotta, and the breathable linen of the background surface.</p>
    </div>
  );
}

function App2() {
  return (
    <div className="absolute h-[25.195px] left-[96px] top-[300.38px] w-[879px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">Core Colors</p>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#154212] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Herb Green</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">primary</p>
      </div>
    </div>
  );
}

function Swatch() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-0 top-0 w-[201.75px]" data-name="Swatch">
      <Container4 />
      <Text />
      <Text1 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#2d5a27] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Primary Container</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">primary-container</p>
      </div>
    </div>
  );
}

function Swatch1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-[225.75px] top-0 w-[201.75px]" data-name="Swatch">
      <Container5 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#9c4326] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Terracotta</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">secondary</p>
      </div>
    </div>
  );
}

function Swatch2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-[451.5px] top-0 w-[201.75px]" data-name="Swatch">
      <Container6 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container7() {
  return <div className="bg-[#3a3936] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Soft Ink</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">tertiary</p>
      </div>
    </div>
  );
}

function Swatch3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-[677.25px] top-0 w-[201.75px]" data-name="Swatch">
      <Container7 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function App3() {
  return (
    <div className="absolute h-[204.813px] left-[96px] top-[349.58px] w-[879px]" data-name="App">
      <Swatch />
      <Swatch1 />
      <Swatch2 />
      <Swatch3 />
    </div>
  );
}

function App4() {
  return (
    <div className="absolute h-[25.195px] left-[96px] top-[618.39px] w-[879px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">Surface Hierarchy</p>
    </div>
  );
}

function Container8() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[126.5px]" data-name="Container" />;
}

function Text8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Lowest</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[33px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase w-[123px]">surface-container-lowest</p>
      </div>
    </div>
  );
}

function Swatch4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164.875px] items-start left-0 top-0 w-[126.5px]" data-name="Swatch">
      <Container8 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#fbf9f8] h-[94.875px] rounded-[12px] shrink-0 w-[126.5px]" data-name="Container" />;
}

function Text10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Surface</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">surface</p>
      </div>
    </div>
  );
}

function Swatch5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164.875px] items-start left-[150.5px] top-0 w-[126.5px]" data-name="Swatch">
      <Container9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container10() {
  return <div className="bg-[#f6f3f2] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[126.5px]" data-name="Container" />;
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[33px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase w-[102px]">surface-container-low</p>
      </div>
    </div>
  );
}

function Swatch6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164.875px] items-start left-[301px] top-0 w-[126.5px]" data-name="Swatch">
      <Container10 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container11() {
  return <div className="bg-[#f0edec] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[126.5px]" data-name="Container" />;
}

function Text14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Container</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[33px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase w-[68px]">surface-container</p>
      </div>
    </div>
  );
}

function Swatch7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164.875px] items-start left-[451.5px] top-0 w-[126.5px]" data-name="Swatch">
      <Container11 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container12() {
  return <div className="bg-[#eae7e5] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[126.5px]" data-name="Container" />;
}

function Text16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[33px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase w-[103px]">surface-container-high</p>
      </div>
    </div>
  );
}

function Swatch8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164.875px] items-start left-[602px] top-0 w-[126.5px]" data-name="Swatch">
      <Container12 />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container13() {
  return <div className="bg-[#e4e1df] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[126.5px]" data-name="Container" />;
}

function Text18() {
  return (
    <div className="h-[21px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Highest</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[33px] relative shrink-0 w-[126.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase w-[125px]">surface-container-highest</p>
      </div>
    </div>
  );
}

function Swatch9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[164.875px] items-start left-[752.5px] top-0 w-[126.5px]" data-name="Swatch">
      <Container13 />
      <Text18 />
      <Text19 />
    </div>
  );
}

function App5() {
  return (
    <div className="absolute h-[164.875px] left-[96px] top-[667.59px] w-[879px]" data-name="App">
      <Swatch4 />
      <Swatch5 />
      <Swatch6 />
      <Swatch7 />
      <Swatch8 />
      <Swatch9 />
    </div>
  );
}

function App6() {
  return (
    <div className="absolute h-[25.195px] left-[96px] top-[896.46px] w-[879px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">{`Text & Outline`}</p>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#1b1c1c] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text20() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">On Surface</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">on-surface</p>
      </div>
    </div>
  );
}

function Swatch10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-0 top-0 w-[201.75px]" data-name="Swatch">
      <Container14 />
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container15() {
  return <div className="bg-[#43483f] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text22() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">On Surface Variant</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">on-surface-variant</p>
      </div>
    </div>
  );
}

function Swatch11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-[225.75px] top-0 w-[201.75px]" data-name="Swatch">
      <Container15 />
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container16() {
  return <div className="bg-[#72796e] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text24() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Outline</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">outline</p>
      </div>
    </div>
  );
}

function Swatch12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-[451.5px] top-0 w-[201.75px]" data-name="Swatch">
      <Container16 />
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#c2c9bb] flex-[1_0_0] min-h-px min-w-px rounded-[12px] w-[201.75px]" data-name="Container" />;
}

function Text26() {
  return (
    <div className="h-[21px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[-0.5px] whitespace-nowrap">Outline Variant</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[201.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#72796e] text-[11px] top-0 tracking-[0.275px] uppercase whitespace-nowrap">outline-variant</p>
      </div>
    </div>
  );
}

function Swatch13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[204.813px] items-start left-[677.25px] top-0 w-[201.75px]" data-name="Swatch">
      <Container17 />
      <Text26 />
      <Text27 />
    </div>
  );
}

function App7() {
  return (
    <div className="absolute h-[204.813px] left-[96px] top-[945.66px] w-[879px]" data-name="App">
      <Swatch10 />
      <Swatch11 />
      <Swatch12 />
      <Swatch13 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#fbf9f8] h-[1262.469px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel />
      <App />
      <App1 />
      <App2 />
      <App3 />
      <App4 />
      <App5 />
      <App6 />
      <App7 />
    </div>
  );
}

function SectionLabel1() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">02 — Typography</p>
    </div>
  );
}

function App8() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">The Editorial Contrast</p>
    </div>
  );
}

function App9() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[653px]">A high-contrast pairing: Newsreader for the Italian editorial soul, Be Vietnam Pro for Scandinavian clarity, and Inter for technical precision.</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Display — Newsreader</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-['Newsreader:Regular',sans-serif] font-normal h-[123.188px] leading-[61.6px] relative shrink-0 text-[#1b1c1c] text-[56px] tracking-[-1.12px] w-full whitespace-nowrap" data-name="Heading 1">
      <p className="absolute left-0 top-[-0.5px]">Sun-Drenched Mornings</p>
      <p className="absolute left-0 top-[61.09px]">on the Amalfi Coast</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[261.188px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[48px] px-[48px] relative size-full">
        <Label1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Headlines — Newsreader</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[43.195px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">A Love Letter to Fermentation</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[31.195px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[31.2px] left-0 text-[#1b1c1c] text-[24px] top-[0.5px] tracking-[-0.24px] whitespace-nowrap">The Art of Slow-Roasted Vegetables</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[98.391px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Heading3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[236.391px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[48px] px-[48px] relative size-full">
        <Label2 />
        <Container20 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute h-[18px] left-[48px] top-[48px] w-[783px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Body — Be Vietnam Pro</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[25.195px] left-[48px] top-[90px] w-[783px]" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">Ingredients for Lemongrass Broth</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[102.375px] left-[48px] top-[131.2px] w-[512px]" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[508px]">{`Begin with the freshest stalks of lemongrass, bruised gently to release their citrus oils. Combine with galangal, kaffir lime leaves, and a whisper of bird's eye chili. The broth should simmer low, building layers of fragrance over forty minutes — never rushed.`}</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[281.57px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Label3 />
      <Heading4 />
      <Paragraph1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Labels — Inter</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[65.078px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Prep Time</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[65.078px]" data-name="Container">
      <Label5 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#1b1c1c] text-[18px] top-[18px] whitespace-nowrap">25 min</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[86.852px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Cook Time</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[45px] left-[97.08px] top-0 w-[86.852px]" data-name="Container">
      <Label6 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#1b1c1c] text-[18px] top-[18px] whitespace-nowrap">1 hr 15 min</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[77.328px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Calories</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[45px] left-[215.93px] top-0 w-[77.328px]" data-name="Container">
      <Label7 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#1b1c1c] text-[18px] top-[18px] whitespace-nowrap">340 kcal</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[90.648px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Servings</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[45px] left-[325.26px] top-0 w-[90.648px]" data-name="Container">
      <Label8 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#1b1c1c] text-[18px] top-[18px] whitespace-nowrap">4 portions</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[183px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[48px] px-[48px] relative size-full">
        <Label4 />
        <Container23 />
      </div>
    </div>
  );
}

function App10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1154.148px] items-start left-[96px] top-[316.38px] w-[879px]" data-name="App">
      <Container18 />
      <Container19 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f6f3f2] h-[1582.531px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel1 />
      <App8 />
      <App9 />
      <App10 />
    </div>
  );
}

function SectionLabel2() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">03 — Buttons</p>
    </div>
  );
}

function App11() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">Interactions</p>
    </div>
  );
}

function App12() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[638px]">Primary buttons use a gradient from Herb Green to its container shade. Secondary buttons are surface-level. Tertiary buttons reveal their underline on hover.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[48px] left-0 rounded-[12px] top-0 w-[152.805px]" data-name="Button" style={{ backgroundImage: "linear-gradient(162.561deg, rgb(21, 66, 18) 0%, rgb(45, 90, 39) 100%)" }}>
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] left-[76.5px] not-italic text-[16px] text-center text-white top-[12px] whitespace-nowrap">Save Recipe</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e4e1df] h-[48px] left-[176.8px] rounded-[12px] top-0 w-[180.547px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] left-[90.5px] not-italic text-[#1b1c1c] text-[16px] text-center top-[12px] whitespace-nowrap">View Collection</p>
    </div>
  );
}

function Text28() {
  return <div className="absolute bg-[#9c4326] h-[2px] left-0 top-[24px] w-0" data-name="Text" />;
}

function Button2() {
  return (
    <div className="absolute h-[26px] left-[381.35px] top-[11px] w-[148.758px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] left-[74.5px] not-italic text-[#9c4326] text-[16px] text-center top-0 whitespace-nowrap">Read the Full Story</p>
      <Text28 />
    </div>
  );
}

function App13() {
  return (
    <div className="absolute h-[48px] left-[96px] top-[300.38px] w-[879px]" data-name="App">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#fbf9f8] h-[460.383px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel2 />
      <App11 />
      <App12 />
      <App13 />
    </div>
  );
}

function SectionLabel3() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">{`04 — Chips & Tags`}</p>
    </div>
  );
}

function App14() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">Dietary Tags</p>
    </div>
  );
}

function App15() {
  return (
    <div className="absolute h-[25.594px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] whitespace-nowrap">Pebble-shaped chips in surface-high backgrounds, using label typography.</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[#eae7e5] h-[30px] left-0 rounded-[16777200px] top-0 w-[77.93px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[16px] not-italic text-[#43483f] text-[12px] top-[6.5px] tracking-[0.6px] uppercase whitespace-nowrap">Vegan</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute bg-[#eae7e5] h-[30px] left-[89.93px] rounded-[16777200px] top-0 w-[126px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[16px] not-italic text-[#43483f] text-[12px] top-[6.5px] tracking-[0.6px] uppercase whitespace-nowrap">Gluten-Free</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute bg-[#eae7e5] h-[30px] left-[227.93px] rounded-[16777200px] top-0 w-[111.492px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[16px] not-italic text-[#43483f] text-[12px] top-[6.5px] tracking-[0.6px] uppercase whitespace-nowrap">Dairy-Free</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute bg-[#eae7e5] h-[30px] left-[351.42px] rounded-[16777200px] top-0 w-[106.234px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[16px] not-italic text-[#43483f] text-[12px] top-[6.5px] tracking-[0.6px] uppercase whitespace-nowrap">Low-Carb</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute bg-[#eae7e5] h-[30px] left-[469.66px] rounded-[16777200px] top-0 w-[103.273px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[16px] not-italic text-[#43483f] text-[12px] top-[6.5px] tracking-[0.6px] uppercase whitespace-nowrap">Seasonal</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute bg-[#eae7e5] h-[30px] left-[584.93px] rounded-[16777200px] top-0 w-[110.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[16px] not-italic text-[#43483f] text-[12px] top-[6.5px] tracking-[0.6px] uppercase whitespace-nowrap">Fermented</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute bg-[#eae7e5] h-[30px] left-[707.82px] rounded-[16777200px] top-0 w-[61.633px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[18px] left-[16px] not-italic text-[#43483f] text-[12px] top-[6.5px] tracking-[0.6px] uppercase whitespace-nowrap">Raw</p>
    </div>
  );
}

function App16() {
  return (
    <div className="absolute h-[30px] left-[96px] top-[274.79px] w-[879px]" data-name="App">
      <Text29 />
      <Text30 />
      <Text31 />
      <Text32 />
      <Text33 />
      <Text34 />
      <Text35 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f6f3f2] h-[416.789px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel3 />
      <App14 />
      <App15 />
      <App16 />
    </div>
  );
}

function SectionLabel4() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">05 — Input Fields</p>
    </div>
  );
}

function App17() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">Minimalist Tray</p>
    </div>
  );
}

function App18() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[656px]">No full-box border. A subtle bottom-line on a low-surface background with rounded top corners.</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Recipe Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f6f3f2] h-[49.5px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#72796e] text-[16px] whitespace-nowrap">e.g. Miso-Glazed Aubergine</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#72796e] border-b-[1.5px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label9 />
      <TextInput />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Search Ingredients</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#f6f3f2] h-[49.5px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#72796e] text-[16px] whitespace-nowrap">Lemongrass, galangal, lime...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#72796e] border-b-[1.5px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label10 />
      <TextInput1 />
    </div>
  );
}

function App19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[183px] items-start left-[96px] top-[300.38px] w-[448px]" data-name="App">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[#fbf9f8] h-[595.383px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel4 />
      <App17 />
      <App18 />
      <App19 />
    </div>
  );
}

function SectionLabel5() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">06 — Recipe Cards</p>
    </div>
  );
}

function App20() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">Tonal Layering in Practice</p>
    </div>
  );
}

function App21() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[671px]">Cards use brightness shifts — not shadows or borders — to create a sense of elevation. Images are dominant, corners are rounded, and whitespace provides breathing room.</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[203.742px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[203.742px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Text36() {
  return (
    <div className="bg-[#eae7e5] h-[24.5px] relative rounded-[16777200px] shrink-0 w-[89.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-[12px] not-italic text-[#43483f] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">Seasonal</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="bg-[#eae7e5] h-[24.5px] relative rounded-[16777200px] shrink-0 w-[70.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-[12px] not-italic text-[#43483f] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">Italian</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[62.391px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[31.2px] left-0 text-[#1b1c1c] text-[24px] top-[0.5px] tracking-[-0.24px] w-[202px]">Handmade Pici with Wild Garlic</p>
    </div>
  );
}

function Label11() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[65.078px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Prep Time</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[42px] relative shrink-0 w-[65.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label11 />
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[20px] whitespace-nowrap">45 min</p>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[60.648px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Calories</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[42px] relative shrink-0 w-[60.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label12 />
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[20px] whitespace-nowrap">420 kcal</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[24px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[208.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Container33 />
        <Heading5 />
        <Container34 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[412.633px] items-start left-0 overflow-clip rounded-[12px] top-0 w-[271.664px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[203.742px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-[203.742px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Text38() {
  return (
    <div className="bg-[#eae7e5] h-[24.5px] relative rounded-[16777200px] shrink-0 w-[66.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-[12px] not-italic text-[#43483f] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">Vegan</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="bg-[#eae7e5] h-[24.5px] relative rounded-[16777200px] shrink-0 w-[110.164px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-[12px] not-italic text-[#43483f] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">Gluten-Free</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Text39 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[62.391px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[31.2px] left-0 text-[#1b1c1c] text-[24px] top-[0.5px] tracking-[-0.24px] w-[203px]">{`Turmeric & Coconut Dal`}</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[65.078px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Prep Time</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[42px] relative shrink-0 w-[65.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label13 />
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[20px] whitespace-nowrap">35 min</p>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[60.648px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Calories</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[42px] relative shrink-0 w-[60.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label14 />
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[20px] whitespace-nowrap">310 kcal</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[24px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[208.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Container40 />
        <Heading6 />
        <Container41 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[412.633px] items-start left-[303.66px] overflow-clip rounded-[12px] top-0 w-[271.664px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[203.742px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col h-[203.742px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback3 />
    </div>
  );
}

function Text40() {
  return (
    <div className="bg-[#eae7e5] h-[24.5px] relative rounded-[16777200px] shrink-0 w-[96.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-[12px] not-italic text-[#43483f] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">Fermented</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="bg-[#eae7e5] h-[24.5px] relative rounded-[16777200px] shrink-0 w-[71.164px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16.5px] left-[12px] not-italic text-[#43483f] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">Nordic</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Text40 />
      <Text41 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[62.391px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[31.2px] left-0 text-[#1b1c1c] text-[24px] top-[0.5px] tracking-[-0.24px] w-[159px]">Sourdough with Roasted Fennel</p>
    </div>
  );
}

function Label15() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[65.078px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Prep Time</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[42px] relative shrink-0 w-[65.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label15 />
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[20px] whitespace-nowrap">3 hrs</p>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[60.648px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Calories</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[42px] relative shrink-0 w-[60.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label16 />
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1c1c] text-[14px] top-[20px] whitespace-nowrap">280 kcal</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[24px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[208.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Container47 />
        <Heading7 />
        <Container48 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[412.633px] items-start left-[607.33px] overflow-clip rounded-[12px] top-0 w-[271.664px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function App22() {
  return (
    <div className="absolute h-[412.633px] left-[96px] top-[300.38px] w-[879px]" data-name="App">
      <Container30 />
      <Container37 />
      <Container44 />
    </div>
  );
}

function Section6() {
  return (
    <div className="bg-[#f6f3f2] h-[825.016px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel5 />
      <App20 />
      <App21 />
      <App22 />
    </div>
  );
}

function SectionLabel6() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">{`07 — Elevation & Depth`}</p>
    </div>
  );
}

function App23() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">{`Ambient Shadows & Ghost Borders`}</p>
    </div>
  );
}

function App24() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[658px]">Static elements rely on tonal layering. Floating elements use a diffused ambient shadow. When accessibility requires an edge, a ghost border at 20% opacity is used.</p>
    </div>
  );
}

function Label17() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Tonal Lift</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[67.195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#3a3936] text-[14px] top-0 w-[207px]">Brightness shift only — no shadow, no border. The brightest surface sits forward.</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[185.594px] items-start left-0 pt-[32px] px-[32px] rounded-[12px] top-0 w-[271.664px]" data-name="Container">
      <Label17 />
      <Paragraph2 />
    </div>
  );
}

function Label18() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Ambient Shadow</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[67.195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#3a3936] text-[14px] top-0 w-[187px]">Diffused shadow mimicking natural, warm kitchen light. For floating actions.</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[185.594px] items-start left-[303.66px] pt-[32px] px-[32px] rounded-[12px] shadow-[0px_8px_32px_0px_rgba(27,28,28,0.06)] top-0 w-[271.664px]" data-name="Container">
      <Label18 />
      <Paragraph3 />
    </div>
  );
}

function Label19() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Ghost Border</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[89.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#3a3936] text-[14px] top-0 w-[185px]">Outline variant at 20% opacity — the accessibility fallback when edges are needed.</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[185.594px] items-start left-[607.33px] pb-px pt-[33px] px-[33px] rounded-[12px] top-0 w-[271.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(194,201,187,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Label19 />
      <Paragraph4 />
    </div>
  );
}

function App25() {
  return (
    <div className="absolute h-[185.594px] left-[96px] top-[300.38px] w-[879px]" data-name="App">
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Section7() {
  return (
    <div className="bg-[#fbf9f8] h-[597.977px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel6 />
      <App23 />
      <App24 />
      <App25 />
    </div>
  );
}

function SectionLabel7() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">{`08 — Glassmorphism & Gradients`}</p>
    </div>
  );
}

function App26() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">{`Glass & Gradient`}</p>
    </div>
  );
}

function App27() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[669px]">Semi-transparent surfaces with backdrop blur for floating navigation and over-image labels. CTA gradients transition from primary to primary-container.</p>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[879px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Label20() {
  return (
    <div className="absolute h-[18px] left-[24px] top-[24px] w-[336px]" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Featured Recipe</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[31.195px] left-[24px] top-[50px] w-[336px]" data-name="Heading 3">
      <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[31.2px] left-0 text-[#1b1c1c] text-[24px] top-[0.5px] tracking-[-0.24px] whitespace-nowrap">Nordic Rye Sourdough</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[44.797px] left-[24px] top-[93.2px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#3a3936] text-[14px] top-0 w-[334px]">Three-day fermentation with heritage grains and roasted fennel seeds.</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[41px] left-[24px] rounded-[12px] top-[153.99px] w-[132.914px]" data-name="Button" style={{ backgroundImage: "linear-gradient(162.857deg, rgb(21, 66, 18) 0%, rgb(45, 90, 39) 100%)" }}>
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[21px] left-[66.5px] not-italic text-[14px] text-center text-white top-[9.5px] whitespace-nowrap">View Recipe</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[rgba(251,249,248,0.75)] h-[218.992px] left-[32px] rounded-[12px] top-[149.01px] w-[384px]" data-name="Container">
      <Label20 />
      <Heading8 />
      <Paragraph5 />
      <Button3 />
    </div>
  );
}

function App28() {
  return (
    <div className="absolute h-[400px] left-[96px] overflow-clip rounded-[12px] top-[300.38px] w-[879px]" data-name="App">
      <ImageWithFallback4 />
      <Container54 />
    </div>
  );
}

function Section8() {
  return (
    <div className="bg-[#f6f3f2] h-[812.383px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel7 />
      <App26 />
      <App27 />
      <App28 />
    </div>
  );
}

function SectionLabel8() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">09 — Recipe Steps</p>
    </div>
  );
}

function App29() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">Step-by-Step Layout</p>
    </div>
  );
}

function App30() {
  return (
    <div className="absolute h-[51.188px] left-[96px] top-[201.2px] w-[672px]" data-name="App">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[659px]">No divider lines between steps. Separation is achieved through generous whitespace and alternating surface tones.</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[60px] left-[32px] top-[32px] w-[608px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[60px] left-0 not-italic text-[40px] text-[rgba(21,66,18,0.2)] top-[-0.5px] whitespace-nowrap">01</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[25.195px] left-[32px] top-[100px] w-[608px]" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">Prepare the Aromatics</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[51.188px] left-[32px] top-[137.2px] w-[608px]" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[587px]">Bruise the lemongrass stalks with the back of a knife. Slice the galangal into thin coins and tear the kaffir lime leaves.</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f6f3f2] h-[220.383px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Text42 />
      <Heading9 />
      <Paragraph6 />
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[60px] left-[32px] top-[32px] w-[608px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[60px] left-0 not-italic text-[40px] text-[rgba(21,66,18,0.2)] top-[-0.5px] whitespace-nowrap">02</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[25.195px] left-[32px] top-[100px] w-[608px]" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">Build the Broth Base</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[51.188px] left-[32px] top-[137.2px] w-[608px]" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[584px]">In a heavy-bottomed pot, bring coconut milk and stock to a gentle simmer. Add all aromatics and let them steep for 20 minutes.</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white h-[220.383px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Text43 />
      <Heading10 />
      <Paragraph7 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[60px] left-[32px] top-[32px] w-[608px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[60px] left-0 not-italic text-[40px] text-[rgba(21,66,18,0.2)] top-[-0.5px] whitespace-nowrap">03</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[25.195px] left-[32px] top-[100px] w-[608px]" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">Season and Finish</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[51.188px] left-[32px] top-[137.2px] w-[608px]" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#3a3936] text-[16px] top-[-0.5px] w-[591px]">Add fish sauce, palm sugar, and a squeeze of lime. Taste and adjust. Garnish with Thai basil, sliced chili, and a drizzle of chili oil.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f6f3f2] h-[220.383px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Text44 />
      <Heading11 />
      <Paragraph8 />
    </div>
  );
}

function App31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[725.148px] items-start left-[96px] top-[300.38px] w-[672px]" data-name="App">
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Section9() {
  return (
    <div className="bg-[#fbf9f8] h-[1137.531px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel8 />
      <App29 />
      <App30 />
      <App31 />
    </div>
  );
}

function SectionLabel9() {
  return (
    <div className="absolute h-[18px] left-[96px] top-[112px] w-[879px]" data-name="SectionLabel">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#72796e] text-[12px] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">10 — Guidelines</p>
    </div>
  );
}

function App32() {
  return (
    <div className="absolute h-[43.195px] left-[96px] top-[146px] w-[879px]" data-name="App">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[43.2px] left-0 text-[#1b1c1c] text-[36px] top-[-0.5px] tracking-[-0.72px] whitespace-nowrap">{`Do's & Don'ts`}</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute bg-[#154212] left-[32px] rounded-[16777200px] size-[32px] top-[32px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Regular','Noto_Sans:Regular',sans-serif] leading-[32px] left-[15.8px] text-[12px] text-center text-white top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✓
      </p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[25.195px] left-[32px] top-[88px] w-[359.5px]" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">Do</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[24px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#154212] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Text46 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 whitespace-nowrap">Embrace intentional asymmetry in layouts</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[24px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#154212] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Text47 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 whitespace-nowrap">Use sun-drenched, warm photography</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute h-[46px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#154212] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Text48 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 w-[294px]">Maintain generous margins (7–8.5rem between sections)</p>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute h-[46px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#154212] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Text49 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 w-[322px]">Define boundaries with background color shifts</p>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[184px] items-start left-[32px] top-[129.2px] w-[359.5px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-white h-[345.195px] left-0 rounded-[12px] top-0 w-[423.5px]" data-name="Container">
      <Text45 />
      <Heading12 />
      <List />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute bg-[#9c4326] left-[32px] rounded-[16777200px] size-[32px] top-[32px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Regular','Noto_Sans:Regular',sans-serif] leading-[32px] left-[16.15px] text-[12px] text-center text-white top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        ✗
      </p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[25.195px] left-[32px] top-[88px] w-[359.5px]" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[25.2px] left-0 not-italic text-[#1b1c1c] text-[18px] top-0 whitespace-nowrap">{`Don't`}</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[24px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#9c4326] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Text51 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 whitespace-nowrap">Use 1px solid borders to section content</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute h-[24px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#9c4326] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Text52 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 whitespace-nowrap">Use pure black (#000) for any typography</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute h-[24px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#9c4326] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Text53 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 whitespace-nowrap">Crowd text — keep body line-height at 1.6</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute h-[24px] left-0 top-[2px] w-[13.891px]" data-name="Text">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#9c4326] text-[16px] top-0 whitespace-nowrap">—</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Text54 />
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-[25.89px] not-italic text-[#3a3936] text-[16px] top-0 whitespace-nowrap">Use hard drop shadows on static elements</p>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[32px] top-[129.2px] w-[359.5px]" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-white h-[345.195px] left-[455.5px] rounded-[12px] top-0 w-[423.5px]" data-name="Container">
      <Text50 />
      <Heading13 />
      <List1 />
    </div>
  );
}

function App33() {
  return (
    <div className="absolute h-[345.195px] left-[96px] top-[237.2px] w-[879px]" data-name="App">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Section10() {
  return (
    <div className="bg-[#f6f3f2] h-[694.391px] relative shrink-0 w-full" data-name="Section">
      <SectionLabel9 />
      <App32 />
      <App33 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[31.195px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Newsreader:Medium',sans-serif] font-medium leading-[31.2px] left-0 text-[24px] text-[rgba(255,255,255,0.9)] top-[0.5px] tracking-[-0.24px] whitespace-nowrap">FreakinFood</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[22.398px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-0 whitespace-nowrap">{`freakinfood.com — High-End Editorial Food & Culture Design System`}</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[61.594px] relative shrink-0 w-[466.164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading14 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.4)] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Fonts</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[22.398px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-0 whitespace-nowrap">Newsreader · Be Vietnam Pro · Inter</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] h-[48.398px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Label21 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.4)] top-[0.5px] tracking-[0.24px] uppercase whitespace-nowrap">Version</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[22.398px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-0 whitespace-nowrap">1.0</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[48.398px] relative shrink-0 w-[54.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Label22 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[48.398px] relative shrink-0 w-[324.727px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#154212] h-[189.594px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex items-start justify-between pt-[64px] px-[96px] relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

export default function EditorialStyleDesignSystem() {
  return (
    <div className="bg-[#fbf9f8] content-stretch flex flex-col items-start relative size-full" data-name="Editorial Style - Design System">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </div>
  );
}