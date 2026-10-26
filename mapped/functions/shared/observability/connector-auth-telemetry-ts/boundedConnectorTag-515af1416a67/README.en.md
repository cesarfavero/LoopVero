# `boundedConnectorTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `shared/observability/connector-auth-telemetry.ts` · [Module README](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455584-455592](../../../../../../reference/runtime/host-main.cjs#L455584-L455592) | `FunctionDeclaration` | no | `serverName, serverUrl` |
| [evaluation:477380-477388](../../../../../../reference/runtime/sand-eval-runner.cjs#L477380-L477388) | `FunctionDeclaration` | no | `serverName, serverUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455584-455592](../../../../../../reference/runtime/host-main.cjs#L455584-L455592) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:477380-477388](../../../../../../reference/runtime/sand-eval-runner.cjs#L477380-L477388) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:455584

Calls written directly in this body: `.replace`, `CONNECTOR_TAG_ALIASES.get`, `SAND_KNOWN_CONNECTOR_TAGS.has`, `proxiedConnectorTag`, `serverName.toLowerCase`.

SHA-256 of the source span: `81431782e9a0feec6b3e08fe92b06288b6244c49ef44a6a9acb2024bc72004cb`.

### evaluation:477380

Calls written directly in this body: `.replace`, `CONNECTOR_TAG_ALIASES.get`, `SAND_KNOWN_CONNECTOR_TAGS.has`, `proxiedConnectorTag`, `serverName.toLowerCase`.

SHA-256 of the source span: `81431782e9a0feec6b3e08fe92b06288b6244c49ef44a6a9acb2024bc72004cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
