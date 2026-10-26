# `createSubagentRuntime/listRunningSubagents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535515-535522](../../../../../../reference/runtime/sand-eval-runner.cjs#L535515-L535522) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535515-535522](../../../../../../reference/runtime/sand-eval-runner.cjs#L535515-L535522) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:535515

Chamadas escritas diretamente neste corpo: `backgroundSubagentRuns.keys`, `buildRunningSubagentInfo`, `infos.push`.

SHA-256 do trecho: `77d123236d4d8a8e1782b0af04be0587de7d674a7518bec20b1c586b279f4709`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
