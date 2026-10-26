# `buildSandSidebarDeepLinkUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/deep-link.ts` · [Module README](../../../../../modules/shared/desktop/deep-link-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:475605-475612](../../../../../../reference/runtime/sand-eval-runner.cjs#L475605-L475612) | `FunctionDeclaration` | no | `target, automationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475605-475612](../../../../../../reference/runtime/sand-eval-runner.cjs#L475605-L475612) | 1 | 0 | 0 | 2 | 1 | 1 |

### evaluation:475605

Calls written directly in this body: `sandDeepLinks.buildUrl`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `45a4637e2578bb40420cca83e67aa920eebed9db9f6d278d9ea0a56b19c3251a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
