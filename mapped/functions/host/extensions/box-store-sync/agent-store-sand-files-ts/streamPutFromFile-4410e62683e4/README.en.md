# `streamPutFromFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474343-474370](../../../../../../../reference/runtime/host-main.cjs#L474343-L474370) | `FunctionDeclaration` | yes | `url2, headers, srcPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474343-474370](../../../../../../../reference/runtime/host-main.cjs#L474343-L474370) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:474343

Calls written directly in this body: `body.destroy`, `new Promise`, `new URL`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b0539d9c54a16cf255e451298ab05df84ba45bbabe86f423289b4cba17692200`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
