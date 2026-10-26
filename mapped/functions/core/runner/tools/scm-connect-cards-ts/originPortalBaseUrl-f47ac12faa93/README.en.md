# `originPortalBaseUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509278-509283](../../../../../../../reference/runtime/host-main.cjs#L509278-L509283) | `FunctionDeclaration` | no | `readPortalBaseUrl` |
| [evaluation:557003-557008](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557003-L557008) | `FunctionDeclaration` | no | `readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509278-509283](../../../../../../../reference/runtime/host-main.cjs#L509278-L509283) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557003-557008](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557003-L557008) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509278

Calls written directly in this body: `resolvePortalBaseUrl`.

SHA-256 of the source span: `b6f58a5a7198e529e150365786a7e530035d8d3b2b0b9d3e1361eba65d56fb05`.

### evaluation:557003

Calls written directly in this body: `resolvePortalBaseUrl`.

SHA-256 of the source span: `b6f58a5a7198e529e150365786a7e530035d8d3b2b0b9d3e1361eba65d56fb05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
