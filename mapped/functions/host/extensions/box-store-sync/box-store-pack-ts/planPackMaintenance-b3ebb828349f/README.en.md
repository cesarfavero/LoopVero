# `planPackMaintenance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478622-478697](../../../../../../../reference/runtime/host-main.cjs#L478622-L478697) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478622-478697](../../../../../../../reference/runtime/host-main.cjs#L478622-L478697) | 7 | 7 | 0 | 1 | 0 | 0 |

### host:478622

Calls written directly in this body: `Math.max`, `current2.push`, `groups.map`, `groups.pop`, `groups.push`, `isLive3`, `keptPacks.push`, `lastGroup.reduce`, `new Set`, `newbies.map`, `newbies.push`, `newbies.sort`, `pack.members.every`, `packedShas.add`, `packedShas.has`, `retiredPackIds.push`, `survivorShas.has`, `survivors.map`, `survivors.push`, `survivors.sort`.

Assignment or increment targets: `current2`, `currentBytes`, `deferredMembers`, `untouchedMax`.

SHA-256 of the source span: `bf13115f9cb9b0e2d99369c3ba37c9dfa13a428c94e9fd793385e4be161e89bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
