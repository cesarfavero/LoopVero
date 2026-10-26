# `secureValueFillsAnySite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/secure-values.ts` · [Module README](../../../../../modules/core/ports/secure-values-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724069-724071](../../../../../../reference/runtime/host-main.cjs#L724069-L724071) | `FunctionDeclaration` | no | `value` |
| [evaluation:479358-479360](../../../../../../reference/runtime/sand-eval-runner.cjs#L479358-L479360) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724069-724071](../../../../../../reference/runtime/host-main.cjs#L724069-L724071) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479358-479360](../../../../../../reference/runtime/sand-eval-runner.cjs#L479358-L479360) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724069

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2f80980c1bcbb92a33657dbc8724d514133412e6e4b184846a80c82aa23a73aa`.

### evaluation:479358

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2f80980c1bcbb92a33657dbc8724d514133412e6e4b184846a80c82aa23a73aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
