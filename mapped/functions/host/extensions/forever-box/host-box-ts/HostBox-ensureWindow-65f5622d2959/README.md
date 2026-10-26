# `HostBox.ensureWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/host-box.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680554-680574](../../../../../../../reference/runtime/host-main.cjs#L680554-L680574) | `method` | sim | `ctx, agentId, windowIndex, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680554-680574](../../../../../../../reference/runtime/host-main.cjs#L680554-L680574) | 4 | 0 | 2 | 1 | 1 | 0 |

### host:680554

Chamadas escritas diretamente neste corpo: `forks.set`, `isPrimaryWindowIndex`, `new Map`, `new SandBoxCapabilityError2`, `this.ensureReady`, `this.forkVncUrls.get`, `this.forkVncUrls.set`, `this.inner.ensureWindow`, `this.notify`, `this.runningStatus`, `this.vncUrls.get`, `this.vncUrls.has`, `this.vncUrls.set`.

Alvos de atribuição ou incremento: `forks`.

Alvos de lançamento explícito: `SandBoxCapabilityError2`.

SHA-256 do trecho: `3d7cf27d628e040f79f588035f568056c8ac0b0847752ede1151df26c11f53ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
