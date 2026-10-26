# `skillParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771807-771817](../../../../../../../../reference/runtime/host-main.cjs#L771807-L771817) | `ArrowFunctionExpression` | não | `teamBot` |
| [evaluation:571040-571050](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571040-L571050) | `ArrowFunctionExpression` | não | `teamBot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771807-771817](../../../../../../../../reference/runtime/host-main.cjs#L771807-L771817) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:771807 usa retorno implícito de arrow function.
| [evaluation:571040-571050](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571040-L571050) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:571040 usa retorno implícito de arrow function.

### host:771807

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.optional`, `.trim`, `external_exports2.enum`, `external_exports2.object`, `external_exports2.string`.

SHA-256 do trecho: `9a13054702944162ae5543cd8eece020580d4e7c8f0267541c654c053e253359`.

### evaluation:571040

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.optional`, `.trim`, `external_exports3.enum`, `external_exports3.object`, `external_exports3.string`.

SHA-256 do trecho: `3612b670969688f1c0fec3c743c106b8724e9a35618572e6dfa9d6d16e484651`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
