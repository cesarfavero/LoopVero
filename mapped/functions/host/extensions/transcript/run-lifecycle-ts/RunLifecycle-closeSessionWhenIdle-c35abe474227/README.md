# `RunLifecycle.closeSessionWhenIdle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740077-740080](../../../../../../../reference/runtime/host-main.cjs#L740077-L740080) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740077-740080](../../../../../../../reference/runtime/host-main.cjs#L740077-L740080) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740077

Chamadas escritas diretamente neste corpo: `session.db.close`, `this.inFlightRunCounts.has`.

SHA-256 do trecho: `41bdedf65cef227b2d2dff17a45d3a8a6636e3a00df9b755321f527b610b26f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
