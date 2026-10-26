# `withRecordedToolCallNames/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/tool-wrappers.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/tool-wrappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768979-768982](../../../../../../../../reference/runtime/host-main.cjs#L768979-L768982) | `ArrowFunctionExpression` | não | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:564579-564582](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564579-L564582) | `ArrowFunctionExpression` | não | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768979-768982](../../../../../../../../reference/runtime/host-main.cjs#L768979-L768982) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564579-564582](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564579-L564582) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768979

Chamadas escritas diretamente neste corpo: `record3`, `tool.execute`.

SHA-256 do trecho: `98ac11239b389a2cc513d73bf7cbbebf832888a4299b3c3e92ac9a655e764fb1`.

### evaluation:564579

Chamadas escritas diretamente neste corpo: `record4`, `tool.execute`.

SHA-256 do trecho: `306a821906a2b04f8c417cc6549a061226ac229e3f0be6fbd4a04fd2656daf84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
