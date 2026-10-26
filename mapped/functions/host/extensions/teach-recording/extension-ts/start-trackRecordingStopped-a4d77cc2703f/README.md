# `start/trackRecordingStopped`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729673-729677](../../../../../../../reference/runtime/host-main.cjs#L729673-L729677) | `ArrowFunctionExpression` | não | `{ agent_id, outcome, duration_seconds }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729673-729677](../../../../../../../reference/runtime/host-main.cjs#L729673-L729677) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:729673 usa retorno implícito de arrow function.

### host:729673

Chamadas escritas diretamente neste corpo: `analytics.trackEvent`, `brandedId`.

SHA-256 do trecho: `d89e44fb401ee7c5ec0b317ae059b8a6acd2875aebd13ecdc3872dd2cb6e5a4d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
