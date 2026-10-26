# `HostBox.recordConnection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/host-box.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680484-680490](../../../../../../../reference/runtime/host-main.cjs#L680484-L680490) | `method` | não | `agentId, connection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680484-680490](../../../../../../../reference/runtime/host-main.cjs#L680484-L680490) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:680484

Chamadas escritas diretamente neste corpo: `this.connectionEpochs.get`, `this.connectionEpochs.set`, `this.vncUrls.set`.

Alvos de atribuição ou incremento: `this.imageUpdateAvailable`.

SHA-256 do trecho: `d798216179acfaffbc0e21e896c7f9b836c09b7ef68c78d2c062d76d8bf4283c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
