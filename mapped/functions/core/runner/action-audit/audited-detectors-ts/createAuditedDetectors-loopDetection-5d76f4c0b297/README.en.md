# `createAuditedDetectors/loopDetection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/audited-detectors.ts` · [Module README](../../../../../../modules/core/runner/action-audit/audited-detectors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484701-484711](../../../../../../../reference/runtime/sand-eval-runner.cjs#L484701-L484711) | `ArrowFunctionExpression` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484701-484711](../../../../../../../reference/runtime/sand-eval-runner.cjs#L484701-L484711) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:484701 uses an implicit arrow-function return.

### evaluation:484701

Calls written directly in this body: `createRunnerLoopDetection`.

SHA-256 of the source span: `78735dee64bcd6215bc5429871f703db227ba4a40ac5c54ddd8d9f2f29831163`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
