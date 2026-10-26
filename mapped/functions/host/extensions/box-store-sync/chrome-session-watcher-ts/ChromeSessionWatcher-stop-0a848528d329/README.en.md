# `ChromeSessionWatcher.stop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/chrome-session-watcher.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/chrome-session-watcher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481878-481886](../../../../../../../reference/runtime/host-main.cjs#L481878-L481886) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481878-481886](../../../../../../../reference/runtime/host-main.cjs#L481878-L481886) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:481878

Calls written directly in this body: `this.trigger.dispose`, `this.watcher.close`.

Assignment or increment targets: `this.stopped`, `this.watcher`.

SHA-256 of the source span: `bcf18320187ebb01c7b3700d3774ec61183492356e8d560f80040b297c118287`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
