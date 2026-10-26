# `createOrbitDaemonSessionController/scheduleRenewal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706054-706071](../../../../../../../reference/runtime/host-main.cjs#L706054-L706071) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706054-706071](../../../../../../../reference/runtime/host-main.cjs#L706054-L706071) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:706054

Chamadas escritas diretamente neste corpo: `Math.max`, `Number`, `deps.clock.monotonicNow`, `deps.clock.schedule`, `maybeResolveDisposal`.

Alvos de atribuição ou incremento: `state.scheduledWake`.

SHA-256 do trecho: `78b798f7f8e3ce18f8e5d6f82cc684f0518ab17f69e18efe20776b4efc02dc5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
