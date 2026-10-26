# `cardTextEntities`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/card-text.ts` · [Module README](../../../../../modules/shared/transcript/card-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706902-706905](../../../../../../reference/runtime/host-main.cjs#L706902-L706905) | `FunctionDeclaration` | no | `text3` |
| [evaluation:480999-481002](../../../../../../reference/runtime/sand-eval-runner.cjs#L480999-L481002) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706902-706905](../../../../../../reference/runtime/host-main.cjs#L706902-L706905) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480999-481002](../../../../../../reference/runtime/sand-eval-runner.cjs#L480999-L481002) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706902

Calls written directly in this body: `Array.from`, `new Set`, `text3.replace`, `visible.matchAll`.

SHA-256 of the source span: `519ed86a0661c499272ccf1442cf509052ac2b4841fd45fb79ff506649d422e9`.

### evaluation:480999

Calls written directly in this body: `Array.from`, `new Set`, `text3.replace`, `visible.matchAll`.

SHA-256 of the source span: `519ed86a0661c499272ccf1442cf509052ac2b4841fd45fb79ff506649d422e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
