# `LoopbackSandBox.waitUntilReady`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679464-679475](../../../../../../reference/runtime/host-main.cjs#L679464-L679475) | `method` | sim | `ctx, endpoint, timeoutMs = this.readyTimeoutMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679464-679475](../../../../../../reference/runtime/host-main.cjs#L679464-L679475) | 1 | 0 | 3 | 2 | 0 | 0 |

### host:679464

Chamadas escritas diretamente neste corpo: `this.waitUntilReadyUncoordinated`.

Alvos de atribuição ou incremento: `this.daemonForegroundReadyWaits`.

SHA-256 do trecho: `cbf9b1411b343453b0e8f617e259fadc69a0ae41db707a312885e147f220dccd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
