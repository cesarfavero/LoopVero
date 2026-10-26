# `createSentLinkChecks/countDelivered`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583504-583515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583504-L583515) | `ArrowFunctionExpression` | não | `ctx, message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583504-583515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583504-L583515) | 0 | 1 | 0 | 0 | 0 | 1 |

### evaluation:583504

Chamadas escritas diretamente neste corpo: `checksFor`, `errorLogTag`, `logger98.warn`, `sentLinkCheck.increment`.

SHA-256 do trecho: `cbf7213eaa16f0a183c902890bd979df9a2e37e4ea71e3b4292693e51aa93aa4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
