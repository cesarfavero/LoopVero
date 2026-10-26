# `boxLoadMcpServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546704-546709](../../../../../../reference/runtime/host-main.cjs#L546704-L546709) | `FunctionDeclaration` | yes | `box, ctx, configJson, options2` |
| [evaluation:475799-475804](../../../../../../reference/runtime/sand-eval-runner.cjs#L475799-L475804) | `FunctionDeclaration` | yes | `box, ctx, configJson, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546704-546709](../../../../../../reference/runtime/host-main.cjs#L546704-L546709) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:475799-475804](../../../../../../reference/runtime/sand-eval-runner.cjs#L475799-L475804) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:546704

Calls written directly in this body: `box.loadMcpServers`, `new BoxMcpUnsupportedError`.

Explicit throw targets: `BoxMcpUnsupportedError`.

SHA-256 of the source span: `db180c0f231c0eae936fc82d1e09662d61e04a628d3443364ff83efb0d17300d`.

### evaluation:475799

Calls written directly in this body: `box.loadMcpServers`, `new BoxMcpUnsupportedError`.

Explicit throw targets: `BoxMcpUnsupportedError`.

SHA-256 of the source span: `db180c0f231c0eae936fc82d1e09662d61e04a628d3443364ff83efb0d17300d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
