# `createListEmailInboxesTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/list-email-inboxes-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/list-email-inboxes-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764911-764911](../../../../../../../reference/runtime/host-main.cjs#L764911-L764911) | `ArrowFunctionExpression` | sim | `_ctx, _args, d` |
| [evaluation:558279-558279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558279-L558279) | `ArrowFunctionExpression` | sim | `_ctx, _args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764911-764911](../../../../../../../reference/runtime/host-main.cjs#L764911-L764911) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:764911 usa retorno implícito de arrow function.
| [evaluation:558279-558279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558279-L558279) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:558279 usa retorno implícito de arrow function.

### host:764911

Chamadas escritas diretamente neste corpo: `d.email.listInboxes`, `renderEmailInboxes`.

SHA-256 do trecho: `fbe51bce4a70f177fc6623f05881f1d69005513da0a0e72abcf6b27beed11f64`.

### evaluation:558279

Chamadas escritas diretamente neste corpo: `d.email.listInboxes`, `renderEmailInboxes`.

SHA-256 do trecho: `fbe51bce4a70f177fc6623f05881f1d69005513da0a0e72abcf6b27beed11f64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
