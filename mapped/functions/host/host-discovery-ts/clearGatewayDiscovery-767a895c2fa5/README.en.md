# `clearGatewayDiscovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-discovery.ts` · [Module README](../../../../modules/host/host-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494015-494017](../../../../../reference/runtime/host-main.cjs#L494015-L494017) | `FunctionDeclaration` | yes | `path33 = getGatewayDiscoveryPath()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494015-494017](../../../../../reference/runtime/host-main.cjs#L494015-L494017) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:494015

Calls written directly in this body: `import_node_fs34.promises.rm`.

SHA-256 of the source span: `23bde1b25dfcbb4e79a551b3bfe0ff8e60e2031cf23fdeb428f0020200a4b7ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
