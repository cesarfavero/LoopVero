# `forwardStream/emitLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/worker-log-forwarding.ts` · [Module README](../../../../../modules/host/agent-isolation/worker-log-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715095-715100](../../../../../../reference/runtime/host-main.cjs#L715095-L715100) | `ArrowFunctionExpression` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715095-715100](../../../../../../reference/runtime/host-main.cjs#L715095-L715100) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:715095

Calls written directly in this body: `emit`, `line.slice`.

SHA-256 of the source span: `1268ad25fc70375762fe6035da51d4c1bb82d1ad27033c9d7a9115aa788b80a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
