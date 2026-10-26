# `readMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-secret-store.ts` · [Module README](../../../../modules/host/host-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454102-454131](../../../../../reference/runtime/host-main.cjs#L454102-L454131) | `FunctionDeclaration` | yes | `path33, noFollowRoot, onRefused, io2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454102-454131](../../../../../reference/runtime/host-main.cjs#L454102-L454131) | 5 | 0 | 7 | 4 | 0 | 2 |

### host:454102

Calls written directly in this body: `JSON.parse`, `file2.chmod`, `file2.close`, `file2.readFile`, `file2.stat`, `hostSecretsSchema.safeParse`, `import_node_fs9.promises.readlink`, `io2.open`, `new UntrustedSandDataFileError`, `onRefused`, `reportFallback`, `reportFallbackUnlessAbsent`, `untrustedFileReason`.

Assignment or increment targets: `file2`.

SHA-256 of the source span: `8336afbe5f4863095d01f7745882c7c74deb51b6e296880e0e101c0bee60e415`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
