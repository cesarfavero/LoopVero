# `SandAgentSessionStore.constructor/this.createAgentDb/onFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723028-723054](../../../../../../../reference/runtime/host-main.cjs#L723028-L723054) | `ArrowFunctionExpression` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723028-723054](../../../../../../../reference/runtime/host-main.cjs#L723028-L723054) | 6 | 0 | 0 | 0 | 0 | 0 |

### host:723028

Calls written directly in this body: `errorLogTag`, `options2.onFailure`, `reportHostLog`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `207ba725f7df0b32cb117d52750adf766dd9b367b42c82f7bafecd420c3d7dc4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
