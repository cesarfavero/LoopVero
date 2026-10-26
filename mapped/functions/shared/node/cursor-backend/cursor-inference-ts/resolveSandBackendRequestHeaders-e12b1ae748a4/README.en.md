# `resolveSandBackendRequestHeaders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225041-225078](../../../../../../../reference/runtime/host-main.cjs#L225041-L225078) | `FunctionDeclaration` | yes | `options2, isPrivacyModeLookup` |
| [evaluation:512104-512141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512104-L512141) | `FunctionDeclaration` | yes | `options2, isPrivacyModeLookup` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225041-225078](../../../../../../../reference/runtime/host-main.cjs#L225041-L225078) | 6 | 1 | 2 | 1 | 0 | 0 |
| [evaluation:512104-512141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512104-L512141) | 6 | 1 | 2 | 1 | 0 | 0 |

### host:225041

Calls written directly in this body: `JSON.stringify`, `Object.entries`, `Object.keys`, `Promise.all`, `String`, `applyLocalCliModeHeader`, `applySandInferenceRequestContext`, `buildSandRequestLineageHeaders`, `createCursorChecksum`, `getSandBackendClientHeaders`, `headers.set`, `new Headers`, `options2.getMachineId`, `resolveGhostModeHeader`, `resolveSandBackendAuth`.

SHA-256 of the source span: `c71dea7660a62bed77d1b36515aff379c19d37b45c88c11b2e7c6444fa44fea7`.

### evaluation:512104

Calls written directly in this body: `JSON.stringify`, `Object.entries`, `Object.keys`, `Promise.all`, `String`, `applyLocalCliModeHeader`, `applySandInferenceRequestContext`, `buildSandRequestLineageHeaders`, `createCursorChecksum`, `getSandBackendClientHeaders`, `headers.set`, `new Headers`, `options2.getMachineId`, `resolveGhostModeHeader`, `resolveSandBackendAuth`.

SHA-256 of the source span: `c71dea7660a62bed77d1b36515aff379c19d37b45c88c11b2e7c6444fa44fea7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
