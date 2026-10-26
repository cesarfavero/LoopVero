# `startGrokBotBoxIdentitySocketServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/identity-socket-server.ts` · [Module README](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499645-499782](../../../../../../../reference/runtime/host-main.cjs#L499645-L499782) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499645-499782](../../../../../../../reference/runtime/host-main.cjs#L499645-L499782) | 0 | 1 | 7 | 1 | 1 | 1 |

### host:499645

Calls written directly in this body: `closeListener`, `handPathToAgentUser`, `import_node_http4.default.createServer`, `import_node_net3.default.createServer`, `new Promise`, `new Set`, `new TokenBucket`, `new WeakMap`, `server.on`, `unlinkIfPresent`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `e581cde1e9e162a18062564ea2a69ea285fa98664e1d8722744bc84df2469655`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
