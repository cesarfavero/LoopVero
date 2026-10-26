# `createDiskPressureReminderEpisodes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/disk-pressure.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679801-679959](../../../../../../../reference/runtime/host-main.cjs#L679801-L679959) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679801-679959](../../../../../../../reference/runtime/host-main.cjs#L679801-L679959) | 10 | 2 | 0 | 1 | 1 | 1 |

### host:679801

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `enqueue`, `handledAgentIds.add`, `isUnknownRecord2`, `new Map`, `new SandDiskPressureLedgerError`, `new Set`, `options2.onLedgerError`, `parseAgentId`, `readLedgerText`.

Assignment or increment targets: `activeEpisodeId`, `restoredEpisodeAwaitingPressure`.

Explicit throw targets: `SandDiskPressureLedgerError`.

SHA-256 of the source span: `a2788a77cff246dd961003832c5324a3691cefbc9679c1753953439aa1604fb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
