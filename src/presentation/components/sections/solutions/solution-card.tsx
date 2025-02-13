import Image from 'next/image'

export function SolutionCard() {
  return (
    <div className="relative">
      <div className="flex rounded-md w-[229px] h-[300px] overflow-hidden bg-blue-50 md:w-full md:h-full md:justify-center">
        <Image
          src="/section-solutions-woman.png"
          alt="Mulher sorrindo usando celular"
          width={488}
          height={488}
        />
      </div>

      <div className="absolute -left-1.5 md:-left-2/4 bottom-16 bg-white rounded-md p-3 md:p-6 shadow-md w-[130px] h-[88px] md:min-w-[278px] md:h-[185px]">
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-0.5 md:space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-2xl font-bold">R$ 999,90</span>
              <Image src="/bar-chart.svg" alt="Chart" width={12} height={12} className="md:w-4 md:h-4" />
            </div>
            <p className="text-neutral-dark-100 text-xs md:text-sm">Balanço</p>
          </div>

          <div className="w-full h-[2px] md:h-[3px] bg-neutral-light-gray-02 my-2 md:my-5 rounded-full"></div>

          <Image src="/avatars.png" alt="Avatars" width={46} height={16} className="md:w-[92px] md:h-[32px]" />
        </div>
      </div>
    </div>
  )
}
