# `listChatValuesOnly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768016-768022](../../../../../../../../reference/runtime/host-main.cjs#L768016-L768022) | `FunctionDeclaration` | yes | `deps` |
| [evaluation:563532-563538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563532-L563538) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768016-768022](../../../../../../../../reference/runtime/host-main.cjs#L768016-L768022) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563532-563538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563532-L563538) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:768016

Calls written directly in this body: `.join`, `chatValueNames`, `chatValuesBlock`, `notAvailable`.

SHA-256 of the source span: `f71b77a6ccb46a3a98e8e255a0732fc6602a04a9898671d0b4ebf15203fc25ba`.

### evaluation:563532

Calls written directly in this body: `.join`, `chatValueNames`, `chatValuesBlock`, `notAvailable`.

SHA-256 of the source span: `f71b77a6ccb46a3a98e8e255a0732fc6602a04a9898671d0b4ebf15203fc25ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
