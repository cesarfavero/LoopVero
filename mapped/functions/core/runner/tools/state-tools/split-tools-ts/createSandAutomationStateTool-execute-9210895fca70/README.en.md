# `createSandAutomationStateTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771939-771953](../../../../../../../../reference/runtime/host-main.cjs#L771939-L771953) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:571172-571186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571172-L571186) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771939-771953](../../../../../../../../reference/runtime/host-main.cjs#L771939-L771953) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:571172-571186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571172-L571186) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:771939

Calls written directly in this body: `d.canCreateAutomation`, `executeStateUpdate`, `inOwnName`, `readAutomation`, `renderOutcome`.

SHA-256 of the source span: `031bbc0596548ffd6434492b2b807179fa8e2118b1d53dd28a021d5ac064a3a5`.

### evaluation:571172

Calls written directly in this body: `d.canCreateAutomation`, `executeStateUpdate`, `inOwnName`, `readAutomation`, `renderOutcome`.

SHA-256 of the source span: `031bbc0596548ffd6434492b2b807179fa8e2118b1d53dd28a021d5ac064a3a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
