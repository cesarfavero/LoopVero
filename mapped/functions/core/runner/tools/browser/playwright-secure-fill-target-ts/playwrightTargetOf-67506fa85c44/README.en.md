# `playwrightTargetOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-secure-fill-target.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-secure-fill-target-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724265-724287](../../../../../../../../reference/runtime/host-main.cjs#L724265-L724287) | `FunctionDeclaration` | no | `target, snapshotRefs` |
| [evaluation:560159-560181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560159-L560181) | `FunctionDeclaration` | no | `target, snapshotRefs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724265-724287](../../../../../../../../reference/runtime/host-main.cjs#L724265-L724287) | 7 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:560159-560181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560159-L560181) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:724265

Calls written directly in this body: `PLAYWRIGHT_REF_TARGET_PATTERN.exec`, `snapshotRef.frameName.trim`, `snapshotRef.name.trim`, `snapshotRef.role.trim`, `snapshotRefs.get`, `target.trim`.

SHA-256 of the source span: `401a0528ad8d87a9267d7bdf9ffe1b1c16ec4ac9fdba3213c26715e59e9eb558`.

### evaluation:560159

Calls written directly in this body: `PLAYWRIGHT_REF_TARGET_PATTERN.exec`, `snapshotRef.frameName.trim`, `snapshotRef.name.trim`, `snapshotRef.role.trim`, `snapshotRefs.get`, `target.trim`.

SHA-256 of the source span: `401a0528ad8d87a9267d7bdf9ffe1b1c16ec4ac9fdba3213c26715e59e9eb558`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
