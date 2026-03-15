export const Home = (): JSX.Element => {
  return (
    <div
      className="bg-[#060c24] w-full min-h-[540px] relative overflow-hidden
        min-[1920px]:min-w-[1920px]"
      data-model-id="316:6256"
    >
      {/* ─── "Clients" header image ─── */}
      <img
        className="
          mx-auto mt-4 w-[60%] max-w-[503px] h-auto block
          min-[1920px]:absolute min-[1920px]:top-[19px] min-[1920px]:left-[calc(50.00%_-_516px)] min-[1920px]:w-[503px] min-[1920px]:h-[120px] min-[1920px]:mx-0 min-[1920px]:mt-0
        "
        alt="Clients"
        src="https://c.animaapp.com/dNarZ28i/img/clients.png"
      />

      {/* ─── Title ─── */}
      <p
        className="
          mt-4 px-4 text-center [font-family:'Geologica',Helvetica] font-bold text-transparent text-xl leading-snug
          sm:text-2xl
          min-[1920px]:absolute min-[1920px]:top-[84px] min-[1920px]:left-[389px] min-[1920px]:w-[653px] min-[1920px]:text-[32px] min-[1920px]:leading-[38.4px] min-[1920px]:mt-0 min-[1920px]:px-0
        "
      >
        <span className="text-[#0385ff]">НАШИ </span>
        <span className="text-[#ffffff]">КЛИЕНТЫ</span>
      </p>

      {/* ─── Grid container (mobile/tablet) · absolute children (desktop) ─── */}
      <div
        className="
          grid grid-cols-2 gap-3 px-4 py-6
          sm:grid-cols-3 sm:gap-4 sm:px-8
          md:grid-cols-3 md:gap-5 md:px-12
          min-[1920px]:static min-[1920px]:block min-[1920px]:p-0
        "
      >
        {/* Block 1 — Purple border block */}
        <div
          className="
            aspect-[262/171] rounded-2xl overflow-hidden flex items-center justify-center bg-[#060c2499]
            transition-shadow duration-300
            shadow-[inset_0_0_20px_rgba(191,91,243,0.15)]
            hover:shadow-[inset_0_0_40px_rgba(191,91,243,0.35)]
            before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-2xl
            before:[background:linear-gradient(102deg,rgba(191,91,243,1)_0%,rgba(191,91,243,0)_100%)]
            before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
            before:z-[1] before:pointer-events-none
            relative
            min-[1920px]:absolute min-[1920px]:top-[159px] min-[1920px]:left-[390px] min-[1920px]:w-[262px] min-[1920px]:h-[171px] min-[1920px]:rounded-[30px]
            min-[1920px]:before:rounded-[30px] min-[1920px]:aspect-auto
          "
        >
          <img
            className="h-[45%] w-auto object-cover min-[1920px]:h-[45px] min-[1920px]:ml-px min-[1920px]:w-[135px]"
            alt="Img photoroom"
            src="https://c.animaapp.com/dNarZ28i/img/img-9860-photoroom@2x.png"
          />
        </div>

        {/* Block 2 — Small middle block */}
        <div
          className="
            aspect-[165/171] rounded-2xl overflow-hidden
            transition-shadow duration-300
            shadow-[inset_0_0_20px_rgba(3,133,255,0.15)]
            hover:shadow-[inset_0_0_40px_rgba(3,133,255,0.35)]
            min-[1920px]:absolute min-[1920px]:top-[159px] min-[1920px]:left-[682px] min-[1920px]:w-[165px] min-[1920px]:h-[171px] min-[1920px]:rounded-[30px] min-[1920px]:aspect-auto
          "
        >
          <img
            className="w-full h-full object-cover"
            alt="Frame"
            src="https://c.animaapp.com/dNarZ28i/img/frame-1948760012.svg"
          />
        </div>

        {/* Block 3 — Orange border block (YarHotel) */}
        <div
          className="
            aspect-[360/171] rounded-2xl overflow-hidden flex items-center justify-center bg-[#060c2499]
            transition-shadow duration-300
            shadow-[inset_0_0_20px_rgba(254,138,4,0.15)]
            hover:shadow-[inset_0_0_40px_rgba(254,138,4,0.35)]
            before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-2xl
            before:[background:linear-gradient(100deg,rgba(254,138,4,1)_0%,rgba(254,138,4,0)_100%)]
            before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
            before:z-[1] before:pointer-events-none
            relative
            col-span-2 sm:col-span-1
            min-[1920px]:absolute min-[1920px]:top-[159px] min-[1920px]:left-[877px] min-[1920px]:w-[360px] min-[1920px]:h-[171px] min-[1920px]:rounded-[30px]
            min-[1920px]:before:rounded-[30px] min-[1920px]:aspect-auto min-[1920px]:col-span-1
          "
        >
          <img
            className="h-[60%] w-auto object-cover min-[1920px]:mt-px min-[1920px]:h-[104px] min-[1920px]:w-[104px]"
            alt="Yarhotel photoroom"
            src="https://c.animaapp.com/dNarZ28i/img/yarhotel-photoroom@2x.png"
          />
        </div>

        {/* Block 4 — Top-right block */}
        <div
          className="
            aspect-[262/171] rounded-2xl overflow-hidden
            transition-shadow duration-300
            shadow-[inset_0_0_20px_rgba(255,40,40,0.15)]
            hover:shadow-[inset_0_0_40px_rgba(255,40,40,0.35)]
            col-span-2 sm:col-span-1
            min-[1920px]:absolute min-[1920px]:top-[159px] min-[1920px]:left-[1267px] min-[1920px]:w-[262px] min-[1920px]:h-[171px] min-[1920px]:rounded-[30px] min-[1920px]:aspect-auto min-[1920px]:col-span-1
          "
        >
          <img
            className="w-full h-full object-cover"
            alt="Frame"
            src="https://c.animaapp.com/dNarZ28i/img/frame-1948760016.svg"
          />
        </div>

        {/* Block 5 — Bottom-left block */}
        <div
          className="
            aspect-[652/159] rounded-2xl overflow-hidden
            transition-shadow duration-300
            shadow-[inset_0_0_20px_rgba(8,208,112,0.15)]
            hover:shadow-[inset_0_0_40px_rgba(8,208,112,0.35)]
            col-span-2 sm:col-span-2
            min-[1920px]:absolute min-[1920px]:top-[351px] min-[1920px]:left-[390px] min-[1920px]:w-[652px] min-[1920px]:h-[159px] min-[1920px]:rounded-[30px] min-[1920px]:aspect-auto min-[1920px]:col-span-1
          "
        >
          <img
            className="w-full h-full object-cover"
            alt="Frame"
            src="https://c.animaapp.com/dNarZ28i/img/frame-1948760013.svg"
          />
        </div>

        {/* Block 6 — Bottom-right block */}
        <div
          className="
            aspect-[458/160] rounded-2xl overflow-hidden
            transition-shadow duration-300
            shadow-[inset_0_0_20px_rgba(255,212,9,0.15)]
            hover:shadow-[inset_0_0_40px_rgba(255,212,9,0.35)]
            col-span-2 sm:col-span-1
            min-[1920px]:absolute min-[1920px]:top-[350px] min-[1920px]:left-[1072px] min-[1920px]:w-[458px] min-[1920px]:h-40 min-[1920px]:rounded-[30px] min-[1920px]:aspect-auto min-[1920px]:col-span-1
          "
        >
          <img
            className="w-full h-full object-cover"
            alt="Frame"
            src="https://c.animaapp.com/dNarZ28i/img/frame-1948760038.svg"
          />
        </div>
      </div>
    </div>
  );
};
