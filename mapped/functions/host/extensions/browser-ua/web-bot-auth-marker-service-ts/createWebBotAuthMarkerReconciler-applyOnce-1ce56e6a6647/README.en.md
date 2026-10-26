# `createWebBotAuthMarkerReconciler/applyOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/browser-ua/web-bot-auth-marker-service.ts` · [Module README](../../../../../../modules/host/extensions/browser-ua/web-bot-auth-marker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506516-506531](../../../../../../../reference/runtime/host-main.cjs#L506516-L506531) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506516-506531](../../../../../../../reference/runtime/host-main.cjs#L506516-L506531) | 3 | 0 | 2 | 3 | 0 | 1 |

### host:506516

Calls written directly in this body: `errorLogTag`, `import_promises28.default.rm`, `import_promises28.default.writeFile`, `options2.contents`, `options2.isEnabled`, `options2.log`.

Assignment or increment targets: `lastApplied`.

SHA-256 of the source span: `2bf6442a46e1c0d3725653d2dde10c1384c0cf1f1fa46e2c207ed888e1f81b03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
