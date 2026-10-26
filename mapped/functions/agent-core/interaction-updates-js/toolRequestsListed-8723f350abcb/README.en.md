# `toolRequestsListed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476013-476022](../../../../../reference/runtime/host-main.cjs#L476013-L476022) | `FunctionExpression` | no | `callCount` |
| [evaluation:255323-255332](../../../../../reference/runtime/sand-eval-runner.cjs#L255323-L255332) | `FunctionExpression` | no | `callCount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476013-476022](../../../../../reference/runtime/host-main.cjs#L476013-L476022) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255323-255332](../../../../../reference/runtime/sand-eval-runner.cjs#L255323-L255332) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476013

Calls written directly in this body: `Math.max`, `new InteractionUpdate`, `new ToolRequestsListedUpdate`.

SHA-256 of the source span: `f2a1eaf91d15b46123a783e0c76ccb62ef3557721e9163aa49c462155aedd052`.

### evaluation:255323

Calls written directly in this body: `Math.max`, `new InteractionUpdate`, `new ToolRequestsListedUpdate`.

SHA-256 of the source span: `f2a1eaf91d15b46123a783e0c76ccb62ef3557721e9163aa49c462155aedd052`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
