# `failureText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-id-not-found.ts` · [Module README](../../../../../modules/core/mcp/gmail-id-not-found-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584493-584498](../../../../../../reference/runtime/sand-eval-runner.cjs#L584493-L584498) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584493-584498](../../../../../../reference/runtime/sand-eval-runner.cjs#L584493-L584498) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584493

Calls written directly in this body: `.join`, `outcome.value.content.map`.

SHA-256 of the source span: `866a7dbb85571a8a7be7279f47397d8385b1c40ad812e09055b6dc161b426747`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
