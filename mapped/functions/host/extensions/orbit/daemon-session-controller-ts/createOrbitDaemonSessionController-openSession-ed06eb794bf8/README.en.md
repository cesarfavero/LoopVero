# `createOrbitDaemonSessionController/openSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705811-705866](../../../../../../../reference/runtime/host-main.cjs#L705811-L705866) | `FunctionDeclaration` | yes | `activeTarget` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705811-705866](../../../../../../../reference/runtime/host-main.cjs#L705811-L705866) | 6 | 0 | 2 | 5 | 0 | 2 |

### host:705811

Calls written directly in this body: `BigInt`, `beginRetirement`, `deps.client.openSession`, `isDefinitiveOpenFailure`, `isProtocolDivergence`, `leaseDeadlines`, `reportFailure`, `sameIdentity`, `sameSessionCredentials`, `session.close`, `sessionCredentialsOf`, `toDaemonConfiguration`.

Assignment or increment targets: `session`, `state.currentSession`, `state.rejectedCredentials`.

SHA-256 of the source span: `ad177cb3df457ee61f844e2a7fc6ebbaad5861f7e01e22d3c41b43c75b519809`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
