# `valueLineOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767629-767634](../../../../../../../../reference/runtime/host-main.cjs#L767629-L767634) | `FunctionDeclaration` | no | `item, index` |
| [evaluation:563146-563151](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563146-L563151) | `FunctionDeclaration` | no | `item, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767629-767634](../../../../../../../../reference/runtime/host-main.cjs#L767629-L767634) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:563146-563151](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563146-L563151) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:767629

Calls written directly in this body: `FIELD_ROLES.has`, `HIDDEN_INPUT_CODE_SLOT_ROLES.has`.

SHA-256 of the source span: `dcee35f19bd27fd60573946a0e181dffbd93b7156cf314983085879914291183`.

### evaluation:563146

Calls written directly in this body: `FIELD_ROLES.has`, `HIDDEN_INPUT_CODE_SLOT_ROLES.has`.

SHA-256 of the source span: `dcee35f19bd27fd60573946a0e181dffbd93b7156cf314983085879914291183`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
