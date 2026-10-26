# `conciseComputerUseSubagentDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-computer-use-subagent.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-use-subagent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525154-525163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525154-L525163) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525154-525163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525154-L525163) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525154

Chamadas escritas diretamente neste corpo: `.join`, `computerUseLoginLine`, `displaySpaceSentence`, `humanHoldSentence`.

SHA-256 do trecho: `af6ef798ec5e2e5d81275639fb3c6b5dcdb96e378faf7ccec923b82286b65b2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
