# `renderComputerResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777253-777260](../../../../../../../reference/runtime/host-main.cjs#L777253-L777260) | `FunctionDeclaration` | no | `output2, operation, redact` |
| [evaluation:576898-576905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576898-L576905) | `FunctionDeclaration` | no | `output2, operation, redact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777253-777260](../../../../../../../reference/runtime/host-main.cjs#L777253-L777260) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576898-576905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576898-L576905) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777253

Calls written directly in this body: `createImageResult`, `createStringResult`, `describeOutcome`, `redact`.

SHA-256 of the source span: `8b9a0ce63643c74a58eadc80131e4039e679de427bf26d58ce1b3066583cdf37`.

### evaluation:576898

Calls written directly in this body: `createImageResult`, `createStringResult`, `describeOutcome`, `redact`.

SHA-256 of the source span: `8b9a0ce63643c74a58eadc80131e4039e679de427bf26d58ce1b3066583cdf37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
