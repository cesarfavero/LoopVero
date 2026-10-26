# `pseudonymizeEgressIp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/egress-ip-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/egress-ip-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729902-729904](../../../../../../../reference/runtime/host-main.cjs#L729902-L729904) | `FunctionDeclaration` | não | `ip` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729902-729904](../../../../../../../reference/runtime/host-main.cjs#L729902-L729904) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729902

Chamadas escritas diretamente neste corpo: `.digest`, `.update`.

SHA-256 do trecho: `b6641aedee9697d577c7c6ec43f44483da316e96db1b4aff48bca4984b75ec8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
