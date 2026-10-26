# `Walker.globalCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750186-750198](../../../../../../../../reference/runtime/host-main.cjs#L750186-L750198) | `method` | no | `object4, name18, args, scope` |
| [evaluation:523037-523049](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523037-L523049) | `method` | no | `object4, name18, args, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750186-750198](../../../../../../../../reference/runtime/host-main.cjs#L750186-L750198) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523037-523049](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523037-L523049) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:750186

Calls written directly in this body: `allowed.has`, `elementOf`, `fail2`, `isDataLike`, `own2`, `this.dataOnly`, `this.expr`, `this.plainArgs`.

SHA-256 of the source span: `e058ff0019ebb2a0e867793df239634526d200e9ad8be9ecf9c059425e7549de`.

### evaluation:523037

Calls written directly in this body: `allowed.has`, `elementOf`, `fail`, `isDataLike`, `own2`, `this.dataOnly`, `this.expr`, `this.plainArgs`.

SHA-256 of the source span: `1c410831875ec9f13b8f7a267be766183b77020e2bed146e970938fec9b740c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
