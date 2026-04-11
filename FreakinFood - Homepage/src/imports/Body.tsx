import svgPaths from "./svg-iivrhjord3";
import logoSvgPaths from "./svg-7n0hh4dqxc";
import imgVietnameseFreshnessStory from "figma:asset/92fe088f6fb639d925dc99065637f53afe3257be.png";
import imgNordicWinterSalad from "figma:asset/2031363014108f460585c917a1e53f288e31dc71.png";
import imgRamenArchitecture from "figma:asset/33eac3fc29a389bacc2842ca6f98b971970414ef.png";
import imgCoastalFlavors from "figma:asset/57d9c65a4eee2d134d0ecfc7b19992a60c05b40c.png";
import imgSourdoughCraft from "figma:asset/5d59b2dc510eac62a7ba7538f68f5f54cab0bfc6.png";
import imgInsta1 from "figma:asset/87faa96aad6bee0d66ab9e443855e21e3ccca8bf.png";
import imgInsta2 from "figma:asset/39409f21ef4f9cbff13cb9abcfb99a93effbaaaa.png";
import imgInsta3 from "figma:asset/48610b7f2dc0521c9198ad5afd852d119ef22404.png";
import imgInsta4 from "figma:asset/6b849959bda348ad3fc80d2de216c3e4fac8f2d0.png";

function VietnameseFreshnessStory() {
  return (
    <div className="h-[593.33px] relative w-full" data-name="Vietnamese Freshness Story">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Vietnamese Freshness Story" className="absolute inset-0 w-full h-full object-cover" src={imgVietnameseFreshnessStory} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full" data-name="Overlay+Shadow">
      <VietnameseFreshnessStory />
      <div className="absolute bg-[rgba(38,66,36,0.1)] inset-0 mix-blend-multiply" data-name="Overlay" />
    </div>
  );
}

