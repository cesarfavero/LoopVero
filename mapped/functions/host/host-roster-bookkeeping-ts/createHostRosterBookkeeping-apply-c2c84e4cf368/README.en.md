# `createHostRosterBookkeeping/apply`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-roster-bookkeeping.ts` · [Module README](../../../../modules/host/host-roster-bookkeeping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786309-786333](../../../../../reference/runtime/host-main.cjs#L786309-L786333) | `FunctionExpression` | no | `activeAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786309-786333](../../../../../reference/runtime/host-main.cjs#L786309-L786333) | 5 | 1 | 0 | 0 | 0 | 0 |

### host:786309

Calls written directly in this body: `.catch`, `.filter`, `.getOrCreate`, `.liveRunningAgentIds`, `.scheduleWarm`, `.setBusy`, `.setFallbackAgentId`, `.setRunningAgentIds`, `boxStore.scheduleStoreDbSnapshot`, `extensions.api`, `new Set`, `reminders.enroll`, `runningAgentIds.has`.

Assignment or increment targets: `isBusy`, `latestActiveAgentId`, `runningAgentIds`.

SHA-256 of the source span: `23181df2075194c694cf68f819d35607ad889d608c0a30b64f72ae5098af547d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
