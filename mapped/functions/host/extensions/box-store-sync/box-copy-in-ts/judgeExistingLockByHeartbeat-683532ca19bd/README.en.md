# `judgeExistingLockByHeartbeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483760-483792](../../../../../../../reference/runtime/host-main.cjs#L483760-L483792) | `FunctionDeclaration` | yes | `lockPath, fs33 = {   readFile: (path33, encoding) => (0, import_promises24.readFile)(path33, encoding),   stat: (path33) => (0, import_promises24.stat)(path33) }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483760-483792](../../../../../../../reference/runtime/host-main.cjs#L483760-L483792) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:483760

Calls written directly in this body: `BOOT_COPY_IN_HEARTBEAT_POLL.runWithRetry`.

SHA-256 of the source span: `84db5abc67573246fd506a381efe759122d46f74cd68c2212a1d4358f309abf2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
