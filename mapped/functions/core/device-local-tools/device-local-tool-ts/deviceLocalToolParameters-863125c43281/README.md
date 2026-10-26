# `deviceLocalToolParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/device-local-tool.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-local-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758417-758422](../../../../../../reference/runtime/host-main.cjs#L758417-L758422) | `ArrowFunctionExpression` | não | `shape2` |
| [evaluation:548577-548582](../../../../../../reference/runtime/sand-eval-runner.cjs#L548577-L548582) | `ArrowFunctionExpression` | não | `shape2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758417-758422](../../../../../../reference/runtime/host-main.cjs#L758417-L758422) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:758417 usa retorno implícito de arrow function.
| [evaluation:548577-548582](../../../../../../reference/runtime/sand-eval-runner.cjs#L548577-L548582) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:548577 usa retorno implícito de arrow function.

### host:758417

Chamadas escritas diretamente neste corpo: `.describe`, `.optional`, `object`, `string2`.

SHA-256 do trecho: `4a498d4cb0f6c11951b246d96f7bfed9885128a266a40ef6991d48858b8557b4`.

### evaluation:548577

Chamadas escritas diretamente neste corpo: `.describe`, `.optional`, `object`, `string2`.

SHA-256 do trecho: `4a498d4cb0f6c11951b246d96f7bfed9885128a266a40ef6991d48858b8557b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
