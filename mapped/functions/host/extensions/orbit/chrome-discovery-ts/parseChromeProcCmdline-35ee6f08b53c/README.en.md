# `parseChromeProcCmdline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/chrome-discovery.ts` · [Module README](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705274-705280](../../../../../../../reference/runtime/host-main.cjs#L705274-L705280) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705274-705280](../../../../../../../reference/runtime/host-main.cjs#L705274-L705280) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:705274

Calls written directly in this body: `.filter`, `argv[computed].split`, `raw.split`.

SHA-256 of the source span: `a8ca57f3cd1b1d1a711c1f3e0a2625e5e9dab3adb68eba7241dc2814a4f7583c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
