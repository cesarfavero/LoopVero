# `computerUseSubagentDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-computer-use-subagent.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-use-subagent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525168-525186](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525168-L525186) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525168-525186](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525168-L525186) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525168

Chamadas escritas diretamente neste corpo: `.join`, `backgroundSubagentLine`, `computerUseLoginLine`, `conciseComputerUseSubagentDescription`, `dispatchSentence`, `displaySpaceSentence`, `humanHoldSentence`.

SHA-256 do trecho: `1127ce9eec6e4312572b229a4e1727f7cb4a0e6620fb4085486dc4e05c9186ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
