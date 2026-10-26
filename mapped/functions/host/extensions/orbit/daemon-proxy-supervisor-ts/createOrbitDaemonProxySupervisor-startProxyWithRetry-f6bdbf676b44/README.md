# `createOrbitDaemonProxySupervisor/startProxyWithRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy-supervisor.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-supervisor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705574-705595](../../../../../../../reference/runtime/host-main.cjs#L705574-L705595) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705574-705595](../../../../../../../reference/runtime/host-main.cjs#L705574-L705595) | 2 | 1 | 2 | 3 | 0 | 2 |

### host:705574

Chamadas escritas diretamente neste corpo: `deps.log`, `deps.policies.startRetry.schedule`, `deps.startProxy`, `errorLogTag`.

Alvos de atribuição ou incremento: `activeProxy`, `attempt`.

SHA-256 do trecho: `bc3ea6c42744f356a3752bb332c00a9800236bd0521f24222ba95cdcef6d94c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
