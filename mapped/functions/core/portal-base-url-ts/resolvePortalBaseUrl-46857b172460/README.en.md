# `resolvePortalBaseUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/portal-base-url.ts` · [Module README](../../../../modules/core/portal-base-url-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508898-508905](../../../../../reference/runtime/host-main.cjs#L508898-L508905) | `FunctionDeclaration` | no | `readPortalBaseUrl, read2` |
| [evaluation:490294-490301](../../../../../reference/runtime/sand-eval-runner.cjs#L490294-L490301) | `FunctionDeclaration` | no | `readPortalBaseUrl, read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508898-508905](../../../../../reference/runtime/host-main.cjs#L508898-L508905) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:490294-490301](../../../../../reference/runtime/sand-eval-runner.cjs#L490294-L490301) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:508898

Calls written directly in this body: `readPortalBaseUrl`.

SHA-256 of the source span: `0d189c5dae76e392a5608400540e8164bb31f6e6736f684d8587f76001d9b51d`.

### evaluation:490294

Calls written directly in this body: `readPortalBaseUrl`.

SHA-256 of the source span: `0d189c5dae76e392a5608400540e8164bb31f6e6736f684d8587f76001d9b51d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
