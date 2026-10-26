# `originOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742876-742885](../../../../../../reference/runtime/host-main.cjs#L742876-L742885) | `FunctionDeclaration` | no | `text3` |
| [evaluation:515538-515547](../../../../../../reference/runtime/sand-eval-runner.cjs#L515538-L515547) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742876-742885](../../../../../../reference/runtime/host-main.cjs#L742876-L742885) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:515538-515547](../../../../../../reference/runtime/sand-eval-runner.cjs#L515538-L515547) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:742876

Calls written directly in this body: `PAGE_URL_LINE.exec`, `new URL`.

SHA-256 of the source span: `71d84f14abf8e33b1bbfa1ead6933410d22849b3e0a51c25fead6ae2d1848d86`.

### evaluation:515538

Calls written directly in this body: `PAGE_URL_LINE.exec`, `new URL`.

SHA-256 of the source span: `71d84f14abf8e33b1bbfa1ead6933410d22849b3e0a51c25fead6ae2d1848d86`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
