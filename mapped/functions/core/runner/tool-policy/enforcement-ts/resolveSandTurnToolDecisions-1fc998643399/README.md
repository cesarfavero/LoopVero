# `resolveSandTurnToolDecisions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/enforcement.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/enforcement-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:543256-543286](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543256-L543286) | `FunctionDeclaration` | não | `runner` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543256-543286](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543256-L543286) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:543256

Chamadas escritas diretamente neste corpo: `isSandSubagentHistoryKind`, `resolveSandAgentKind`, `resolveSandAgentTools`, `runner.gates.subagentHistoryTools`, `sandAgentToolsPlacedByManifest`.

SHA-256 do trecho: `13b42c7b27a31e5f40cfa4d387191fd132970c2df2524a6c5fff58e28fae5283`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