function AestheticOffsetElement() {
  return (
    <div className="absolute bg-white bottom-[-24px] content-stretch flex flex-col gap-[16px] items-start left-[-24px] max-w-[200px] pl-[32px] pr-[65.36px] py-[32px]" data-name="Aesthetic Offset Element">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Aesthetic Offset Element:shadow" />
      <div className="h-[30px] relative shrink-0 w-[22.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 30">
          <path d={svgPaths.p280a6f80} fill="var(--fill-0, #9D4225)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[84px] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[20px] w-[102.64px]">
        <p className="leading-[28px] mb-0">{`"The soul of a`}</p>
        <p className="leading-[28px] mb-0">kitchen is its</p>
        <p className="leading-[28px]">{`heritage."`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-[8/span_5] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center" data-name="Container">
      <OverlayShadow />
      <AestheticOffsetElement />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9d4225] text-[12px] tracking-[2.4px] uppercase w-[138.59px]">
        <p className="leading-[16px]">Featured Story</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[384px] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[96px] tracking-[-2.4px] w-[606.06px]">
        <p className="leading-[96px] mb-0">Modern</p>
        <p className="leading-[96px] mb-0">Vietnamese</p>
        <p className="leading-[96px] mb-0">Freshness:</p>
        <p className="leading-[96px]">A Swedish Take.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] pt-[8px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[84px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[20px] w-[548.89px]">
        <p className="leading-[28px] mb-0">An exploration of Nordic discipline meeting the aromatic</p>
        <p className="leading-[28px] mb-0">vibrancy of the Saigon streets. Discover the delicate</p>
        <p className="leading-[28px]">balance of dill, fish sauce, and summer light.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[16px] relative rounded-[6px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(38, 66, 36) 0%, rgb(61, 90, 57) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px] shadow-[0px_20px_25px_-5px_rgba(38,66,36,0.1),0px_8px_10px_-6px_rgba(38,66,36,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase w-[129.14px]">
        <p className="leading-[20px]">Read the Story</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[14px] tracking-[0.7px] uppercase w-[137.95px]">
        <p className="[text-decoration-skip-ink:none] decoration-[#9d4225] decoration-solid leading-[20px] underline">View All Recipes</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Link />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-[1/span_7] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center" data-name="Container">
      <Container3 />
      <Heading />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[632px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#fbf9f8] min-h-[870px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[48px] py-[119px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start left-[327.22px] px-[32px] right-0 top-[27px]" data-name="Margin">
      <div className="bg-[rgba(195,200,189,0.2)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[40px] justify-center leading-[0] left-0 not-italic text-[#264224] text-[36px] top-[20px] w-[327.22px]">
        <p className="leading-[40px]">Latest from the Kitchen</p>
      </div>
      <Margin />
    </div>
  );
}

function NordicWinterSalad() {
  return (
    <div className="h-[384px] relative shrink-0 w-full" data-name="Nordic Winter Salad">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNordicWinterSalad} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f6f3f2] col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-1 self-center shrink-0" data-name="Background">
      <NordicWinterSalad />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[10px] tracking-[1px] uppercase w-[40.84px]">
        <p className="leading-[15px]">Recipe</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c3c8bd] text-[10px] tracking-[1px] uppercase w-[4.61px]">
        <p className="leading-[15px]">/</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[10px] tracking-[1px] uppercase w-[98.17px]">
        <p className="leading-[15px]">Mediterranean</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[30px] w-full">
        <p className="leading-[37.5px] mb-0">{`Charred Roots & Preserved`}</p>
        <p className="leading-[37.5px]">Lemon Emulsion</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[0.7px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[16px] w-full">
        <p className="leading-[24px] mb-0">A masterclass in textural contrast: honey-</p>
        <p className="leading-[24px]">lacquered carrots paired with the sharp acidity…</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p8e10ae0} fill="var(--fill-0, #434840)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container16 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[12px] w-[39.09px]">
        <p className="leading-[16px]">45 Min</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p35e13d80} fill="var(--fill-0, #434840)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container18 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[12px] w-[71.14px]">
        <p className="leading-[16px]">Intermediate</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pt-[16.7px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container8() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[15.3px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container9 />
      <Heading2 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function ArticleAsymmetricRecipeCard() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[384px] relative shrink-0 w-full" data-name="Article - Asymmetric Recipe Card">
      <Background />
      <Container8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[36px] w-full">
        <p className="leading-[40px] mb-0">The Architecture of a Noodle</p>
        <p className="leading-[40px]">Bowl</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Exploring why the structural integrity of a ramen bowl</p>
        <p className="leading-[24px] mb-0">mirrors the principles of modern Scandinavian</p>
        <p className="leading-[24px]">architecture.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[13px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13">
        <g id="Container">
          <path d={svgPaths.peebad90} fill="var(--fill-0, #1B1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[12px] w-[69.57px]">
        <p>
          <span className="leading-[16px]">{`Full Story `}</span>
          <span className="font-['Liberation_Serif:Bold',sans-serif] leading-[16px] not-italic">→</span>
        </p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[69.58000183105469px] relative" data-name="Link:margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[243.562px] relative w-full">
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[12px] w-[60.2px]">
        <p className="leading-[16px]">8 min read</p>
      </div>
      <LinkMargin />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[24.5px] items-start relative shrink-0 w-[421.34px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#9d4225] text-[12px] tracking-[1.2px] uppercase w-[180.88px]">
        <p className="leading-[16px]">{`The Curator's Journal`}</p>
      </div>
      <Heading3 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function RamenArchitecture() {
  return (
    <div className="h-[312.878px] relative shrink-0 w-full" data-name="Ramen Architecture">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%]" src={imgRamenArchitecture} />
      </div>
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="aspect-[3/4] bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full" data-name="Overlay+Shadow">
      <RamenArchitecture />
    </div>
  );
}

function OverlayShadowCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[324.722px] items-start justify-center relative shrink-0" data-name="Overlay+Shadow:css-transform">
      <div className="flex h-[324.731px] items-center justify-center relative shrink-0 w-[250.713px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-3 flex-none">
          <OverlayShadow1 />
        </div>
      </div>
    </div>
  );
}

function ArticleStoryCardTonalLayering() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Article - Story Card: Tonal Layering">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[39.98px] items-center pb-[42.089px] pt-[42.069px] px-[48px] relative w-full">
          <Container19 />
          <OverlayShadowCssTransform />
        </div>
      </div>
    </div>
  );
}

function CoastalFlavors() {
  return (
    <div className="h-[211.5px] relative shrink-0 w-full" data-name="Coastal Flavors">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgCoastalFlavors} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute aspect-video content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 rounded-[8px] top-0" data-name="Container">
      <CoastalFlavors />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[235.5px]" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[24px] w-[303.55px]">
        <p className="leading-[32px]">{`Coastal Rhythms: Brine & Butter`}</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[275.5px]" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[14px] w-[364.94px]">
        <p className="leading-[20px]">A photographic essay on the simple luxury of the tide.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[10px] tracking-[-0.5px] uppercase w-[64.08px]">
        <p className="leading-[15px]">Photo Essay</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[10px] tracking-[-0.5px] uppercase w-[5.13px]">
        <p className="leading-[15px]">•</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[10px] tracking-[-0.5px] uppercase w-[50.69px]">
        <p className="leading-[15px]">April 2024</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 opacity-60 right-0 top-[311.5px]" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Article() {
  return (
    <div className="col-1 h-[354.5px] justify-self-stretch relative row-1 shrink-0" data-name="Article">
      <Container23 />
      <Heading4 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function SourdoughCraft() {
  return (
    <div className="h-[211.5px] relative shrink-0 w-full" data-name="Sourdough Craft">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgSourdoughCraft} />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute aspect-video content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 rounded-[8px] top-0" data-name="Container">
      <SourdoughCraft />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[235.5px]" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[24px] w-[289.41px]">
        <p className="leading-[32px]">The 72-Hour Ferment Strategy</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[275.5px]" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[14px] w-[313.44px]">
        <p className="leading-[20px] mb-0">Why time is the most expensive and important</p>
        <p className="leading-[20px]">ingredient in your pantry.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[9px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10.5">
        <g id="Container">
          <path d={svgPaths.p274e4180} fill="var(--fill-0, #1B1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container33 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[10px] tracking-[-0.5px] uppercase w-[17.7px]">
        <p className="leading-[15px]">72h</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[10px] tracking-[-0.5px] uppercase w-[5.13px]">
        <p className="leading-[15px]">•</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[10px] tracking-[-0.5px] uppercase w-[50.97px]">
        <p className="leading-[15px]">Advanced</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 opacity-60 pt-[8px] right-0 top-[331.5px]" data-name="Container">
      <Container32 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Article1() {
  return (
    <div className="col-2 h-[354.5px] justify-self-stretch relative row-1 shrink-0" data-name="Article">
      <Container29 />
      <Heading5 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function BentoStyleMiniGrid() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[354.50px] relative shrink-0 w-full" data-name="Bento Style Mini Grid">
      <Article />
      <Article1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <ArticleAsymmetricRecipeCard />
      <ArticleStoryCardTonalLayering />
      <BentoStyleMiniGrid />
    </div>
  );
}

function LatestPostsFeed() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[48px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Latest Posts Feed">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[20px] w-full">
        <p className="leading-[28px]">Search the Archives</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Explore recipes...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fbf9f8] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[17px] relative w-full">
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bottom-[26.92%] content-stretch flex flex-col items-start right-[16px] top-[26.92%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #264224)" fillOpacity="0.4" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container38 />
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[12px] shrink-0 w-full" data-name="Search">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
        <Heading6 />
        <Container36 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[20px] w-full">
        <p className="leading-[28px]">Curated Themes</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#eae8e7] bottom-[80px] content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] rounded-[9999px] top-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[12px] tracking-[1.2px] uppercase w-[119.55px]">
        <p className="leading-[16px]">Plant-Forward</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#264224] bottom-[80px] content-stretch flex flex-col items-start left-[159.55px] px-[16px] py-[8px] rounded-[9999px] top-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase w-[118.22px]">
        <p className="leading-[16px]">Modern Nordic</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#eae8e7] bottom-[40px] content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] rounded-[9999px] top-[40px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[12px] tracking-[1.2px] uppercase w-[63.66px]">
        <p className="leading-[16px]">Coastal</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-[#eae8e7] bottom-[40px] content-stretch flex flex-col items-start left-[103.66px] px-[16px] py-[8px] rounded-[9999px] top-[40px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[12px] tracking-[1.2px] uppercase w-[109.78px]">
        <p className="leading-[16px]">Slow Ferment</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-[#eae8e7] bottom-[40px] content-stretch flex flex-col items-start left-[253.44px] px-[16px] py-[8px] rounded-[9999px] top-[40px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[12px] tracking-[1.2px] uppercase w-[81.03px]">
        <p className="leading-[16px]">Technique</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-[#eae8e7] bottom-0 content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] rounded-[9999px] top-[80px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1c1c] text-[12px] tracking-[1.2px] uppercase w-[110.64px]">
        <p className="leading-[16px]">Saigon Street</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function CuratedTags() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Curated Tags">
      <Heading7 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9d4225] text-[10px] tracking-[3px] uppercase w-full">
          <p className="leading-[15px]">A Note From the Kitchen</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">{`"Food is never just food. It is a dialogue between`}</p>
          <p className="leading-[29.25px] mb-0">where we come from and where we are standing</p>
          <p className="leading-[29.25px]">{`right now."`}</p>
        </div>
      </div>
    </div>
  );
}

function EditorialNote() {
  return (
    <div className="relative shrink-0 w-full" data-name="Editorial Note">
      <div aria-hidden="true" className="absolute border-[#9d4225] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[15.25px] items-start pl-[34px] py-[16px] relative w-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function AsideSidebar() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[64px] items-start justify-self-stretch pb-[776.63px] relative row-1 self-start shrink-0" data-name="Aside - Sidebar">
      <Search />
      <CuratedTags />
      <EditorialNote />
    </div>
  );
}

function SectionMainContentGridWithSidebar() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Section - Main Content Grid with Sidebar">
      <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[auto] max-w-[inherit] px-[24px] py-[96px] relative w-full">
        <LatestPostsFeed />
        <AsideSidebar />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[32px] relative shrink-0 w-[40px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 32">
        <g id="Container" opacity="0.4">
          <path d={svgPaths.p1e683e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] w-[464.84px]">
        <p className="leading-[60px]">The Weekly Curator</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] text-center w-[622.28px]">
        <p className="leading-[28px] mb-0">Receive a hand-picked collection of seasonal recipes, technical</p>
        <p className="leading-[28px]">essays, and culinary inspirations directly to your inbox.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.4)] w-full">
          <p className="leading-[normal]">Your email address</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] self-stretch" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[25px] py-[19px] relative size-full">
          <Container45 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#9d4225] content-stretch flex flex-col items-center justify-center pb-[19.5px] pt-[18.5px] px-[32px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase w-[141.33px]">
        <p className="leading-[20px]">Join the Kitchen</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[512px] pt-[16px] relative shrink-0 w-[512px]" data-name="Form">
      <Input1 />
      <Button1 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Heading1 />
      <Container44 />
      <Form />
    </div>
  );
}

function SectionNewsletterCta() {
  return (
    <div className="bg-[#264224] relative shrink-0 w-full" data-name="Section - Newsletter CTA">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[112px] pt-[96px] px-[192px] relative w-full">
          <div className="absolute bg-[#3d5a39] blur-[60px] bottom-[-96px] opacity-30 right-[-96px] rounded-[9999px] size-[384px]" data-name="Decorative background element" />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[24px] items-baseline leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[40px] justify-center relative shrink-0 text-[#264224] text-[36px] w-[287.73px]">
        <p className="leading-[40px]">Living the Narrative</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[#9d4225] text-[12px] tracking-[1.2px] uppercase w-[221.58px]">
        <p className="leading-[16px]">@thetransnationalcurator</p>
      </div>
    </div>
  );
}

function Insta() {
  return (
    <div className="h-[296px] relative shrink-0 w-full" data-name="Insta 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInsta1} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex inset-0 items-center justify-center opacity-0" data-name="Overlay">
      <Container47 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eae8e7] col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative rounded-[2px] row-1 self-start shrink-0" data-name="Background">
      <Insta />
      <Overlay />
    </div>
  );
}

function Insta1() {
  return (
    <div className="h-[296px] relative shrink-0 w-full" data-name="Insta 2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInsta2} />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex inset-0 items-center justify-center opacity-0" data-name="Overlay">
      <Container48 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#eae8e7] col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative rounded-[2px] row-1 self-start shrink-0" data-name="Background">
      <Insta1 />
      <Overlay1 />
    </div>
  );
}

function Insta2() {
  return (
    <div className="h-[296px] relative shrink-0 w-full" data-name="Insta 3">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInsta3} />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex inset-0 items-center justify-center opacity-0" data-name="Overlay">
      <Container49 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#eae8e7] col-3 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative rounded-[2px] row-1 self-start shrink-0" data-name="Background">
      <Insta2 />
      <Overlay2 />
    </div>
  );
}

function Insta3() {
  return (
    <div className="h-[296px] relative shrink-0 w-full" data-name="Insta 4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInsta4} />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[18.35px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
        <g id="Container">
          <path d={svgPaths.p279a9400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex inset-0 items-center justify-center opacity-0" data-name="Overlay">
      <Container50 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#eae8e7] col-4 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative rounded-[2px] row-1 self-start shrink-0" data-name="Background">
      <Insta3 />
      <Overlay3 />
    </div>
  );
}

function Container46() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[296px] relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
      <Background3 />
      <Background4 />
    </div>
  );
}

