# `buildComputerParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777047-777074](../../../../../../../reference/runtime/host-main.cjs#L777047-L777074) | `FunctionDeclaration` | no | `autoReview, actionAliases = () => false` |
| [evaluation:576692-576719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576692-L576719) | `FunctionDeclaration` | no | `autoReview, actionAliases = () => false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777047-777074](../../../../../../../reference/runtime/host-main.cjs#L777047-L777074) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576692-576719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576692-L576719) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777047

Calls written directly in this body: `.describe`, `.superRefine`, `buildComputerActionCoreSchema`, `buildFollowUpParameter`, `external_exports2.object`, `external_exports2.preprocess`.

SHA-256 of the source span: `4a3acb7a55fbfa05a49d87b15ccf75a0c34732007e523557c82bb8f616138c4b`.

### evaluation:576692

Calls written directly in this body: `.describe`, `.superRefine`, `buildComputerActionCoreSchema`, `buildFollowUpParameter`, `external_exports3.object`, `external_exports3.preprocess`.

SHA-256 of the source span: `abee2db3663b17fa26063118fe7e16d3eaa68460604601e2943af5eb10978bf0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
