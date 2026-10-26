# `Walker.isGlobalFunction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750077-750079](../../../../../../../../reference/runtime/host-main.cjs#L750077-L750079) | `method` | no | `arg, scope` |
| [evaluation:522928-522930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522928-L522930) | `method` | no | `arg, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750077-750079](../../../../../../../../reference/runtime/host-main.cjs#L750077-L750079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522928-522930](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522928-L522930) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750077

Calls written directly in this body: `GLOBAL_FUNCTIONS.has`, `scope.lookup`.

SHA-256 of the source span: `8e40a28c0ea6fa226d55b51efdfc5c5733dee66373fe704e61c0a272dfe9c3d3`.

### evaluation:522928

Calls written directly in this body: `GLOBAL_FUNCTIONS.has`, `scope.lookup`.

SHA-256 of the source span: `8e40a28c0ea6fa226d55b51efdfc5c5733dee66373fe704e61c0a272dfe9c3d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
