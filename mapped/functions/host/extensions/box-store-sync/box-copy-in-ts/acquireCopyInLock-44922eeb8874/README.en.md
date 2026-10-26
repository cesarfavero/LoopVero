# `acquireCopyInLock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483652-483710](../../../../../../../reference/runtime/host-main.cjs#L483652-L483710) | `FunctionDeclaration` | yes | `lockPath, log5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483652-483710](../../../../../../../reference/runtime/host-main.cjs#L483652-L483710) | 4 | 0 | 6 | 5 | 0 | 2 |

### host:483652

Calls written directly in this body: `.catch`, `Math.round`, `entryOf`, `fs33.unlink`, `judgeExistingLockByHeartbeat`, `log5`, `noFollowRootFor`, `openParentNoFollow2`, `parent.handle.close`, `reportCopyInLockError`, `storeLockFsThrough`, `tryAcquireStoreLock`, `unlinkPlantedLink`.

Assignment or increment targets: `acquired`, `held`.

SHA-256 of the source span: `20ed62d0888f59f7c6444cec951282cc76138fba0251c2a3ff23a0bd4e1b4d84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
