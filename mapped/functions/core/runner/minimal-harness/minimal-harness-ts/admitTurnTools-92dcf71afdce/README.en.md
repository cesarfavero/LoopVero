# `admitTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/minimal-harness/minimal-harness.ts` · [Module README](../../../../../../modules/core/runner/minimal-harness/minimal-harness-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583380-583384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583380-L583384) | `FunctionDeclaration` | no | `tools, disabledToolIdentifiers, allowedTopLevelToolNames, dynamicTools = /* @__PURE__ */ new Set(), answeredByMock = () => false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583380-583384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583380-L583384) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583380

Calls written directly in this body: `tools.filter`.

SHA-256 of the source span: `8e8e5bd2ec79386176b3cd9df3c5062d4442d118ddb9d6c509503953012f799a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
