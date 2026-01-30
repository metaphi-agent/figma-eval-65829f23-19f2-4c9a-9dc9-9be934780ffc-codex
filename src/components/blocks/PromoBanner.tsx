import Button from '../ui/Button'
import Card from '../ui/Card'

export default function PromoBanner() {
  return (
    <Card
      className="relative overflow-hidden rounded-modal border-border bg-brand px-10 py-10 shadow-modal"
      variant="surface"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
        <div className="min-w-0">
          <h2 className="text-3xl font-semibold tracking-tight text-text lg:text-[40px] lg:leading-[1.15]">
            All charts created by the free plugin "i Chart".
          </h2>
          <p className="mt-4 text-xl text-text/90">所有图表均由免费插件iChart生成</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg">Get i Chart Plugin</Button>
          </div>
          <a
            className="mt-5 inline-block text-lg text-link underline decoration-link/60 underline-offset-4 hover:decoration-link"
            href="https://www.figma.com/community/plugin/1370606842652257742"
            target="_blank"
            rel="noreferrer"
          >
            https://www.figma.com/community/plugin/1370606842652257742
          </a>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-black/20 bg-black/25">
          <img
            src="./ground_truth/frames/example-427321190.png"
            alt="iChart preview"
            className="h-full w-full object-cover opacity-90"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
        </div>
      </div>
    </Card>
  )
}

