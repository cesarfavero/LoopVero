# `createOrbitDaemonSessionController/openSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705811-705866](../../../../../../../reference/runtime/host-main.cjs#L705811-L705866) | `FunctionDeclaration` | sim | `activeTarget` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705811-705866](../../../../../../../reference/runtime/host-main.cjs#L705811-L705866) | 6 | 0 | 2 | 5 | 0 | 2 |

### host:705811

Chamadas escritas diretamente neste corpo: `BigInt`, `beginRetirement`, `deps.client.openSession`, `isDefinitiveOpenFailure`, `isProtocolDivergence`, `leaseDeadlines`, `reportFailure`, `sameIdentity`, `sameSessionCredentials`, `session.close`, `sessionCredentialsOf`, `toDaemonConfiguration`.

Alvos de atribuição ou incremento: `session`, `state.currentSession`, `state.rejectedCredentials`.

SHA-256 do trecho: `ad177cb3df457ee61f844e2a7fc6ebbaad5861f7e01e22d3c41b43c75b519809`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
