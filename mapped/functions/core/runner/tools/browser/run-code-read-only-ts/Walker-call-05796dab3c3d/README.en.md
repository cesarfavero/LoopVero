# `Walker.call`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750141-750185](../../../../../../../../reference/runtime/host-main.cjs#L750141-L750185) | `method` | no | `node2, scope` |
| [evaluation:522992-523036](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522992-L523036) | `method` | no | `node2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750141-750185](../../../../../../../../reference/runtime/host-main.cjs#L750141-L750185) | 17 | 0 | 0 | 12 | 0 | 0 |
| [evaluation:522992-523036](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522992-L523036) | 17 | 0 | 0 | 12 | 0 | 0 |

### host:750141

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `GLOBAL_FUNCTIONS.has`, `PAGE_EVENT_WAITERS.has`, `elementOf`, `fail2`, `isDataLike`, `isObjectKind`, `own2`, `scope.lookup`, `staticName`, `this.dataCall`, `this.deniedReason`, `this.expr`, `this.globalCall`, `this.helper`, `this.navigationArgs`, `this.plainArgs`, `this.playwrightArgs`, `this.trackedArrayCall`.

SHA-256 of the source span: `fcd2dce12aff4a1b80c65cebdc1dd58fa9d4a978a674880dd7a3cc1e22f328c5`.

### evaluation:522992

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `GLOBAL_FUNCTIONS.has`, `PAGE_EVENT_WAITERS.has`, `elementOf`, `fail`, `isDataLike`, `isObjectKind`, `own2`, `scope.lookup`, `staticName`, `this.dataCall`, `this.deniedReason`, `this.expr`, `this.globalCall`, `this.helper`, `this.navigationArgs`, `this.plainArgs`, `this.playwrightArgs`, `this.trackedArrayCall`.

SHA-256 of the source span: `6b5c2e4d1f5d27044665a9f50e8f580ae29e00a8d0a7dcd1f3c8070cda46c5c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
