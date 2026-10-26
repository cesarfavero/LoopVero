# `probeEgressIpHash`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/egress-ip-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/egress-ip-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729913-729923](../../../../../../../reference/runtime/host-main.cjs#L729913-L729923) | `FunctionDeclaration` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729913-729923](../../../../../../../reference/runtime/host-main.cjs#L729913-L729923) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:729913

Chamadas escritas diretamente neste corpo: `new EgressIpProbeError`, `options2.deadline.run`, `parseTraceIp`, `pseudonymizeEgressIp`.

Alvos de lançamento explícito: `EgressIpProbeError`.

SHA-256 do trecho: `9968f53ec196012b351336604eeffac0ba5837d8c8ee2bda93032d83336fa8f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
