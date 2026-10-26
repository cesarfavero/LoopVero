# `describeScmConnectBlocker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509326-509397](../../../../../../../reference/runtime/host-main.cjs#L509326-L509397) | `FunctionDeclaration` | sim | `{   provider,   rejection,   knownIntent,   isConnected,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |
| [evaluation:557051-557122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557051-L557122) | `FunctionDeclaration` | sim | `{   provider,   rejection,   knownIntent,   isConnected,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509326-509397](../../../../../../../reference/runtime/host-main.cjs#L509326-L509397) | 19 | 1 | 1 | 5 | 0 | 0 |
| [evaluation:557051-557122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557051-L557122) | 19 | 1 | 1 | 5 | 0 | 0 |

### host:509326

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `describeOriginBlocker`, `errorClassOf`, `githubRepoSlugFromUrl`, `isRepoAccessShapedRejection`, `isScmNotConnectedShapedRejection`, `isScmReconnectShapedRejection`, `probeTargets.map`, `reportHostDiagnostic`, `requestExample`.

Alvos de atribuição ou incremento: `hasConnectedProvider`, `leadSentence`, `sawFulfilledProbe`.

SHA-256 do trecho: `ce1d5f477adb2bcb08c78bba8d44c5e82c5d16456bea03d427fe0167b2e27fb6`.

### evaluation:557051

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `describeOriginBlocker`, `errorClassOf`, `githubRepoSlugFromUrl`, `isRepoAccessShapedRejection`, `isScmNotConnectedShapedRejection`, `isScmReconnectShapedRejection`, `probeTargets.map`, `reportHostDiagnostic`, `requestExample`.

Alvos de atribuição ou incremento: `hasConnectedProvider`, `leadSentence`, `sawFulfilledProbe`.

SHA-256 do trecho: `ce1d5f477adb2bcb08c78bba8d44c5e82c5d16456bea03d427fe0167b2e27fb6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
