# `build`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/first-party-lookup-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/first-party-lookup-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:578911-578952](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578911-L578952) | `ArrowFunctionExpression` | não | `{ host, props, decisions, dynamicToolRegistry, mcpMetaToolNames }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:578911-578952](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578911-L578952) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:578911

Chamadas escritas diretamente neste corpo: `createCallMcpTool`, `createGetMcpToolsTool`, `createSandMcpMetaToolOptions`, `describedAs`.

SHA-256 do trecho: `ab6d78a4880dad1e6b8f97d829b2507ad8f2c197c0b53a88be6b76393f784429`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
