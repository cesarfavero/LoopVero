# `sandClientVersionOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/sand-client-metadata.ts` · [Module README](../../../../../modules/shared/node/sand-client-metadata-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175817-175827](../../../../../../reference/runtime/host-main.cjs#L175817-L175827) | `FunctionDeclaration` | no | `clientAppVersion, boxNamespace` |
| [evaluation:511763-511773](../../../../../../reference/runtime/sand-eval-runner.cjs#L511763-L511773) | `FunctionDeclaration` | no | `clientAppVersion, boxNamespace` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175817-175827](../../../../../../reference/runtime/host-main.cjs#L175817-L175827) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:511763-511773](../../../../../../reference/runtime/sand-eval-runner.cjs#L511763-L511773) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:175817

Calls written directly in this body: `sandClientBaseVersionOf`.

SHA-256 of the source span: `44b1d5808c6e0537516e1eb42174b5f60eac462281b725ded206619b160fa17c`.

### evaluation:511763

Calls written directly in this body: `sandClientBaseVersionOf`.

SHA-256 of the source span: `44b1d5808c6e0537516e1eb42174b5f60eac462281b725ded206619b160fa17c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
