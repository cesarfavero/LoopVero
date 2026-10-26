# `parseUnreadState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db-serde.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-serde-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718016-718035](../../../../../../../reference/runtime/host-main.cjs#L718016-L718035) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718016-718035](../../../../../../../reference/runtime/host-main.cjs#L718016-L718035) | 6 | 0 | 0 | 3 | 0 | 1 |

### host:718016

Calls written directly in this body: `JSON.parse`, `Math.floor`, `Number.isFinite`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `238c579b5225c96af2676041642a143d6503e7d135684b78e713fd9cc8923a44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
