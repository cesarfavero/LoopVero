# `describeSources`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-connected-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763692-763694](../../../../../../../reference/runtime/host-main.cjs#L763692-L763694) | `FunctionDeclaration` | no | `sources` |
| [evaluation:556740-556742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556740-L556742) | `FunctionDeclaration` | no | `sources` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763692-763694](../../../../../../../reference/runtime/host-main.cjs#L763692-L763694) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556740-556742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556740-L556742) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763692

Calls written directly in this body: `.join`, `sources.map`.

SHA-256 of the source span: `233aadcd39aef7ec266679a797f77ad80480be89e1e89f98dd4ff87f40d89395`.

### evaluation:556740

Calls written directly in this body: `.join`, `sources.map`.

SHA-256 of the source span: `233aadcd39aef7ec266679a797f77ad80480be89e1e89f98dd4ff87f40d89395`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
