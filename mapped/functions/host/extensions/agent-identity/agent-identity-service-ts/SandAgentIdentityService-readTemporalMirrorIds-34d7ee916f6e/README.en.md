# `SandAgentIdentityService.readTemporalMirrorIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495896-495904](../../../../../../../reference/runtime/host-main.cjs#L495896-L495904) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495896-495904](../../../../../../../reference/runtime/host-main.cjs#L495896-L495904) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:495896

Calls written directly in this body: `.flatMap`, `this.deps.getAgentsRootDir`.

SHA-256 of the source span: `6ecfbb9b785d623ee2318fa34e2ba2dc1dfa56fa8e26a452a27644a6099014cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
