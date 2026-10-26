# `runBoxCopyInWithRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483232-483268](../../../../../../../reference/runtime/host-main.cjs#L483232-L483268) | `FunctionDeclaration` | yes | `deps, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483232-483268](../../../../../../../reference/runtime/host-main.cjs#L483232-L483268) | 1 | 1 | 3 | 1 | 0 | 0 |

### host:483232

Calls written directly in this body: `deps.log`, `isTransientCopyInFailure`, `legacySync.download.bind`, `options2.retry.schedule`, `runBoxCopyIn`, `wait2.dispose`.

Assignment or increment targets: `attempt`, `result`.

SHA-256 of the source span: `ba5e243ed5730fe288397e9fbf714cfe7a3886f922687f4278b7d260898ad1f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
