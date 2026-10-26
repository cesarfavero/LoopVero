# `sameOriginPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742831-742840](../../../../../../reference/runtime/host-main.cjs#L742831-L742840) | `FunctionDeclaration` | no | `url2, origin` |
| [evaluation:515493-515502](../../../../../../reference/runtime/sand-eval-runner.cjs#L515493-L515502) | `FunctionDeclaration` | no | `url2, origin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742831-742840](../../../../../../reference/runtime/host-main.cjs#L742831-L742840) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:515493-515502](../../../../../../reference/runtime/sand-eval-runner.cjs#L515493-L515502) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:742831

Calls written directly in this body: `bare.slice`, `bare.startsWith`, `path33.startsWith`, `resolvesTo`, `url2.endsWith`, `url2.slice`, `url2.startsWith`.

SHA-256 of the source span: `305035a90718033aa215a1b246d56d5b9fc44c741016abc2b707218577fac328`.

### evaluation:515493

Calls written directly in this body: `bare.slice`, `bare.startsWith`, `path33.startsWith`, `resolvesTo`, `url2.endsWith`, `url2.slice`, `url2.startsWith`.

SHA-256 of the source span: `305035a90718033aa215a1b246d56d5b9fc44c741016abc2b707218577fac328`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
