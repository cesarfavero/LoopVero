# `BoxStoreManifestStore.handleExhaustedManifestConflict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477367-477402](../../../../../../../reference/runtime/host-main.cjs#L477367-L477402) | `method` | yes | `storeId, entries, fullyHydrated, conflict, attempts2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477367-477402](../../../../../../../reference/runtime/host-main.cjs#L477367-L477402) | 3 | 0 | 1 | 1 | 0 | 0 |

### host:477367

Calls written directly in this body: `Object.entries`, `Object.keys`, `attempted.every`, `attempted.some`, `new Map`, `this.log`, `this.readCanonicalManifestForDiagnostics`, `this.reportManifestWriteConflict`.

SHA-256 of the source span: `d1b1efb41ca838750527dd9acbcbe3be6f93303c12f079aaea5515a432a0797a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
