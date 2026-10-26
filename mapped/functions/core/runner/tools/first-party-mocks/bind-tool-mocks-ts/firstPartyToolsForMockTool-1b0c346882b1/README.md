# `firstPartyToolsForMockTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555821-555833](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555821-L555833) | `FunctionDeclaration` | não | `mockTool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555821-555833](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555821-L555833) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:555821

Chamadas escritas diretamente neste corpo: `OLDER_TOOL_NAMES.get`, `SAND_EVAL_NEVER_FORWARDED_TOOL_NAMES.has`, `SPLIT_STATE_TOOL_ARGS.flatMap`, `isLegacyStateToolName`, `new Map`.

SHA-256 do trecho: `f022c595ee9e83aa4bedd02255a74c487d6517cc58e7d904ec505a65854497eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
