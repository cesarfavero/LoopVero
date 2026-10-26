# `startOrbitDaemonProxy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705377-705435](../../../../../../../reference/runtime/host-main.cjs#L705377-L705435) | `FunctionDeclaration` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705377-705435](../../../../../../../reference/runtime/host-main.cjs#L705377-L705435) | 1 | 0 | 6 | 1 | 2 | 1 |

### host:705377

Chamadas escritas diretamente neste corpo: `http22.createServer`, `listenServer`, `new OrbitDaemonProxyPathError`, `new Set`, `options2.signal.throwIfAborted`, `prepareSocketPath`, `readSocketIdentity`, `sameSocketIdentity`, `server.on`, `stop`.

Alvos de atribuição ou incremento: `server.maxConnections`, `socketIdentity`.

Alvos de lançamento explícito: `OrbitDaemonProxyPathError`, `error64`.

SHA-256 do trecho: `e7574842bc2760260707caa379ede4cae4e65922ec9c678d13ef1154f8e9cbe7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
