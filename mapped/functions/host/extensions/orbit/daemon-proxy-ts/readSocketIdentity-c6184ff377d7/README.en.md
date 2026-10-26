# `readSocketIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-proxy.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705454-705463](../../../../../../../reference/runtime/host-main.cjs#L705454-L705463) | `FunctionDeclaration` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705454-705463](../../../../../../../reference/runtime/host-main.cjs#L705454-L705463) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:705454

Calls written directly in this body: `metadata2.isSocket`, `new OrbitDaemonProxyPathError`.

Explicit throw targets: `OrbitDaemonProxyPathError`.

SHA-256 of the source span: `d4627b3c96bc3b8f59c9803e28e49176a19bd8109066dfe10058f2cda57aaff6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
