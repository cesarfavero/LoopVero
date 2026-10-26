# `memoryDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769613-769621](../../../../../../reference/runtime/host-main.cjs#L769613-L769621) | `FunctionDeclaration` | no | `candidate, position` |
| [evaluation:565282-565290](../../../../../../reference/runtime/sand-eval-runner.cjs#L565282-L565290) | `FunctionDeclaration` | no | `candidate, position` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769613-769621](../../../../../../reference/runtime/host-main.cjs#L769613-L769621) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565282-565290](../../../../../../reference/runtime/sand-eval-runner.cjs#L565282-L565290) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769613

Calls written directly in this body: `memoryCandidateLine`, `memoryPath`.

SHA-256 of the source span: `32dd4cf58c627840663b4e4e8c7be0f898d1f3958b3b819661b877cc4adc0a9f`.

### evaluation:565282

Calls written directly in this body: `memoryCandidateLine`, `memoryPath`.

SHA-256 of the source span: `32dd4cf58c627840663b4e4e8c7be0f898d1f3958b3b819661b877cc4adc0a9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
