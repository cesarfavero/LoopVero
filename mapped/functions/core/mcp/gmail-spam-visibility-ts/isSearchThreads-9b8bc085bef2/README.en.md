# `isSearchThreads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-spam-visibility.ts` · [Module README](../../../../../modules/core/mcp/gmail-spam-visibility-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584190-584193](../../../../../../reference/runtime/sand-eval-runner.cjs#L584190-L584193) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584190-584193](../../../../../../reference/runtime/sand-eval-runner.cjs#L584190-L584193) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584190

Calls written directly in this body: `args.name.endsWith`.

SHA-256 of the source span: `34ecd582ecadddb8b5a1408314649073fc558247966ef7f9766a0b862d6fdb38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
