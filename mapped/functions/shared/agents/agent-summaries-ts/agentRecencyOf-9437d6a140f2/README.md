# `agentRecencyOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `shared/agents/agent-summaries.ts` · [README do módulo](../../../../../modules/shared/agents/agent-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722876-722884](../../../../../../reference/runtime/host-main.cjs#L722876-L722884) | `FunctionDeclaration` | não | `summary, mode = "row-updated"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722876-722884](../../../../../../reference/runtime/host-main.cjs#L722876-L722884) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:722876

Chamadas escritas diretamente neste corpo: `Math.max`, `isTeammateSharedBot`.

SHA-256 do trecho: `11e8cade15db46390b68d1267bdcfb3666461b3838b066761f9c952142eaedce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
