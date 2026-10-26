# `HostBox.releaseWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/host-box.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680575-680587](../../../../../../../reference/runtime/host-main.cjs#L680575-L680587) | `method` | sim | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680575-680587](../../../../../../../reference/runtime/host-main.cjs#L680575-L680587) | 1 | 0 | 1 | 1 | 0 | 1 |

### host:680575

Chamadas escritas diretamente neste corpo: `this.connectionEpochs.delete`, `this.connectionEpochs.get`, `this.forkVncUrls.delete`, `this.inner.releaseWindow`, `this.lastReported.delete`, `this.notify`, `this.vncUrls.delete`.

SHA-256 do trecho: `a6a360e4e191e7863fd5959c3a66bcd165007969c4959a658abde418e7201580`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
