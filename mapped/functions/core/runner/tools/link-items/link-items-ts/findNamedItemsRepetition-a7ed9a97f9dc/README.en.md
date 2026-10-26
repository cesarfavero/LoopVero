# `findNamedItemsRepetition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741153-741163](../../../../../../../../reference/runtime/host-main.cjs#L741153-L741163) | `FunctionDeclaration` | no | `lead, items` |
| [evaluation:482100-482110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482100-L482110) | `FunctionDeclaration` | no | `lead, items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741153-741163](../../../../../../../../reference/runtime/host-main.cjs#L741153-L741163) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:482100-482110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482100-L482110) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:741153

Calls written directly in this body: `.filter`, `.map`, `hrefsIn`, `items.hrefs.some`, `items.titles.map`, `lead.split`, `lead.toLowerCase`, `listLines.some`, `namedTitleCount`, `new Set`.

SHA-256 of the source span: `e6f0070c4fbf47bbb543ae4a53ee08ff99d9136072bc129b0715fc94d48f7192`.

### evaluation:482100

Calls written directly in this body: `.filter`, `.map`, `hrefsIn`, `items.hrefs.some`, `items.titles.map`, `lead.split`, `lead.toLowerCase`, `listLines.some`, `namedTitleCount`, `new Set`.

SHA-256 of the source span: `e6f0070c4fbf47bbb543ae4a53ee08ff99d9136072bc129b0715fc94d48f7192`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
