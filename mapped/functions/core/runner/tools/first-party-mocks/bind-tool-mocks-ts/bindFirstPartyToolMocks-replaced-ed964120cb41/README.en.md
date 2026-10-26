# `bindFirstPartyToolMocks/replaced`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:556066-556071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556066-L556071) | `ArrowFunctionExpression` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556066-556071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556066-L556071) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:556066 uses an implicit arrow-function return.

### evaluation:556066

Calls written directly in this body: `tools.flatMap`.

SHA-256 of the source span: `9b26839b0413d7eb8382f95afc9a5c97cee56ddaeb2c9a0c79e1e418faf81d96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
