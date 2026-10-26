# `renderAgentActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-agent-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765428-765439](../../../../../../../reference/runtime/host-main.cjs#L765428-L765439) | `FunctionDeclaration` | não | `result, bounds2, nowMs2` |
| [evaluation:558795-558806](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558795-L558806) | `FunctionDeclaration` | não | `result, bounds2, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765428-765439](../../../../../../../reference/runtime/host-main.cjs#L765428-L765439) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558795-558806](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558795-L558806) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:765428

Chamadas escritas diretamente neste corpo: `.join`, `result.agents.map`.

SHA-256 do trecho: `a4d8ccd3942639e3a742783bb29c0cb3971d71d1f6291f17c4073efa4633c5de`.

### evaluation:558795

Chamadas escritas diretamente neste corpo: `.join`, `result.agents.map`.

SHA-256 do trecho: `75d94246e5600c14e98780fc69378157415a6bedabc55a098bfa646dd93194da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
