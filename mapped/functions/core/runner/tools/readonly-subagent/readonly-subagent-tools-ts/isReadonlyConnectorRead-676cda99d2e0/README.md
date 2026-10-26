# `isReadonlyConnectorRead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554026-554030](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554026-L554030) | `FunctionDeclaration` | não | `serverIdentifier, toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554026-554030](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554026-L554030) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:554026

Chamadas escritas diretamente neste corpo: `.has`, `READONLY_CONNECTOR_READ_SETS.get`, `readonlySubagentConnectorKey`.

SHA-256 do trecho: `0d3b4e58064b7dc499973ccda43d62f2dafda249974add847db1c987514922ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
