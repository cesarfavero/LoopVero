# `described`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/trigger-schema.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762284-762286](../../../../../../../../reference/runtime/host-main.cjs#L762284-L762286) | `FunctionDeclaration` | no | `schema3, text3` |
| [evaluation:554894-554896](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554894-L554896) | `FunctionDeclaration` | no | `schema3, text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762284-762286](../../../../../../../../reference/runtime/host-main.cjs#L762284-L762286) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554894-554896](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554894-L554896) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:762284

Calls written directly in this body: `schema3.describe`.

SHA-256 of the source span: `65ee97e930c7318c2adfa1db5d8cfc8a063ae2e8be857139122a8b7247c6ba03`.

### evaluation:554894

Calls written directly in this body: `schema3.describe`.

SHA-256 of the source span: `65ee97e930c7318c2adfa1db5d8cfc8a063ae2e8be857139122a8b7247c6ba03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
