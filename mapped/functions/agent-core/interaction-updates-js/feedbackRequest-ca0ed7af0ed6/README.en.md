# `feedbackRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476047-476062](../../../../../reference/runtime/host-main.cjs#L476047-L476062) | `FunctionExpression` | no | `requestId2, canonicalModelName, categories, categoryGroups = [], copy = {}` |
| [evaluation:255357-255372](../../../../../reference/runtime/sand-eval-runner.cjs#L255357-L255372) | `FunctionExpression` | no | `requestId, canonicalModelName, categories, categoryGroups = [], copy = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476047-476062](../../../../../reference/runtime/host-main.cjs#L476047-L476062) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255357-255372](../../../../../reference/runtime/sand-eval-runner.cjs#L255357-L255372) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476047

Calls written directly in this body: `new FeedbackRequestUpdate`, `new InteractionUpdate`.

SHA-256 of the source span: `4537078d0c60e03ff19d70043a9a9f2e37e749e0b8fc84e4fcbc995db7396c7c`.

### evaluation:255357

Calls written directly in this body: `new FeedbackRequestUpdate`, `new InteractionUpdate`.

SHA-256 of the source span: `9d1227e0485f3fe69c506ac1ca5db058aa6e1d6bfa97e5daaf905f3c216c992f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
