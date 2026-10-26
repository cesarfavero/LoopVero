# `probeDirectoryWritableViaExecDaemon`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/box-file-transfer.ts` · [Module README](../../../../../modules/host/box/box-file-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:591097-591115](../../../../../../reference/runtime/host-main.cjs#L591097-L591115) | `FunctionDeclaration` | yes | `ctx, accessor, directory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:591097-591115](../../../../../../reference/runtime/host-main.cjs#L591097-L591115) | 2 | 0 | 2 | 0 | 3 | 2 |

### host:591097

Calls written directly in this body: `.toString`, `import_node_path97.posix.join`, `new Uint8Array`, `runBoxShell`, `shellSingleQuote`, `uploadFileViaExecDaemon`.

Assignment or increment targets: `writeError`.

Explicit throw targets: `cleanupError`, `writeError`.

SHA-256 of the source span: `36f7e320ce9d2da371ff3c1a11d448b10b77b6046b04d7361cb027755adddefd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
