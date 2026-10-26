# `parseSandSetupConvergeStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683770-683793](../../../../../../../reference/runtime/host-main.cjs#L683770-L683793) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683770-683793](../../../../../../../reference/runtime/host-main.cjs#L683770-L683793) | 3 | 2 | 0 | 4 | 0 | 1 |

### host:683770

Calls written directly in this body: `Date.parse`, `JSON.parse`, `Math.min`, `Number.isNaN`, `convergeStatusSchema.safeParse`.

Assignment or increment targets: `failedEntries`, `parsed2`.

SHA-256 of the source span: `b8ca5e717704f94ccccbc5064d34976029287c5bc0805481a9eba987407405c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
