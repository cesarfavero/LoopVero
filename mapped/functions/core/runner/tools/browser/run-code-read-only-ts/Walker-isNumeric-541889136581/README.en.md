# `Walker.isNumeric`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750046-750071](../../../../../../../../reference/runtime/host-main.cjs#L750046-L750071) | `method` | no | `node2, scope` |
| [evaluation:522897-522922](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522897-L522922) | `method` | no | `node2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750046-750071](../../../../../../../../reference/runtime/host-main.cjs#L750046-L750071) | 9 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:522897-522922](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522897-L522922) | 9 | 0 | 0 | 9 | 0 | 0 |

### host:750046

Calls written directly in this body: `NUMERIC_BINARY_OPERATORS.has`, `NUMERIC_GLOBAL_FUNCTIONS.has`, `scope.lookup`, `this.isNumeric`.

SHA-256 of the source span: `bef28487bbce595357bb152b75a535c30d76ae756dec1f9b39da7848f4fa2ca7`.

### evaluation:522897

Calls written directly in this body: `NUMERIC_BINARY_OPERATORS.has`, `NUMERIC_GLOBAL_FUNCTIONS.has`, `scope.lookup`, `this.isNumeric`.

SHA-256 of the source span: `bef28487bbce595357bb152b75a535c30d76ae756dec1f9b39da7848f4fa2ca7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
