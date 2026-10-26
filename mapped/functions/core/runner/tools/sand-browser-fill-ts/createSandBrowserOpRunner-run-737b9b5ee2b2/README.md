# `createSandBrowserOpRunner/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726893-726949](../../../../../../../reference/runtime/host-main.cjs#L726893-L726949) | `FunctionExpression` | sim | `ctx, op, args` |
| [evaluation:561508-561564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561508-L561564) | `FunctionExpression` | sim | `ctx, op, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726893-726949](../../../../../../../reference/runtime/host-main.cjs#L726893-L726949) | 12 | 0 | 3 | 5 | 0 | 1 |
| [evaluation:561508-561564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561508-L561564) | 12 | 0 | 3 | 5 | 0 | 1 |

### host:726893

Chamadas escritas diretamente neste corpo: `.execute`, `.toString`, `Date.now`, `JSON.stringify`, `Object.hasOwn`, `buildHostShellArgs`, `deps.resourceAccessor.get`, `describeSandBrowserShellError`, `ensureUploaded`, `errorMessage`, `import_node_buffer6.Buffer.from`, `parseDriverResponse`, `sensitiveRequest`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `da00f2b553b6a24807c0a03602076667ad1b2b746285b8848c608b03a0c29493`.

### evaluation:561508

Chamadas escritas diretamente neste corpo: `.execute`, `.toString`, `Date.now`, `JSON.stringify`, `Object.hasOwn`, `buildHostShellArgs`, `deps.resourceAccessor.get`, `describeSandBrowserShellError`, `ensureUploaded`, `errorMessage2`, `import_node_buffer10.Buffer.from`, `parseDriverResponse`, `sensitiveRequest`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `a23a5140a79d76519f3264cce74156b28886e72d635435eeb95ad80affba84f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
