# `SharedDesktopSandBox.reattachPersistedForkSeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555022-555038](../../../../../../reference/runtime/host-main.cjs#L555022-L555038) | `method` | yes | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555022-555038](../../../../../../reference/runtime/host-main.cjs#L555022-L555038) | 2 | 0 | 3 | 1 | 0 | 1 |

### host:555022

Calls written directly in this body: `errorLogTag`, `isPrimaryWindowIndex`, `reportHostDiagnostic`, `this.adoptPersistedAssignment`, `this.agentWindows.get`, `this.agentWindows.has`, `this.ensureAgentReady`, `this.ensureAssignmentsLoaded`.

SHA-256 of the source span: `46a94b1933d45aeef584fa0e05c81837dedb9d9c4b1320e038d2442a7414ca19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
