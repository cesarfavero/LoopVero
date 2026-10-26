# `createSandBackendTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225165-225175](../../../../../../../reference/runtime/host-main.cjs#L225165-L225175) | `FunctionDeclaration` | no | `options2` |
| [evaluation:512236-512246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512236-L512246) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225165-225175](../../../../../../../reference/runtime/host-main.cjs#L225165-L225175) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512236-512246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512236-L512246) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225165

Calls written directly in this body: `createSafeConnectTransport`, `createSandInferenceInterceptor`, `createSandRpcTracingInterceptor`.

SHA-256 of the source span: `534008fa874d720d29a62564b291140f8cb1fb596a947ff4996ea94674991e08`.

### evaluation:512236

Calls written directly in this body: `createSafeConnectTransport`, `createSandInferenceInterceptor`, `createSandRpcTracingInterceptor`.

SHA-256 of the source span: `534008fa874d720d29a62564b291140f8cb1fb596a947ff4996ea94674991e08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
