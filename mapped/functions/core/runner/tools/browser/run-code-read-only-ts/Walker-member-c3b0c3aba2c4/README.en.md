# `Walker.member`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750028-750045](../../../../../../../../reference/runtime/host-main.cjs#L750028-L750045) | `method` | no | `node2, scope` |
| [evaluation:522879-522896](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522879-L522896) | `method` | no | `node2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750028-750045](../../../../../../../../reference/runtime/host-main.cjs#L750028-L750045) | 7 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:522879-522896](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522879-L522896) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:750028

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `elementOf`, `fail2`, `isDataLike`, `isObjectKind`, `own2`, `staticName`, `this.dataOnly`, `this.deniedReason`, `this.expr`, `this.isNumeric`.

SHA-256 of the source span: `67fcc0d89cd0df28fab7233581940beac38457f788c9ebb958ba5c643118d856`.

### evaluation:522879

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `elementOf`, `fail`, `isDataLike`, `isObjectKind`, `own2`, `staticName`, `this.dataOnly`, `this.deniedReason`, `this.expr`, `this.isNumeric`.

SHA-256 of the source span: `f6af9bd25c68a80e53c5000a718f48e8e3d83f7300ba52d4c211226cf94231cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
