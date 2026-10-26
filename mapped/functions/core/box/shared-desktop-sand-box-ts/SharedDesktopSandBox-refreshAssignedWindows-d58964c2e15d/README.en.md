# `SharedDesktopSandBox.refreshAssignedWindows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555157-555161](../../../../../../reference/runtime/host-main.cjs#L555157-L555161) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555157-555161](../../../../../../reference/runtime/host-main.cjs#L555157-L555161) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:555157

Calls written directly in this body: `this.adoptUnseatedAssignments`, `this.readPersistedAssignments`.

SHA-256 of the source span: `ce463cb2ec140acac838576152ccc6c86e98f8f3c4a19b0fe426e16edea5e6e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
