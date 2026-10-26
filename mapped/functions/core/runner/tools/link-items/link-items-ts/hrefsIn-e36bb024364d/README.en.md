# `hrefsIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741125-741132](../../../../../../../../reference/runtime/host-main.cjs#L741125-L741132) | `FunctionDeclaration` | no | `text3` |
| [evaluation:482072-482079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482072-L482079) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741125-741132](../../../../../../../../reference/runtime/host-main.cjs#L741125-L741132) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482072-482079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482072-L482079) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:741125

Calls written directly in this body: `hrefOf`, `hrefs.add`, `new Set`, `text3.matchAll`, `trimUrlToken`.

SHA-256 of the source span: `8c3bc773ba8316a8bdb3030ebb300d55611abebcd1c3aefcec9a4cd75842fd85`.

### evaluation:482072

Calls written directly in this body: `hrefOf`, `hrefs.add`, `new Set`, `text3.matchAll`, `trimUrlToken`.

SHA-256 of the source span: `8c3bc773ba8316a8bdb3030ebb300d55611abebcd1c3aefcec9a4cd75842fd85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
