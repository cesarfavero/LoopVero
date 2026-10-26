# `SandConnectorSecretStore.reportFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719230-719248](../../../../../../../reference/runtime/host-main.cjs#L719230-L719248) | `method` | no | `agentId, operation, path33, error64, copy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719230-719248](../../../../../../../reference/runtime/host-main.cjs#L719230-L719248) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:719230

Calls written directly in this body: `.add`, `.set`, `errorLogTag`, `new Map`, `new Set`, `refusalClass`, `reportSessionDiagnostic`, `reported2.has`, `this.log`, `this.reportedFailures.get`.

Assignment or increment targets: `this.reportedFailures`.

SHA-256 of the source span: `578275bc0b726c708c6382244e71db6262553540c54ced7e53339e677cb37237`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
