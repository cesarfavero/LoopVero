# `HostBox.recordImageUpdateAvailable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/host-box.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680491-680503](../../../../../../../reference/runtime/host-main.cjs#L680491-L680503) | `method` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680491-680503](../../../../../../../reference/runtime/host-main.cjs#L680491-L680503) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:680491

Chamadas escritas diretamente neste corpo: `this.lastReported.get`, `this.lastReported.keys`, `this.notify`, `this.runningStatus`, `this.vncUrls.get`.

Alvos de atribuição ou incremento: `this.imageUpdateAvailable`.

SHA-256 do trecho: `f7a24995808a72bba8dce0ec933947cd5a4f274d76c69589a8a4efae1d46ef3c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
