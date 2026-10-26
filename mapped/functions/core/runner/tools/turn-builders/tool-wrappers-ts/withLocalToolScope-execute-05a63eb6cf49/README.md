# `withLocalToolScope/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/tool-wrappers.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/tool-wrappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:564555-564573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564555-L564573) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:564555-564573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564555-L564573) | 2 | 0 | 1 | 1 | 0 | 0 |

### evaluation:564555

Chamadas escritas diretamente neste corpo: `ctx.get`, `ctx.with`, `permission.completeScope`, `tool.execute`.

SHA-256 do trecho: `ea536b248a4079cab84c03b21c565c58b01282fc2aa50ce8617700f5dfeb6f6c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
