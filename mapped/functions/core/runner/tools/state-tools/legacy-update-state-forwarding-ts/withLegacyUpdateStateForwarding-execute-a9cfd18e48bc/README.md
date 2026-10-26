# `withLegacyUpdateStateForwarding/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555739-555782](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555739-L555782) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555739-555782](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555739-L555782) | 6 | 0 | 3 | 2 | 3 | 0 |

### evaluation:555739

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `legacyNameOf`, `memoryTool.execute`, `oneShot`, `parseLegacyArgs`, `readArgs`, `recordForwarded`, `refuse`, `splitStateToolForTarget`, `splitTool.execute`, `toolsByName.get`.

Alvos de lançamento explícito: `refuse`.

SHA-256 do trecho: `e7a3b7195b466b6535b37edf029f4627f71b0b7c5017458876619721d6066c48`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
