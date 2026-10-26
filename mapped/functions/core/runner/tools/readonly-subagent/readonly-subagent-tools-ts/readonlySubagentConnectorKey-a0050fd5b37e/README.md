# `readonlySubagentConnectorKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554017-554025](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554017-L554025) | `FunctionDeclaration` | não | `serverIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554017-554025](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554017-L554025) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554017

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `MCP_SERVER_IDENTIFIER_SCOPE.exec`, `bare.endsWith`, `bare.slice`, `row.slice`, `serverIdentifier.lastIndexOf`, `serverIdentifier.slice`, `withoutMint.trim`.

SHA-256 do trecho: `d4c60c3e88079c48aa0a0eeabf75f419424dcfd27e0c8a1ce32373b36dab037f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
