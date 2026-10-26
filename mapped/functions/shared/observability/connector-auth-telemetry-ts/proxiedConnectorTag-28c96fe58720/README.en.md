# `proxiedConnectorTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `shared/observability/connector-auth-telemetry.ts` · [Module README](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455596-455604](../../../../../../reference/runtime/host-main.cjs#L455596-L455604) | `FunctionDeclaration` | no | `serverUrl` |
| [evaluation:477392-477400](../../../../../../reference/runtime/sand-eval-runner.cjs#L477392-L477400) | `FunctionDeclaration` | no | `serverUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455596-455604](../../../../../../reference/runtime/host-main.cjs#L455596-L455604) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:477392-477400](../../../../../../reference/runtime/sand-eval-runner.cjs#L477392-L477400) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:455596

Calls written directly in this body: `URL.canParse`, `boundedConnectorTag`, `new URL`, `providerPath.exec`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `0349b4b99778c2ba50e74dc07133dc77849c47f20b5bb516d9f869944e14e260`.

### evaluation:477392

Calls written directly in this body: `URL.canParse`, `boundedConnectorTag`, `new URL`, `providerPath.exec`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `0349b4b99778c2ba50e74dc07133dc77849c47f20b5bb516d9f869944e14e260`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
