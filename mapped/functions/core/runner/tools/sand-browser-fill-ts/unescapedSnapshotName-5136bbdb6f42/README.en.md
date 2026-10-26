# `unescapedSnapshotName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727040-727050](../../../../../../../reference/runtime/host-main.cjs#L727040-L727050) | `FunctionDeclaration` | no | `line` |
| [evaluation:561651-561661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561651-L561661) | `FunctionDeclaration` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727040-727050](../../../../../../../reference/runtime/host-main.cjs#L727040-L727050) | 3 | 0 | 0 | 3 | 1 | 1 |
| [evaluation:561651-561661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561651-L561661) | 3 | 0 | 0 | 3 | 1 | 1 |

### host:727040

Calls written directly in this body: `JSON.parse`, `SNAPSHOT_LINE_NAME_PATTERN.exec`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0a2e74bd86632953af0460b7a982205829a0de153e148dc73f395b4791d1c4f4`.

### evaluation:561651

Calls written directly in this body: `JSON.parse`, `SNAPSHOT_LINE_NAME_PATTERN.exec`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `d768b033a3d828938e670a47a48d6435257cc705dfdc0e9099bef55b9743807a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
