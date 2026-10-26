# `describeNeedsAuthCardForAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/needs-auth-notes.ts` · [Module README](../../../../../modules/core/mcp/needs-auth-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584911-584915](../../../../../../reference/runtime/sand-eval-runner.cjs#L584911-L584915) | `FunctionDeclaration` | no | `slot, surfaced` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584911-584915](../../../../../../reference/runtime/sand-eval-runner.cjs#L584911-L584915) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584911

Calls written directly in this body: `describeNeedsAuthForAutomation`, `formatMcpAccountDisplayName`.

SHA-256 of the source span: `bea83923ecaee212f9588f80008bc06066137a4fbf43272191261ad194c8b235`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
