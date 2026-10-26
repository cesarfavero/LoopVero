# `start/reconcileNow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714989-714989](../../../../../../../reference/runtime/host-main.cjs#L714989-L714989) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714989-714989](../../../../../../../reference/runtime/host-main.cjs#L714989-L714989) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:714989 uses an implicit arrow-function return.

### host:714989

Calls written directly in this body: `context2.deps[computed].reconcileNow`.

SHA-256 of the source span: `6522ccd0e0fa509ba2ce770f9c1357948e173a19aa6b67693fccb0615aaedf14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
