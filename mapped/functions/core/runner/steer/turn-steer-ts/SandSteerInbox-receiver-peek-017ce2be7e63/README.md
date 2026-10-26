# `SandSteerInbox.receiver/peek`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/steer/turn-steer.ts` · [README do módulo](../../../../../../modules/core/runner/steer/turn-steer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589813-589819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589813-L589819) | `ArrowFunctionExpression` | não | `_ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589813-589819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589813-L589819) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:589813

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `this.settlePoppedAsDelivered`, `toRedactedConversationAction`.

SHA-256 do trecho: `8b39900204d8c522f46924894e86a9b2ce1a9c47f0a5686a0bbf14dc04612d67`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
