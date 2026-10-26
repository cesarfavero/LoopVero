# `gateMessagesOnGrants/probe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/messages-grants-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777852-777852](../../../../../../../reference/runtime/host-main.cjs#L777852-L777852) | `ArrowFunctionExpression` | yes | `ctx, needed` |
| [evaluation:577587-577587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577587-L577587) | `ArrowFunctionExpression` | yes | `ctx, needed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777852-777852](../../../../../../../reference/runtime/host-main.cjs#L777852-L777852) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:777852 uses an implicit arrow-function return.
| [evaluation:577587-577587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577587-L577587) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:577587 uses an implicit arrow-function return.

### host:777852

Calls written directly in this body: `messages2.run`, `missingMessagesGrants`.

SHA-256 of the source span: `fe3e804ebff4b85d602a8a273dc43fbdad95b660680a8c5ea19c65951112a4f6`.

### evaluation:577587

Calls written directly in this body: `messages.run`, `missingMessagesGrants`.

SHA-256 of the source span: `df7ffe6a3804043d6c7968c8b7dc1f1d4c2e3931ac0a9fdcc303660a1f733bf6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
