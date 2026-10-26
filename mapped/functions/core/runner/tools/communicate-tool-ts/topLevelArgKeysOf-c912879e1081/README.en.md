# `topLevelArgKeysOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725084-725088](../../../../../../../reference/runtime/host-main.cjs#L725084-L725088) | `FunctionDeclaration` | no | `schema3` |
| [evaluation:480055-480059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480055-L480059) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725084-725088](../../../../../../../reference/runtime/host-main.cjs#L725084-L725088) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:480055-480059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480055-L480059) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:725084

Calls written directly in this body: `Object.keys`, `current2.innerType`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `99a2f0b0dea034be1639bdb5e8909a47e56a46bf10f4a3d5cf24da8c73eb123e`.

### evaluation:480055

Calls written directly in this body: `Object.keys`, `current2.innerType`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `c069cd795262e7adbffcaf804856dc5e9d299fdc4c39d74a2ecee2e6de2cc028`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
