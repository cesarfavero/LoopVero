# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/extension.ts` · [Module README](../../../../../../modules/host/extensions/secrets/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709338-709377](../../../../../../../reference/runtime/host-main.cjs#L709338-L709377) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709338-709377](../../../../../../../reference/runtime/host-main.cjs#L709338-L709377) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:709338

Calls written directly in this body: `.withName`, `context2.onStop`, `createContext`, `createDeadlinePolicy`, `createRetryPolicy`, `createSandCursorBackendClient`, `new BoxSecretsApplier`, `service.applyPersisted`.

SHA-256 of the source span: `e498796e3a47b210fde24bef83e210ed7d3967510295620c3fc76cdb83ebfee5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
