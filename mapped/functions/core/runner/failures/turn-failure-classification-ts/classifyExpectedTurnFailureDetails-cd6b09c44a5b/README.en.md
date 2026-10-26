# `classifyExpectedTurnFailureDetails`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/failures/turn-failure-classification.ts` · [Module README](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736154-736156](../../../../../../../reference/runtime/host-main.cjs#L736154-L736156) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589654-589656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589654-L589656) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736154-736156](../../../../../../../reference/runtime/host-main.cjs#L736154-L736156) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589654-589656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589654-L589656) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736154

Calls written directly in this body: `classifyNode`, `new Set`.

SHA-256 of the source span: `4d1deb11be61a63e0ca6b88ac4d7748b3bf7552287e28dd73cedf1318dbcee6a`.

### evaluation:589654

Calls written directly in this body: `classifyNode`, `new Set`.

SHA-256 of the source span: `1fc1ff38e5081a178947114b8366b2c2ce24c20584c75c290da9a4f98c8b8f2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