function SectionSocialProofInstagramGrid() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Section - Social Proof / Instagram Grid">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] py-[96px] relative w-full">
        <Paragraph />
        <Container46 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[80px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionMainContentGridWithSidebar />
      <SectionNewsletterCta />
      <SectionSocialProofInstagramGrid />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[69px] justify-center leading-[0] not-italic relative shrink-0 text-[#434840] text-[14px] w-[291.86px]">
        <p className="leading-[22.75px] mb-0">Dedicated to the meticulous exploration of</p>
        <p className="leading-[22.75px] mb-0">global food cultures through the lens of</p>
        <p className="leading-[22.75px]">modern design and traditional technique.</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #264224)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #264224)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20.7px] items-start pt-[0.7px] relative shrink-0 w-full" data-name="Container">
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container52() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[23.3px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex items-center gap-[8px] shrink-0">
        <div className="relative shrink-0 size-[22px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <g>
              <path d={logoSvgPaths.p35c05900} opacity="0.5" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
              <path d={logoSvgPaths.p9111200} opacity="0.4" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
              <path d={logoSvgPaths.p21150300} opacity="0.5" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
              <path d={logoSvgPaths.p5ba2b00} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
              <path d={logoSvgPaths.pf7c6816} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
              <path d={logoSvgPaths.p90ce180} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
              <path d={logoSvgPaths.p298faa00} fill="#9C4326" />
              <path d={logoSvgPaths.p14c42480} fill="#9C4326" />
              <path d={logoSvgPaths.p2d334e00} stroke="white" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.125" />
              <path d={logoSvgPaths.p2b4ceb00} stroke="white" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.975" />
              <path d="M21 9L28.5 1.5" stroke="#154212" strokeLinecap="round" strokeWidth="1.35" />
              <path d="M23.25 9L31.5 3" stroke="#154212" strokeLinecap="round" strokeWidth="1.35" />
            </g>
          </svg>
        </div>
        <span className="font-['Newsreader:Regular',serif] text-[#264224] text-[20px] leading-[28px] tracking-[-0.4px]">FreakinFood</span>
      </div>
      <Container53 />
      <Container54 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[12px] tracking-[2.4px] uppercase w-full">
        <p className="leading-[16px]">Connections</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(27,28,28,0.7)] w-full">
        <p className="leading-[20px]">Instagram (Main)</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(27,28,28,0.7)] w-full">
        <p className="leading-[20px]">Instagram (Kitchen)</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9d4225] text-[14px] w-full">
        <p className="leading-[20px]">Newsletter</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(27,28,28,0.7)] w-full">
        <p className="leading-[20px]">Flipboard</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container55() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading8 />
      <List />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[12px] tracking-[2.4px] uppercase w-full">
        <p className="leading-[16px]">Philosophy</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(27,28,28,0.7)] w-full">
        <p className="leading-[20px]">About the Curator</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(27,28,28,0.7)] w-full">
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(27,28,28,0.7)] w-full">
        <p className="leading-[20px]">Cookie Settings</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function Container56() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[36.25px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading9 />
      <List1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[auto] max-w-[inherit] px-[32px] py-[64px] relative w-full">
        <Container52 />
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(27,28,28,0.5)] w-full">
          <p className="leading-[16px]">© 2024 The Transnational Curator. All rights reserved. Crafted for the curious palate.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(195,200,189,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[33px] pt-[32px] px-[32px] relative w-full">
        <Container57 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f6f3f2] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <Container51 />
      <HorizontalBorder />
    </div>
  );
}

