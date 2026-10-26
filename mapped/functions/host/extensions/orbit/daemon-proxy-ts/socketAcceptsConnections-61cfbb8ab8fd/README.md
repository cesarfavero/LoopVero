# `socketAcceptsConnections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705467-705496](../../../../../../../reference/runtime/host-main.cjs#L705467-L705496) | `FunctionDeclaration` | sim | `path33, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705467-705496](../../../../../../../reference/runtime/host-main.cjs#L705467-L705496) | 1 | 0 | 1 | 1 | 2 | 1 |

### host:705467

Chamadas escritas diretamente neste corpo: `new OrbitDaemonProxyPathError`, `new Promise`, `socket.destroy`, `socketProbeDeadline.run`.

Alvos de lançamento explícito: `OrbitDaemonProxyPathError`, `error64`.

SHA-256 do trecho: `a7fe70724e12dc6c9a87c82d910baee9e6728ed387dcc8c0dbc607a7066a6dbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
