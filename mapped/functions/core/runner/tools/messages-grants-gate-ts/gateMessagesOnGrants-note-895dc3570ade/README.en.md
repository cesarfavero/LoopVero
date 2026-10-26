# `gateMessagesOnGrants/note`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/messages-grants-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777845-777851](../../../../../../../reference/runtime/host-main.cjs#L777845-L777851) | `ArrowFunctionExpression` | no | `ctx, row` |
| [evaluation:577580-577586](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577580-L577586) | `ArrowFunctionExpression` | no | `ctx, row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777845-777851](../../../../../../../reference/runtime/host-main.cjs#L777845-L777851) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:577580-577586](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577580-L577586) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:777845

Calls written directly in this body: `errorLogTag`, `logger123.warn`, `report`.

SHA-256 of the source span: `9824c55f976b63c923f2a7d5402730164e6b2873f611b66d8a9b2cac58ba0fb8`.

### evaluation:577580

Calls written directly in this body: `errorLogTag`, `logger96.warn`, `report`.

SHA-256 of the source span: `33531094608573798c0d07ddfc6f4389d019eca45efc0d91f7f7486693151909`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
