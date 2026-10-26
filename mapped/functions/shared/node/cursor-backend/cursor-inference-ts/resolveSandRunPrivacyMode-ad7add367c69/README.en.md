# `resolveSandRunPrivacyMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512007-512046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512007-L512046) | `FunctionDeclaration` | yes | `options2, fetchPrivacyMode = fetchSandPrivacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512007-512046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512007-L512046) | 9 | 0 | 3 | 4 | 0 | 1 |

### evaluation:512007

Calls written directly in this body: `Promise.all`, `accountScopeOfToken`, `options2.getAccessToken`, `options2.getMachineId`, `options2.getTeamId`, `resolveCachedSandPrivacyMode`, `sandRunPrivacyModeFallback`.

SHA-256 of the source span: `4fbde7587c841758703c3595a3490e066d005c034feecbb2c8cd08b56dd4494e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
