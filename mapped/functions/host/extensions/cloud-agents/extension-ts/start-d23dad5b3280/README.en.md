# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/extension.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538621-538654](../../../../../../../reference/runtime/host-main.cjs#L538621-L538654) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538621-538654](../../../../../../../reference/runtime/host-main.cjs#L538621-L538654) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:538621

Calls written directly in this body: `context2.onStop`, `createPollingPolicy2`, `new SandCloudAgentManager`.

SHA-256 of the source span: `dc7d69576f4fbe8b7bd261327977c9128eab1ab977a417702c1179e60ae53f05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
