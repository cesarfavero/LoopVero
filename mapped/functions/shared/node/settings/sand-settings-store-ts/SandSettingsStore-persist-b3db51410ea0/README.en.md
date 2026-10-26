# `_SandSettingsStore.persist`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687889-687902](../../../../../../../reference/runtime/host-main.cjs#L687889-L687902) | `method` | no | `settings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687889-687902](../../../../../../../reference/runtime/host-main.cjs#L687889-L687902) | 2 | 0 | 0 | 1 | 2 | 1 |

### host:687889

Calls written directly in this body: `JSON.stringify`, `this.canOverwrite`, `this.io.writeText`, `this.owner.onWriteFailed`, `this.readText`, `this.refusal`, `withSortedKeys`.

Explicit throw targets: `error64`, `this.refusal`.

SHA-256 of the source span: `56cd6dd796273c666bd9d91faa455e36ad924bda622154594808ceda749a7393`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
