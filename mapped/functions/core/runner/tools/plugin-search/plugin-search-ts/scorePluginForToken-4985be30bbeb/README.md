# `scorePluginForToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/plugin-search/plugin-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779493-779504](../../../../../../../../reference/runtime/host-main.cjs#L779493-L779504) | `FunctionDeclaration` | não | `plugin, token` |
| [evaluation:579731-579742](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579731-L579742) | `FunctionDeclaration` | não | `plugin, token` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779493-779504](../../../../../../../../reference/runtime/host-main.cjs#L779493-L779504) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:579731-579742](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579731-L579742) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:779493

Chamadas escritas diretamente neste corpo: `.includes`, `displayName2.includes`, `name18.includes`, `plugin.category.toLowerCase`, `plugin.description.toLowerCase`, `plugin.displayName.toLowerCase`, `plugin.name.toLowerCase`, `plugin.skills.some`.

SHA-256 do trecho: `5850eda6b56b843397748dbf9ef31dd6d20eb9e3f43c624c2c8fed9b1bdaffb8`.

### evaluation:579731

Chamadas escritas diretamente neste corpo: `.includes`, `displayName2.includes`, `name18.includes`, `plugin.category.toLowerCase`, `plugin.description.toLowerCase`, `plugin.displayName.toLowerCase`, `plugin.name.toLowerCase`, `plugin.skills.some`.

SHA-256 do trecho: `5850eda6b56b843397748dbf9ef31dd6d20eb9e3f43c624c2c8fed9b1bdaffb8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
