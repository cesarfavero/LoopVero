# `triggerIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716445-716447](../../../../../../reference/runtime/host-main.cjs#L716445-L716447) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:528128-528130](../../../../../../reference/runtime/sand-eval-runner.cjs#L528128-L528130) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716445-716447](../../../../../../reference/runtime/host-main.cjs#L716445-L716447) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:528128-528130](../../../../../../reference/runtime/sand-eval-runner.cjs#L528128-L528130) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716445

Calls written directly in this body: `JSON.stringify`, `serializeStoredTrigger`.

SHA-256 of the source span: `d8af1467eb2895cd61533e4058056d3ba5d665ff8e5a5acd8d86ef2178643f27`.

### evaluation:528128

Calls written directly in this body: `JSON.stringify`, `serializeStoredTrigger`.

SHA-256 of the source span: `f530a90d8d3591236fcef39e3170c1c6d910a323d19be4a6124b3804323536b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
