# `fetchSandPrivacyMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224932-224951](../../../../../../../reference/runtime/host-main.cjs#L224932-L224951) | `FunctionDeclaration` | yes | `{   backend,   accessToken,   machineId,   teamId }` |
| [evaluation:511955-511974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511955-L511974) | `FunctionDeclaration` | yes | `{   backend,   accessToken,   machineId,   teamId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224932-224951](../../../../../../../reference/runtime/host-main.cjs#L224932-L224951) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:511955-511974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511955-L511974) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:224932

Calls written directly in this body: `client.getUserPrivacyMode`, `createSandCursorBackendClient`, `new GetUserPrivacyModeRequest`.

SHA-256 of the source span: `324bd9c463f967bb2c10cb989a6a83300f7bf7f9e9fa047413b60062eda44e14`.

### evaluation:511955

Calls written directly in this body: `client.getUserPrivacyMode`, `createSandCursorBackendClient`, `new GetUserPrivacyModeRequest`.

SHA-256 of the source span: `63804cdfa0bc71852377f93b3a29199b4fbb51aa4f579a27f80eb6a338d948a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
