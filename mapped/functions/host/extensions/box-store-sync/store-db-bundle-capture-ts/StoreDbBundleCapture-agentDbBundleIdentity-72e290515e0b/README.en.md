# `StoreDbBundleCapture.agentDbBundleIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480072-480092](../../../../../../../reference/runtime/host-main.cjs#L480072-L480092) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480072-480092](../../../../../../../reference/runtime/host-main.cjs#L480072-L480092) | 5 | 1 | 2 | 4 | 0 | 1 |

### host:480072

Calls written directly in this body: `args.manifest.has`, `args.targets.map`, `findSystemErrno`, `identities.join`, `identities.push`, `new Set`, `targetPaths.has`, `this.agentHasPendingDbRecovery`.

Assignment or increment targets: `fileStat`.

SHA-256 of the source span: `12f008d8b241bcaee24f300138120feb3728a168b45d184f2128c5fc2554d2a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
