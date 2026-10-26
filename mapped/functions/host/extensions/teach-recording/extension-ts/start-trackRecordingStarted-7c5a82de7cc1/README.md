# `start/trackRecordingStarted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729669-729672](../../../../../../../reference/runtime/host-main.cjs#L729669-L729672) | `ArrowFunctionExpression` | não | `{ agent_id, entry_point }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729669-729672](../../../../../../../reference/runtime/host-main.cjs#L729669-L729672) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:729669 usa retorno implícito de arrow function.

### host:729669

Chamadas escritas diretamente neste corpo: `analytics.trackEvent`, `brandedId`.

SHA-256 do trecho: `ac160e0c1825619ee06bc812690327d5851f5e0d6955a94b9c88c4504f0d302f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
