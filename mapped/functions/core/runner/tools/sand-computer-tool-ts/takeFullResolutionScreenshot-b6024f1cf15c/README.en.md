# `takeFullResolutionScreenshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777340-777345](../../../../../../../reference/runtime/host-main.cjs#L777340-L777345) | `FunctionDeclaration` | no | `result` |
| [evaluation:576985-576990](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576985-L576990) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777340-777345](../../../../../../../reference/runtime/host-main.cjs#L777340-L777345) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576985-576990](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576985-L576990) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777340

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `result.result.value.fullResolutionScreenshot`.

SHA-256 of the source span: `5014223e897d0e11dbc808b1df18385e49752de1c42f5f0ffb45ab4b6d263fb4`.

### evaluation:576985

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `result.result.value.fullResolutionScreenshot`.

SHA-256 of the source span: `5014223e897d0e11dbc808b1df18385e49752de1c42f5f0ffb45ab4b6d263fb4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
