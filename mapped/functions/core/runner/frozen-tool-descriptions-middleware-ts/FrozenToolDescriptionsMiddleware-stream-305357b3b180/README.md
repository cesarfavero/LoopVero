# `FrozenToolDescriptionsMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/frozen-tool-descriptions-middleware.ts` · [README do módulo](../../../../../modules/core/runner/frozen-tool-descriptions-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586603-586628](../../../../../../reference/runtime/sand-eval-runner.cjs#L586603-L586628) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586603-586628](../../../../../../reference/runtime/sand-eval-runner.cjs#L586603-L586628) | 3 | 1 | 0 | 2 | 0 | 0 |

### evaluation:586603

Chamadas escritas diretamente neste corpo: `isDescribedTool2`, `live.set`, `new Map`, `resolveFrozenToolDescriptions`, `schemaShaOf`, `this.deps.compactionEpoch`, `this.deps.store.getToolDescriptionSnapshot`, `this.deps.store.setToolDescriptionSnapshot`, `this.innerExecutor.stream`, `tools.map`.

SHA-256 do trecho: `63f6f3e040bf9f5789d7ab817f2119df3ec352a17da9400f76d5fba38bdfd6d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
