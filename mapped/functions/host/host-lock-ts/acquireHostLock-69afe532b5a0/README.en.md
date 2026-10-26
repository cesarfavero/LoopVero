# `acquireHostLock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-lock.ts` · [Module README](../../../../modules/host/host-lock-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494273-494323](../../../../../reference/runtime/host-main.cjs#L494273-L494323) | `FunctionDeclaration` | yes | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494273-494323](../../../../../reference/runtime/host-main.cjs#L494273-L494323) | 6 | 1 | 2 | 2 | 0 | 0 |

### host:494273

Calls written directly in this body: `String`, `getHostLockPath`, `isProcessAlive`, `isSandHostProcessCheck`, `makeHandle`, `readLockPid`, `removeLock`, `terminateProcess`, `tryCreateLock`, `waitForExit`.

Assignment or increment targets: `attempt`, `outcome`, `previousPid`.

SHA-256 of the source span: `54eefa7175acc8aaffe45bb7e50e345d743e6823d0fe75ef342ca8ac9fadd9c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
