# `formatConnectedActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-connected-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763712-763738](../../../../../../../reference/runtime/host-main.cjs#L763712-L763738) | `FunctionDeclaration` | no | `source, result` |
| [evaluation:556760-556786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556760-L556786) | `FunctionDeclaration` | no | `source, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763712-763738](../../../../../../../reference/runtime/host-main.cjs#L763712-L763738) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556760-556786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556760-L556786) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:763712

Calls written directly in this body: `JSON.stringify`, `emptyNote`, `formatUsage`, `result.items.map`.

SHA-256 of the source span: `88fb6b690831a0d29aeb417f6f49a1b261de6ee514d0c7f9cac5973f61f6c9b8`.

### evaluation:556760

Calls written directly in this body: `JSON.stringify`, `emptyNote`, `formatUsage`, `result.items.map`.

SHA-256 of the source span: `88fb6b690831a0d29aeb417f6f49a1b261de6ee514d0c7f9cac5973f61f6c9b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
