# `withLogoFetchSlot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace-logo.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-logo-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404480-404491](../../../../../../../reference/runtime/host-main.cjs#L404480-L404491) | `FunctionDeclaration` | yes | `run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404480-404491](../../../../../../../reference/runtime/host-main.cjs#L404480-L404491) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:404480

Calls written directly in this body: `new Promise`, `pendingLogoFetches.shift`, `run`.

Assignment or increment targets: `activeLogoFetches`.

SHA-256 of the source span: `39f98a6e58255e4b1ab82381f46745c98831cf2ad4231e1c81921968b45ce4b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
