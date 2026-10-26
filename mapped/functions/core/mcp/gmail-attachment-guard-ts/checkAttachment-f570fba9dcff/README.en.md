# `checkAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-attachment-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584314-584331](../../../../../../reference/runtime/sand-eval-runner.cjs#L584314-L584331) | `FunctionDeclaration` | no | `attachment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584314-584331](../../../../../../reference/runtime/sand-eval-runner.cjs#L584314-L584331) | 5 | 0 | 0 | 6 | 0 | 0 |

### evaluation:584314

Calls written directly in this body: `.includes`, `bytes.subarray`, `decode5`, `imageMatches`, `kindOf`.

SHA-256 of the source span: `e7614495b969389f5eb3eb878ac3383079de96d8e689757963f5f11cb0b16bf4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
