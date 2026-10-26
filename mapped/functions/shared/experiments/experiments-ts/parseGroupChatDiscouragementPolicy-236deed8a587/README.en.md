# `parseGroupChatDiscouragementPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/experiments/experiments.ts` · [Module README](../../../../../modules/shared/experiments/experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451294-451297](../../../../../../reference/runtime/host-main.cjs#L451294-L451297) | `FunctionDeclaration` | no | `value` |
| [evaluation:597017-597020](../../../../../../reference/runtime/sand-eval-runner.cjs#L597017-L597020) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451294-451297](../../../../../../reference/runtime/host-main.cjs#L451294-L451297) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597017-597020](../../../../../../reference/runtime/sand-eval-runner.cjs#L597017-L597020) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451294

Calls written directly in this body: `.toLowerCase`, `SAND_GROUP_CHAT_DISCOURAGEMENT_POLICIES.find`, `value.trim`.

SHA-256 of the source span: `85f7c62d49a2f717ada0092e1d6149324bca1da3fbf2008236f6f347ec749d5a`.

### evaluation:597017

Calls written directly in this body: `.toLowerCase`, `SAND_GROUP_CHAT_DISCOURAGEMENT_POLICIES.find`, `value.trim`.

SHA-256 of the source span: `85f7c62d49a2f717ada0092e1d6149324bca1da3fbf2008236f6f347ec749d5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
