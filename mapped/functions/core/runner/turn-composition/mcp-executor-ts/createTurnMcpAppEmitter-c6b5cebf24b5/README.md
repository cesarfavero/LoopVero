# `createTurnMcpAppEmitter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585891-585906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585891-L585906) | `FunctionDeclaration` | não | `host, turnToolHost, updateObservers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585891-585906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585891-L585906) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585891

Chamadas escritas diretamente neste corpo: `createMcpAppEmitter`, `createMcpAppServerCheck`, `host.mcpAppPages`, `turnToolHost.gates.mcpApps`.

SHA-256 do trecho: `d085ddfa3455d04e618074daa1cc7cf8bf607d26bbb9fee4a3392795a40cab59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
