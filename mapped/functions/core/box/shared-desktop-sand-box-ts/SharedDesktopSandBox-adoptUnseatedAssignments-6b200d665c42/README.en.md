# `SharedDesktopSandBox.adoptUnseatedAssignments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554608-554619](../../../../../../reference/runtime/host-main.cjs#L554608-L554619) | `method` | no | `loaded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554608-554619](../../../../../../reference/runtime/host-main.cjs#L554608-L554619) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:554608

Calls written directly in this body: `loaded.tokens.get`, `this.agentWindowTokens.has`, `this.agentWindowTokens.set`, `this.agentWindows.has`, `this.agentWindows.set`, `this.clearWindowForAdoption`, `this.followUnstartedToken`.

SHA-256 of the source span: `aa28201aca8a7f4fbb6d8d2c5c43d055ba6ce7aa5be621851413cb640249b19a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
