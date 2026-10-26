# `answeredByFirstPartyToolMock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555848-555851](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555848-L555851) | `FunctionDeclaration` | no | `mocks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555848-555851](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555848-L555851) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555848

Calls written directly in this body: `mockListedFirstPartyToolNames`.

SHA-256 of the source span: `8b568b7c67bc3395ce2102e0bb66230710b02a2ece63499e4c76f8f4874836c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
