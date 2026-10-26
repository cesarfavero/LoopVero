# `leanComputerPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/lean-computer-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/lean-computer-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528893-528919](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528893-L528919) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528893-528919](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528893-L528919) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528893

Chamadas escritas diretamente neste corpo: `.join`, `browserToolsClause`, `subagentHumanStepRule`, `workingFastLines`.

SHA-256 do trecho: `885831b062a2b64d7fb25874625cdd6a4d0b602bdf99c8c15faefa4649f76445`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
