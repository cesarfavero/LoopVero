# `buildUserFormVaultKeysSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726664-726672](../../../../../../../reference/runtime/host-main.cjs#L726664-L726672) | `FunctionDeclaration` | no | `catalog` |
| [evaluation:561279-561287](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561279-L561287) | `FunctionDeclaration` | no | `catalog` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726664-726672](../../../../../../../reference/runtime/host-main.cjs#L726664-L726672) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561279-561287](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561279-L561287) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:726664

Calls written directly in this body: `catalog.map`, `lines2.join`.

SHA-256 of the source span: `d49366f4b74c253d3e30a60cd234cccf24bfff95c7ae3937251d8963f84bd6bc`.

### evaluation:561279

Calls written directly in this body: `catalog.map`, `lines2.join`.

SHA-256 of the source span: `d49366f4b74c253d3e30a60cd234cccf24bfff95c7ae3937251d8963f84bd6bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
