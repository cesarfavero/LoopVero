# `LoopbackSandBox.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679171-679201](../../../../../../reference/runtime/host-main.cjs#L679171-L679201) | `method` | no | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679171-679201](../../../../../../reference/runtime/host-main.cjs#L679171-L679201) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:679171

Calls written directly in this body: `options2.cursorDataDir.trim`, `this.setTelemetry`.

Assignment or increment targets: `this.applyEnvironmentAt`, `this.authToken`, `this.createRemoteAccessor`, `this.host`, `this.pingBox`, `this.pingBoxClassified`, `this.pollIntervalMs`, `this.protectedBoxPaths`, `this.readyTimeoutMs`, `this.runCompareAndSetFile`, `this.runParkWindow`, `this.runReadDesktopActivity`, `this.runStartWindow`, `this.runStopWindow`, `this.runWindowOwnerCheck`, `this.shellKeepAwakeCapMs`, `this.terminalsFolder`, `this.uploadFileViaExecDaemon`, `this.watchdogIntervalMs`, `this.windowTokenDir`.

SHA-256 of the source span: `3a274a55c67f83c560722e26cf75f61a0adc821f7bae77cfa0c20810ca5eb128`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
