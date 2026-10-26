# `LoopbackSandBox.loadMcpServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679297-679301](../../../../../../reference/runtime/host-main.cjs#L679297-L679301) | `method` | sim | `ctx, configJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679297-679301](../../../../../../reference/runtime/host-main.cjs#L679297-L679301) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:679297

Chamadas escritas diretamente neste corpo: `createBoxTransport`, `loadBoxMcpServersViaTransport`, `this.primaryEndpoint`, `this.waitUntilReady`.

SHA-256 do trecho: `06a547985c5a2d75b12641958737dac72272da0564b446d1df137cff4b3b6a44`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
