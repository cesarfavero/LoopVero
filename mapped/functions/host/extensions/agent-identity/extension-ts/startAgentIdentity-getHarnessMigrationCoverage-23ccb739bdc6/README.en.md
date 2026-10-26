# `startAgentIdentity/getHarnessMigrationCoverage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496614-496623](../../../../../../../reference/runtime/host-main.cjs#L496614-L496623) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496614-496623](../../../../../../../reference/runtime/host-main.cjs#L496614-L496623) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:496614

Calls written directly in this body: `context2.host.log`, `errorLogTag`, `isWriteEnabled`.

SHA-256 of the source span: `834b640e1b474a3a69646ac003774b6f0edfe13d723abcdb6cf84bcd144fbfd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
