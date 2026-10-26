# `parseCiBranch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716093-716096](../../../../../../reference/runtime/host-main.cjs#L716093-L716096) | `FunctionDeclaration` | no | `raw` |
| [evaluation:527776-527779](../../../../../../reference/runtime/sand-eval-runner.cjs#L527776-L527779) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716093-716096](../../../../../../reference/runtime/host-main.cjs#L716093-L716096) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527776-527779](../../../../../../reference/runtime/sand-eval-runner.cjs#L527776-L527779) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716093

Calls written directly in this body: `isValidGitBranch`, `normalizeScopeToken`.

SHA-256 of the source span: `0aac30cf8fc54b4b2db39f7a262078d6ac09fbdd093b036cbdb043c66c4ddf8c`.

### evaluation:527776

Calls written directly in this body: `isValidGitBranch`, `normalizeScopeToken`.

SHA-256 of the source span: `0aac30cf8fc54b4b2db39f7a262078d6ac09fbdd093b036cbdb043c66c4ddf8c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