function NavNoodleIcon() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g>
          <path d={logoSvgPaths.p35c05900} opacity="0.5" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
          <path d={logoSvgPaths.p9111200} opacity="0.4" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
          <path d={logoSvgPaths.p21150300} opacity="0.5" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.05" />
          <path d={logoSvgPaths.p5ba2b00} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
          <path d={logoSvgPaths.pf7c6816} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
          <path d={logoSvgPaths.p90ce180} opacity="0.7" stroke="#9C4326" strokeLinecap="round" strokeWidth="1.2" />
          <path d={logoSvgPaths.p298faa00} fill="#9C4326" />
          <path d={logoSvgPaths.p14c42480} fill="#9C4326" />
          <path d={logoSvgPaths.p2d334e00} stroke="white" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.125" />
          <path d={logoSvgPaths.p2b4ceb00} stroke="white" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="0.975" />
          <path d="M21 9L28.5 1.5" stroke="#154212" strokeLinecap="round" strokeWidth="1.35" />
          <path d="M23.25 9L31.5 3" stroke="#154212" strokeLinecap="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-center gap-[10px] relative shrink-0 cursor-pointer" data-name="Link">
      <NavNoodleIcon />
      <span className="font-['Newsreader:Regular',serif] text-[#1b1c1c] text-[28px] leading-[32px] tracking-[-0.6px]">FreakinFood</span>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#9d4225] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#264224] text-[16px] w-[45.5px]">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(27,28,28,0.6)] w-[113.92px]">
        <p className="leading-[24px]">Recipes + Blog</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(27,28,28,0.6)] w-[58.88px]">
        <p className="leading-[24px]">Explore</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(27,28,28,0.6)] w-[48.31px]">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link11 />
      <LinkMargin1 />
      <LinkMargin2 />
      <LinkMargin3 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #264224)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container59 />
    </div>
  );
}

function Nav() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[24px] pr-[24.01px] py-[16px] relative w-full">
          <Link10 />
          <Container58 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(251,249,248,0.7)] content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" data-name="Header - TopAppBar">
      <Nav />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#fbf9f8] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Main />
      <Footer />
      <HeaderTopAppBar />
    </div>
  );
}