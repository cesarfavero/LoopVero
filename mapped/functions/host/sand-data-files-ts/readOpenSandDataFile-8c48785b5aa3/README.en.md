# `readOpenSandDataFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453762-453769](../../../../../reference/runtime/host-main.cjs#L453762-L453769) | `FunctionDeclaration` | no | `fd, path33, options2` |
| [evaluation:627504-627511](../../../../../reference/runtime/sand-eval-runner.cjs#L627504-L627511) | `FunctionDeclaration` | no | `fd, path33, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453762-453769](../../../../../reference/runtime/host-main.cjs#L453762-L453769) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627504-627511](../../../../../reference/runtime/sand-eval-runner.cjs#L627504-L627511) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:453762

Calls written directly in this body: `readCappedSync`.

SHA-256 of the source span: `0fadd862cbd0d7942f06cb5970aba792edd0fa8d77e493cd473f34e9bba8a14c`.

### evaluation:627504

Calls written directly in this body: `readCappedSync`.

SHA-256 of the source span: `08f610df92f2ea9f712bcc938e1214c0eed76a4c1879e064e264a339e0e11079`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
