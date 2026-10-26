# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542555-542584](../../../../../../../reference/runtime/host-main.cjs#L542555-L542584) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542555-542584](../../../../../../../reference/runtime/host-main.cjs#L542555-L542584) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:542555

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createDeadlinePolicy`, `getSandAgentsRootDir`, `getSandRootDir`, `index.start`, `new SandSearchIndexService`, `subscribeTranscriptMutations`.

SHA-256 do trecho: `89840442c2670ea9d94b77e522748352ba8e835124eb5ebec372043ab675d422`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
