# `buildSandBotTemplateDeepLinkUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/deep-link.ts` · [Module README](../../../../../modules/shared/desktop/deep-link-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489450-489452](../../../../../../reference/runtime/host-main.cjs#L489450-L489452) | `FunctionDeclaration` | no | `shareId` |
| [evaluation:475586-475588](../../../../../../reference/runtime/sand-eval-runner.cjs#L475586-L475588) | `FunctionDeclaration` | no | `shareId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489450-489452](../../../../../../reference/runtime/host-main.cjs#L489450-L489452) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475586-475588](../../../../../../reference/runtime/sand-eval-runner.cjs#L475586-L475588) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489450

Calls written directly in this body: `sandDeepLinks.buildUrl`.

SHA-256 of the source span: `ebe5e1973a1a9c103334e540030402d5b299b294108113bac32c7000e04ba789`.

### evaluation:475586

Calls written directly in this body: `sandDeepLinks.buildUrl`.

SHA-256 of the source span: `ebe5e1973a1a9c103334e540030402d5b299b294108113bac32c7000e04ba789`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
