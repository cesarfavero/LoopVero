# `OnePasswordBrokerBridge.probeApiState`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549889-549914](../../../../../../../reference/runtime/host-main.cjs#L549889-L549914) | `method` | sim | `cdpPort` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549889-549914](../../../../../../../reference/runtime/host-main.cjs#L549889-L549914) | 2 | 0 | 2 | 4 | 0 | 1 |

### host:549889

Chamadas escritas diretamente neste corpo: `apiStateOf`, `apiStatePrelude`, `decodeJson`, `errorLogTag`, `evaluateOnTarget2`, `this.findServiceWorker`, `this.noteApiState`, `this.options.log`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `dc0ad9c781739a89ac1d9fd009eb32b88042d7f9623b1c7aef46f788e7e21028`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
