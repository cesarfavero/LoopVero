# `isReadonlySubagentMcpToolAllowed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554043-554046](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554043-L554046) | `FunctionDeclaration` | não | `tool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554043-554046](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554043-L554046) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:554043

Chamadas escritas diretamente neste corpo: `isDeclaredReadOnlyMcpTool`, `isReadonlyConnectorRead`.

SHA-256 do trecho: `63a0ce910b9a89a84316aa2a06bf9bc91a7423e1d3926631cc402a1c93b04ec1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
