# `createInProcessSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766002-766051](../../../../../../reference/runtime/host-main.cjs#L766002-L766051) | `FunctionDeclaration` | no | `options2` |
| [evaluation:559366-559415](../../../../../../reference/runtime/sand-eval-runner.cjs#L559366-L559415) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766002-766051](../../../../../../reference/runtime/host-main.cjs#L766002-L766051) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559366-559415](../../../../../../reference/runtime/sand-eval-runner.cjs#L559366-L559415) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766002

Calls written directly in this body: `new WeakMap`.

SHA-256 of the source span: `93c3525a61310e89daedb19bf806ee3a3e88d47a1a58092fdfa1368536a3adc7`.

### evaluation:559366

Calls written directly in this body: `new WeakMap`.

SHA-256 of the source span: `ce7fec4b6553022df2b68f9d2f2074c7cd2abd08f8bb414a41a2cb1987909b09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
