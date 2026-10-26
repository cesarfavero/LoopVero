# `createSafeConnectTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225151-225164](../../../../../../../reference/runtime/host-main.cjs#L225151-L225164) | `FunctionDeclaration` | no | `options2` |
| [evaluation:512222-512235](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512222-L512235) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225151-225164](../../../../../../../reference/runtime/host-main.cjs#L225151-L225164) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512222-512235](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512222-L512235) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225151

Calls written directly in this body: `createNodeHttpClient`, `createTransport`, `validateReadWriteMaxBytes`.

SHA-256 of the source span: `f02e49a30aba8952742b28692f9de67310273ce130782f4a515389f772156f3e`.

### evaluation:512222

Calls written directly in this body: `createNodeHttpClient`, `createTransport`, `validateReadWriteMaxBytes`.

SHA-256 of the source span: `d0c8cd6c9323c77c516d27a2c4aa8c8b536132bbf6051ae6561c2750d49e29b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
