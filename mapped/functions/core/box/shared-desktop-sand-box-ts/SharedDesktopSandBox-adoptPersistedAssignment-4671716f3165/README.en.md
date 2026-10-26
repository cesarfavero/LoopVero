# `SharedDesktopSandBox.adoptPersistedAssignment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554649-554673](../../../../../../reference/runtime/host-main.cjs#L554649-L554673) | `method` | yes | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554649-554673](../../../../../../reference/runtime/host-main.cjs#L554649-L554673) | 5 | 0 | 1 | 5 | 0 | 0 |

### host:554649

Calls written directly in this body: `loaded.assignments.get`, `loaded.tokens.get`, `this.agentWindowTokens.delete`, `this.agentWindowTokens.get`, `this.agentWindowTokens.set`, `this.agentWindows.get`, `this.agentWindows.set`, `this.clearWindowForAdoption`, `this.downForks.delete`, `this.establishedForks.delete`, `this.followUnstartedToken`, `this.readPersistedAssignments`, `this.unstartedSeats.delete`.

SHA-256 of the source span: `14b801019528f4c65de059f09f18f7b3876114a18aec5491de06117694064b85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
