# `startAgentIdentity/reportCapabilityFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496628-496639](../../../../../../../reference/runtime/host-main.cjs#L496628-L496639) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496628-496639](../../../../../../../reference/runtime/host-main.cjs#L496628-L496639) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:496628

Calls written directly in this body: `context2.deps.telemetry.logs.reportAgentIdentitySync`, `context2.host.log`, `errorLogTag`, `logFields`.

SHA-256 of the source span: `bd8fe1021f4068595560c3ff128a95d0f1ef85513656ff82ea5ab657118767b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
