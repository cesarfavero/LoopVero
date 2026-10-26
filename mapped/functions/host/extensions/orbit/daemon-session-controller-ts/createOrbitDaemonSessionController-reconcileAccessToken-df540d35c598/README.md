# `createOrbitDaemonSessionController/reconcileAccessToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705867-705885](../../../../../../../reference/runtime/host-main.cjs#L705867-L705885) | `FunctionDeclaration` | sim | `openSession2, activeTarget` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705867-705885](../../../../../../../reference/runtime/host-main.cjs#L705867-L705885) | 3 | 0 | 1 | 4 | 0 | 1 |

### host:705867

Chamadas escritas diretamente neste corpo: `ConnectError.from`, `beginRetirement`, `handleSessionRpcFailure`, `sameSessionCredentials`, `sessionCredentialsOf`, `updateAccessToken`.

Alvos de atribuição ou incremento: `state.rejectedCredentials`.

SHA-256 do trecho: `572e123f4784d8c7bf1c8368e6df988fd5583e9dbb671cb2f9b0fb892ec9061a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
