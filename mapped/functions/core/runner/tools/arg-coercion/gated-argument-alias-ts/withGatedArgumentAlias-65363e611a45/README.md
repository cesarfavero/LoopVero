# `withGatedArgumentAlias`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777592-777592](../../../../../../../../reference/runtime/host-main.cjs#L777592-L777592) | `ArrowFunctionExpression` | não | `schema3, spec, enabled` |
| [evaluation:577287-577287](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577287-L577287) | `ArrowFunctionExpression` | não | `schema3, spec, enabled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777592-777592](../../../../../../../../reference/runtime/host-main.cjs#L777592-L777592) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:777592 usa retorno implícito de arrow function.
| [evaluation:577287-577287](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577287-L577287) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:577287 usa retorno implícito de arrow function.

### host:777592

Chamadas escritas diretamente neste corpo: `external_exports2.preprocess`.

SHA-256 do trecho: `7beee730f0067a60180ee3193214026de6d2174995392845cf57d5590d12e327`.

### evaluation:577287

Chamadas escritas diretamente neste corpo: `external_exports3.preprocess`.

SHA-256 do trecho: `24a568c38dd9fadffb5ef4cd47428ec9a758908ff061d1b231679c170257226e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
