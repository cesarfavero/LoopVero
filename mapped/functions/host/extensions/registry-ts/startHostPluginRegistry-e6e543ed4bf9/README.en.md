# `startHostPluginRegistry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/registry.ts` · [Module README](../../../../../modules/host/extensions/registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786227-786240](../../../../../../reference/runtime/host-main.cjs#L786227-L786240) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786227-786240](../../../../../../reference/runtime/host-main.cjs#L786227-L786240) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:786227

Calls written directly in this body: `startHostExtensions`.

SHA-256 of the source span: `f8547934d326156548d4f40de4dd5f0867276f7a8bf93e85dce722e94122b78f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
