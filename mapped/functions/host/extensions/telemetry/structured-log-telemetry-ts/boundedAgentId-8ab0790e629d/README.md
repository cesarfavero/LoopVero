# `boundedAgentId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472699-472701](../../../../../../../reference/runtime/host-main.cjs#L472699-L472701) | `FunctionDeclaration` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472699-472701](../../../../../../../reference/runtime/host-main.cjs#L472699-L472701) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472699

Chamadas escritas diretamente neste corpo: `SAND_AGENT_ID_SHAPE.test`, `brandedId`.

SHA-256 do trecho: `9c7f884cba3b29009682a7606d5018c94278c6b35041577505d2b6dcf66ce185`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
