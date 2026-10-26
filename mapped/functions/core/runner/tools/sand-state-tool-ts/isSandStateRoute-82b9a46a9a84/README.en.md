# `isSandStateRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763046-763048](../../../../../../../reference/runtime/host-main.cjs#L763046-L763048) | `FunctionDeclaration` | no | `value` |
| [evaluation:555656-555658](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555656-L555658) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763046-763048](../../../../../../../reference/runtime/host-main.cjs#L763046-L763048) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:555656-555658](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555656-L555658) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763046

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `2126eedad97ed1f6264eefe1cf45b9371e755ffb86cbcc23b5d3291ab47806b2`.

### evaluation:555656

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `2126eedad97ed1f6264eefe1cf45b9371e755ffb86cbcc23b5d3291ab47806b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
