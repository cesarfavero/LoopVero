# `SandAgentSessionStore.markSessionViewed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723452-723455](../../../../../../../reference/runtime/host-main.cjs#L723452-L723455) | `method` | yes | `session, at3 = Date.now(), options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723452-723455](../../../../../../../reference/runtime/host-main.cjs#L723452-L723455) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:723452

Calls written directly in this body: `session.db.markViewed`, `this.seedSessionActivityFromDbMtime`.

SHA-256 of the source span: `357f44d423fc8ae7474ff472db34bce62c97a0866c98dd87e369487eeb4f6da5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
