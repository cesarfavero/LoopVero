# `deleteIfUnchanged`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-crash-marker-forward.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-crash-marker-forward-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471570-471576](../../../../../../../reference/runtime/host-main.cjs#L471570-L471576) | `FunctionDeclaration` | sim | `store, raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471570-471576](../../../../../../../reference/runtime/host-main.cjs#L471570-L471576) | 4 | 0 | 2 | 4 | 0 | 0 |

### host:471570

Chamadas escritas diretamente neste corpo: `store.delete`, `store.read`.

SHA-256 do trecho: `4254d4a4d0364dc59ff2699f6071cf9fda702a0998abc135df0e86f80a205dbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
