# `startWorkingStateExport/readClientStateSeed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786068-786070](../../../../../../../reference/runtime/host-main.cjs#L786068-L786070) | `ArrowFunctionExpression` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786068-786070](../../../../../../../reference/runtime/host-main.cjs#L786068-L786070) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:786068 usa retorno implícito de arrow function.

### host:786068

Chamadas escritas diretamente neste corpo: `sessionStore.summarizeAgentById`, `workingStateExportClientStateSeedFromSummary`.

SHA-256 do trecho: `6ff6a71fe351b26eb0ae3904764a295918351eead4c577922031b0b61549d978`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
