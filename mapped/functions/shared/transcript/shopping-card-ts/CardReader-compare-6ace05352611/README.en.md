# `CardReader.compare`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707654-707687](../../../../../../reference/runtime/host-main.cjs#L707654-L707687) | `method` | no | `value, products` |
| [evaluation:481776-481809](../../../../../../reference/runtime/sand-eval-runner.cjs#L481776-L481809) | `method` | no | `value, products` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707654-707687](../../../../../../reference/runtime/host-main.cjs#L707654-L707687) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:481776-481809](../../../../../../reference/runtime/sand-eval-runner.cjs#L481776-L481809) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:707654

Calls written directly in this body: `.flatMap`, `this.count`, `this.error`, `this.record`, `this.text`.

SHA-256 of the source span: `a287955eca1b1ba757c10cfa4a7a06fd026d843b5894607006b6dfd603ff769b`.

### evaluation:481776

Calls written directly in this body: `.flatMap`, `this.count`, `this.error`, `this.record`, `this.text`.

SHA-256 of the source span: `a287955eca1b1ba757c10cfa4a7a06fd026d843b5894607006b6dfd603ff769b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
