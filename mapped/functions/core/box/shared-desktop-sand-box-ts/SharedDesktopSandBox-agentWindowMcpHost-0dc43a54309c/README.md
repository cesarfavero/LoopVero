# `SharedDesktopSandBox.agentWindowMcpHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555043-555070](../../../../../../reference/runtime/host-main.cjs#L555043-L555070) | `method` | sim | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555043-555070](../../../../../../reference/runtime/host-main.cjs#L555043-L555070) | 4 | 0 | 3 | 4 | 0 | 1 |

### host:555043

Chamadas escritas diretamente neste corpo: `errorLogTag`, `isPrimaryWindowIndex`, `reportHostDiagnostic`, `this.establishedForks.has`, `this.getAgentWindowIndex`, `this.inner.ensureWindow`, `this.reattachPersistedForkSeat`, `this.releaseAgentWindow`, `this.windowOptions`.

Alvos de atribuição ou incremento: `window2`.

SHA-256 do trecho: `fa72ac5b7b7a0623c8cecc6ce9f2bd10c17a61c292992c1883d3f7e16b95f32b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
