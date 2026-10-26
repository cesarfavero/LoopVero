# `isVaultKindOrOldArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726715-726717](../../../../../../../reference/runtime/host-main.cjs#L726715-L726717) | `FunctionDeclaration` | no | `args, deps` |
| [evaluation:561330-561332](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561330-L561332) | `FunctionDeclaration` | no | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726715-726717](../../../../../../../reference/runtime/host-main.cjs#L726715-L726717) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561330-561332](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561330-L561332) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726715

Calls written directly in this body: `offersVaultKinds`.

SHA-256 of the source span: `c977e24cbb2d606b12a3fa63a020dbfe0ea5476bc1ff4916f0bab5fed8f96bf7`.

### evaluation:561330

Calls written directly in this body: `offersVaultKinds`.

SHA-256 of the source span: `c977e24cbb2d606b12a3fa63a020dbfe0ea5476bc1ff4916f0bab5fed8f96bf7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
