# `schedulePendingRecovery/attempt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729713-729740](../../../../../../../reference/runtime/host-main.cjs#L729713-L729740) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729713-729740](../../../../../../../reference/runtime/host-main.cjs#L729713-L729740) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:729713

Chamadas escritas diretamente neste corpo: `.finally`, `Promise.resolve`.

Alvos de atribuição ou incremento: `inFlight`, `renewedDuringAttempt`.

SHA-256 do trecho: `db73d3b0f307739407aa43d9e65e0481bb1ac05c921b771a83e15d82121d7f16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
