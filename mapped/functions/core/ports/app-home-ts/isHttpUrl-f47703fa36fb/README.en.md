# `isHttpUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/app-home.ts` · [Module README](../../../../../modules/core/ports/app-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770963-770971](../../../../../../reference/runtime/host-main.cjs#L770963-L770971) | `FunctionDeclaration` | no | `value` |
| [evaluation:570069-570077](../../../../../../reference/runtime/sand-eval-runner.cjs#L570069-L570077) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770963-770971](../../../../../../reference/runtime/host-main.cjs#L770963-L770971) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:570069-570077](../../../../../../reference/runtime/sand-eval-runner.cjs#L570069-L570077) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:770963

Calls written directly in this body: `new URL`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `baabf6c83f919cc21d9b415a5034c9782ddf67295c7636010f423008053782e1`.

### evaluation:570069

Calls written directly in this body: `new URL`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `4e1c9b7eba5ad12e156f92667a4f52f1159c612404d198cc55de97ed509d61c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
