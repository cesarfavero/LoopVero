# `start/trackSubmitted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/feedback/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/feedback/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553699-553703](../../../../../../../reference/runtime/host-main.cjs#L553699-L553703) | `ArrowFunctionExpression` | não | `agentId, facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553699-553703](../../../../../../../reference/runtime/host-main.cjs#L553699-L553703) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:553699 usa retorno implícito de arrow function.

### host:553699

Chamadas escritas diretamente neste corpo: `brandedId`, `telemetry.analytics.trackEvent`.

SHA-256 do trecho: `87af7df67cdcab642d691e527f8d154a8d751f67a9c6403f6bef2b06b3ce0062`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
