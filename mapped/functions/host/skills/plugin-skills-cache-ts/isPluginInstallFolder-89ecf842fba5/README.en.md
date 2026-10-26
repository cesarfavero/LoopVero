# `isPluginInstallFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/plugin-skills-cache.ts` · [Module README](../../../../../modules/host/skills/plugin-skills-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684282-684285](../../../../../../reference/runtime/host-main.cjs#L684282-L684285) | `FunctionDeclaration` | no | `value, pluginsRoot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684282-684285](../../../../../../reference/runtime/host-main.cjs#L684282-L684285) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:684282

Calls written directly in this body: `isPathWithin`, `isUnknownRecord2`.

SHA-256 of the source span: `87a937c92285eb881a0029181f8100d466ab362fbe4f4fcec02d664224a42f89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
