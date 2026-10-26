# `createOrbitDaemonSessionController/renewSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705886-705898](../../../../../../../reference/runtime/host-main.cjs#L705886-L705898) | `FunctionDeclaration` | sim | `openSession2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705886-705898](../../../../../../../reference/runtime/host-main.cjs#L705886-L705898) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:705886

Chamadas escritas diretamente neste corpo: `handleSessionRpcFailure`, `leaseDeadlines`, `openSession2.session.renew`.

Alvos de atribuição ou incremento: `openSession2.leaseExpiresAtMonotonicMs`, `openSession2.renewAtMonotonicMs`.

SHA-256 do trecho: `4513fecdc520c9c8d6fd2c043cc39c7cbd43591b6ce21567efbb47f46a772ecc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
