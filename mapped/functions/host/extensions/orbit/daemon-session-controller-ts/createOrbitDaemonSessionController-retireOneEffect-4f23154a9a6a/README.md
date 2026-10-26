# `createOrbitDaemonSessionController/retireOneEffect`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705922-705956](../../../../../../../reference/runtime/host-main.cjs#L705922-L705956) | `FunctionDeclaration` | sim | `openSession2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705922-705956](../../../../../../../reference/runtime/host-main.cjs#L705922-L705956) | 8 | 0 | 2 | 7 | 0 | 1 |

### host:705922

Chamadas escritas diretamente neste corpo: `beginRetirement`, `closeSession`, `deps.clock.monotonicNow`, `isLostSessionError`, `isProtocolDivergence`, `reportFailure`, `sameIdentity`, `updateConfiguration`.

Alvos de atribuição ou incremento: `openSession2.retirement.disableAttempted`, `retirement.disableAttempted`.

SHA-256 do trecho: `7f4157f16bbb1abf06c05d91c955fa3814cb354b2db3e116ed2a8724201b71ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
