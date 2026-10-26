# `firstPartyToolNamesForMocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555834-555836](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555834-L555836) | `FunctionDeclaration` | no | `mockTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555834-555836](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555834-L555836) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555834

Calls written directly in this body: `mockTools.flatMap`, `new Set`.

SHA-256 of the source span: `69664b5512528f4c66796482054023864e4ef80b6e7cda9dc115848fc50a77f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
