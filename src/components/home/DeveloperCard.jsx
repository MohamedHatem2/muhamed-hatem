export default function DeveloperCard() {
  return (
    <div aria-hidden="true" data-glass="code" data-tilt data-reveal="slide" data-reveal-delay="200" className="absolute top-[37%] left-[-4%] z-20 hidden w-[45%] -rotate-8 rounded-2xl border border-primary/30 bg-code-bg p-4 shadow-portrait sm:block sm:p-5 lg:p-4">
      <div className="mb-4 flex gap-1.5">
        <span className="size-2 rounded-full bg-error" />
        <span className="size-2 rounded-full bg-code-string" />
        <span className="size-2 rounded-full bg-success" />
      </div>
      <pre className="font-mono text-[clamp(0.5rem,0.75vw,0.85rem)] leading-[1.9] text-code-ink">
        <code><span className="text-code-keyword">const</span>{' developer = {\n'}
          {'  '}<span className="text-code-type">name</span>{': '}<span className="text-code-string">"Mohamed Hatem"</span>{',\n'}
          {'  '}<span className="text-code-type">role</span>{': [\n'}
          {'    '}<span className="text-code-string">"Product & Automation Builder"</span>{',\n'}
          {'    '}<span className="text-code-value">"ITI UI/UX Instructor"</span>{'\n  ],\n'}
          {'  '}<span className="text-code-type">passion</span>{': '}<span className="text-code-value">"Understand, Build,</span>{'\n'}
          {'    '}<span className="text-code-value">Automate, Improve."</span>{'\n}'}
        </code>
      </pre>
    </div>
  )
}
