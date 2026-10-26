# `named`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758751-758753](../../../../../../reference/runtime/host-main.cjs#L758751-L758753) | `FunctionDeclaration` | no | `{ accessories }` |
| [evaluation:548911-548913](../../../../../../reference/runtime/sand-eval-runner.cjs#L548911-L548913) | `FunctionDeclaration` | no | `{ accessories }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758751-758753](../../../../../../reference/runtime/host-main.cjs#L758751-L758753) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548911-548913](../../../../../../reference/runtime/sand-eval-runner.cjs#L548911-L548913) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758751

Calls written directly in this body: `accessories.map`, `listOf3`.

SHA-256 of the source span: `a583a93b46106f4330d47833ce764b90b1e18f8f06faae9615490938045c5734`.

### evaluation:548911

Calls written directly in this body: `accessories.map`, `listOf3`.

SHA-256 of the source span: `a583a93b46106f4330d47833ce764b90b1e18f8f06faae9615490938045c5734`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
