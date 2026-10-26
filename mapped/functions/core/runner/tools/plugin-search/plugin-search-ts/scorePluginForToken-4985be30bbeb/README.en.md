# `scorePluginForToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/plugin-search/plugin-search.ts` · [Module README](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779493-779504](../../../../../../../../reference/runtime/host-main.cjs#L779493-L779504) | `FunctionDeclaration` | no | `plugin, token` |
| [evaluation:579731-579742](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579731-L579742) | `FunctionDeclaration` | no | `plugin, token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779493-779504](../../../../../../../../reference/runtime/host-main.cjs#L779493-L779504) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:579731-579742](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579731-L579742) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:779493

Calls written directly in this body: `.includes`, `displayName2.includes`, `name18.includes`, `plugin.category.toLowerCase`, `plugin.description.toLowerCase`, `plugin.displayName.toLowerCase`, `plugin.name.toLowerCase`, `plugin.skills.some`.

SHA-256 of the source span: `5850eda6b56b843397748dbf9ef31dd6d20eb9e3f43c624c2c8fed9b1bdaffb8`.

### evaluation:579731

Calls written directly in this body: `.includes`, `displayName2.includes`, `name18.includes`, `plugin.category.toLowerCase`, `plugin.description.toLowerCase`, `plugin.displayName.toLowerCase`, `plugin.name.toLowerCase`, `plugin.skills.some`.

SHA-256 of the source span: `5850eda6b56b843397748dbf9ef31dd6d20eb9e3f43c624c2c8fed9b1bdaffb8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
