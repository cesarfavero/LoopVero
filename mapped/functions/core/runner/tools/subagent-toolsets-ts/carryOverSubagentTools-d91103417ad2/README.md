# `carryOverSubagentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/subagent-toolsets.ts` · [README do módulo](../../../../../../modules/core/runner/tools/subagent-toolsets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582521-582525](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582521-L582525) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582521-582525](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582521-L582525) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582521

Chamadas escritas diretamente neste corpo: `createCarryOverTool`, `recallMemoryTools`, `tools.push`.

SHA-256 do trecho: `081e649e6784320535ce560e17e595d6a06c4cb6c9ec2f064d3731b61c470951`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
