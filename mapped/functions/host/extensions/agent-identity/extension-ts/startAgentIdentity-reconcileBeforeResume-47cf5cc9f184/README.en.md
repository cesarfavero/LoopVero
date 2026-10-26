# `startAgentIdentity/reconcileBeforeResume`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496853-496868](../../../../../../../reference/runtime/host-main.cjs#L496853-L496868) | `ArrowFunctionExpression` | yes | `startup, signal = lifetime.signal` |
| [host:496951-496951](../../../../../../../reference/runtime/host-main.cjs#L496951-L496951) | `ArrowFunctionExpression` | no | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496853-496868](../../../../../../../reference/runtime/host-main.cjs#L496853-L496868) | 1 | 0 | 1 | 2 | 0 | 1 |
| [host:496951-496951](../../../../../../../reference/runtime/host-main.cjs#L496951-L496951) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496951 uses an implicit arrow-function return.

### host:496853

Calls written directly in this body: `errorLogTag`, `linkFirstReadSignal`, `ownershipDeadline.run`, `reportCapabilityFailure`, `signal.throwIfAborted`.

SHA-256 of the source span: `4a3eec7a076c5c721bef33446591ed6ac69f99303ac35540e72c0625a5dbe788`.

### host:496951

Calls written directly in this body: `reconcileBeforeResume`.

SHA-256 of the source span: `d46b849fcfcd444dd883997fe0700048c0d5c46e9d4be1a309fc0afc63892a45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
