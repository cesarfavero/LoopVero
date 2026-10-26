# `readonlyMcpToolIsBlocked`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554047-554058](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554047-L554058) | `FunctionDeclaration` | não | `tools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554047-554058](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554047-L554058) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:554047

Chamadas escritas diretamente neste corpo: `allowed.add`, `isReadonlySubagentMcpToolAllowed`, `new Set`.

SHA-256 do trecho: `236ac3964aee3dfe20fbc630ca5d30df7092570d9d86c68cd042d91fc9ff7ab0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
