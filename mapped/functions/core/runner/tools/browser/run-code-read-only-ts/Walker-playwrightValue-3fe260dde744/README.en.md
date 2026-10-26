# `Walker.playwrightValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750124-750129](../../../../../../../../reference/runtime/host-main.cjs#L750124-L750129) | `method` | no | `node2, scope` |
| [evaluation:522975-522980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522975-L522980) | `method` | no | `node2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750124-750129](../../../../../../../../reference/runtime/host-main.cjs#L750124-L750129) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:522975-522980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522975-L522980) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:750124

Calls written directly in this body: `fail2`, `isDataLike`, `this.expr`.

SHA-256 of the source span: `8a8d8707ff13278bc552055b763b45b80277d2f793818fedfa10c784cc97ec3f`.

### evaluation:522975

Calls written directly in this body: `fail`, `isDataLike`, `this.expr`.

SHA-256 of the source span: `0182524a1e727b064212952df467fad5671872acd5e3ec2c12dcfe3449662f4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
