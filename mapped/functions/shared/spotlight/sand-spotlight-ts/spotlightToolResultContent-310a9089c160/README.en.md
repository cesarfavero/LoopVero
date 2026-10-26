# `spotlightToolResultContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/spotlight/sand-spotlight.ts` · [Module README](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761639-761663](../../../../../../reference/runtime/host-main.cjs#L761639-L761663) | `FunctionDeclaration` | no | `source, content` |
| [evaluation:552454-552478](../../../../../../reference/runtime/sand-eval-runner.cjs#L552454-L552478) | `FunctionDeclaration` | no | `source, content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761639-761663](../../../../../../reference/runtime/host-main.cjs#L761639-L761663) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:552454-552478](../../../../../../reference/runtime/sand-eval-runner.cjs#L552454-L552478) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:761639

Calls written directly in this body: `body.push`, `flushTextRun`, `spotlightClose`, `spotlightOpen`, `textRun.push`.

SHA-256 of the source span: `6d09b20ab8bbc4b96cc27521f6b35cc5e87d120100e6b40b9f450905e582250d`.

### evaluation:552454

Calls written directly in this body: `body.push`, `flushTextRun`, `spotlightClose`, `spotlightOpen`, `textRun.push`.

SHA-256 of the source span: `6d09b20ab8bbc4b96cc27521f6b35cc5e87d120100e6b40b9f450905e582250d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
