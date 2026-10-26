# `createOrbitDaemonSessionController/setTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705638-705657](../../../../../../../reference/runtime/host-main.cjs#L705638-L705657) | `FunctionDeclaration` | não | `next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705638-705657](../../../../../../../reference/runtime/host-main.cjs#L705638-L705657) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:705638

Chamadas escritas diretamente neste corpo: `beginRetirement`, `normalizeTarget`, `requestReconciliation`, `sameIdentity`, `sameSessionCredentials`, `sameTarget`.

Alvos de atribuição ou incremento: `state.rejectedCredentials`, `state.retryAttempt`, `state.target`.

SHA-256 do trecho: `85b0c00436d96e9a5ad9444709952aab68422488afb89eca4f610de446b08dc5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
