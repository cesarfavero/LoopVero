# `SharedDesktopSandBox.commitSeatChanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554678-554693](../../../../../../reference/runtime/host-main.cjs#L554678-L554693) | `method` | no | `ctx, changes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554678-554693](../../../../../../reference/runtime/host-main.cjs#L554678-L554693) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:554678

Calls written directly in this body: `Promise.resolve`, `commit2.then`, `this.persistChain.then`.

Assignment or increment targets: `this.persistChain`.

SHA-256 of the source span: `7c06c56d77c544d2e658ecf7187b721ac0904c01b0313de4b9160bf68c16e06a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
