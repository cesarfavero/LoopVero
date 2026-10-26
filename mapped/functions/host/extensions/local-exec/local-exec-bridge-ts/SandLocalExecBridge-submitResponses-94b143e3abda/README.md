# `SandLocalExecBridge.submitResponses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/local-exec/local-exec-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/local-exec/local-exec-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682130-682162](../../../../../../../reference/runtime/host-main.cjs#L682130-L682162) | `method` | não | `batch` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682130-682162](../../../../../../../reference/runtime/host-main.cjs#L682130-L682162) | 9 | 1 | 0 | 1 | 0 | 0 |

### host:682130

Chamadas escritas diretamente neste corpo: `boundedVariant`, `this.deps.clock.now`, `this.deps.reportProvider`, `this.providerForBatch`.

Alvos de atribuição ou incremento: `provider.computerIdPresent`, `provider.hadHello`, `provider.hasHeartbeat`, `provider.lastSeenAt`, `provider.supervised`, `provider.variant`.

SHA-256 do trecho: `b22d34bfb933eec0685b267d9794f5671549fc2823d6f6579a55077637103de7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
