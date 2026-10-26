# `whereYouWorkSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532818-532845](../../../../../../reference/runtime/sand-eval-runner.cjs#L532818-L532845) | `FunctionDeclaration` | não | `options2, codeChangesRef` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532818-532845](../../../../../../reference/runtime/sand-eval-runner.cjs#L532818-L532845) | 6 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532818

Chamadas escritas diretamente neste corpo: `connectorSearchFirstLine`, `offeredWebToolNames`, `publicWebToolsLine`, `sandMcpMetaToolNames`, `unblockResearchApplies`, `unblockResearchPointer`, `userComputerLinesFor`.

SHA-256 do trecho: `c0fa614ae7c0b9dbb1b1145cf2a44375219f0a6f35897ba194b909a407fa5d9b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
