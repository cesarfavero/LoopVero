# `createDraftToolForTurn/hostedSendAs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756092-756092](../../../../../../../reference/runtime/host-main.cjs#L756092-L756092) | `ArrowFunctionExpression` | não | `route` |
| [evaluation:542013-542013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542013-L542013) | `ArrowFunctionExpression` | não | `route` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756092-756092](../../../../../../../reference/runtime/host-main.cjs#L756092-L756092) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:756092 usa retorno implícito de arrow function.
| [evaluation:542013-542013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542013-L542013) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:542013 usa retorno implícito de arrow function.

### host:756092

Chamadas escritas diretamente neste corpo: `host.gates.gmailSendAsSignature`, `isHostedGmailRoute`.

SHA-256 do trecho: `66f49ac7cd27f6876d8c65c82ff464062718476a341d45c45a9f4efc43529e31`.

### evaluation:542013

Chamadas escritas diretamente neste corpo: `host.gates.gmailSendAsSignature`, `isHostedGmailRoute`.

SHA-256 do trecho: `66f49ac7cd27f6876d8c65c82ff464062718476a341d45c45a9f4efc43529e31`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
