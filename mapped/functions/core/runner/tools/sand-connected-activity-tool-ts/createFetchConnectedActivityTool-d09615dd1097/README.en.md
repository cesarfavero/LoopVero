# `createFetchConnectedActivityTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-connected-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763739-763754](../../../../../../../reference/runtime/host-main.cjs#L763739-L763754) | `FunctionDeclaration` | no | `port` |
| [evaluation:556787-556802](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556787-L556802) | `FunctionDeclaration` | no | `port` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763739-763754](../../../../../../../reference/runtime/host-main.cjs#L763739-L763754) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556787-556802](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556787-L556802) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763739

Calls written directly in this body: `.describe`, `defineCommunicateTool`, `describeSources`, `external_exports2.object`, `sourceSchema`, `sources.some`.

SHA-256 of the source span: `839b114cc2bc3fac332f8cfe9de8da23dde9c53f707aa004e7fd4ae06478b399`.

### evaluation:556787

Calls written directly in this body: `.describe`, `defineCommunicateTool`, `describeSources`, `external_exports3.object`, `sourceSchema`, `sources.some`.

SHA-256 of the source span: `f534cc764c3cfb5e15946b19ba59d2995cdb122776c27257b32b186600344773`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
