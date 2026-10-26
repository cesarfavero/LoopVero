# `matchesBodyWords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732506-732517](../../../../../../../reference/runtime/host-main.cjs#L732506-L732517) | `FunctionDeclaration` | no | `html, body` |
| [evaluation:539518-539529](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539518-L539529) | `FunctionDeclaration` | no | `html, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732506-732517](../../../../../../../reference/runtime/host-main.cjs#L732506-L732517) | 2 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:539518-539529](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539518-L539529) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:732506

Calls written directly in this body: `new Set`, `next.add`, `reachable.has`.

Assignment or increment targets: `reachable`.

SHA-256 of the source span: `747277d0ff6f68956e978a0dc2bcb56c8da6619b2a815d5ff7491d7651ff81dd`.

### evaluation:539518

Calls written directly in this body: `new Set`, `next.add`, `reachable.has`.

Assignment or increment targets: `reachable`.

SHA-256 of the source span: `747277d0ff6f68956e978a0dc2bcb56c8da6619b2a815d5ff7491d7651ff81dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
