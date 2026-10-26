# `describeOriginBlocker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509300-509325](../../../../../../../reference/runtime/host-main.cjs#L509300-L509325) | `FunctionDeclaration` | não | `{   rejection,   knownIntent,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |
| [evaluation:557025-557050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557025-L557050) | `FunctionDeclaration` | não | `{   rejection,   knownIntent,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509300-509325](../../../../../../../reference/runtime/host-main.cjs#L509300-L509325) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:557025-557050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557025-L557050) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:509300

Chamadas escritas diretamente neste corpo: `/create an origin namespace|no origin namespace/i.test`, `/origin is (turned|switched) off for (this|your|the) team|origin (is )?disabled for (this|your|the) team/i.test`, `describeOriginAccessBlocker`, `isRepoAccessShapedRejection`, `originRepoIdentityFromReference`.

SHA-256 do trecho: `36e8a2fe90c6964268bdc57694b402ab6c3ea1f84db331a1a20b6dd023cebf77`.

### evaluation:557025

Chamadas escritas diretamente neste corpo: `/create an origin namespace|no origin namespace/i.test`, `/origin is (turned|switched) off for (this|your|the) team|origin (is )?disabled for (this|your|the) team/i.test`, `describeOriginAccessBlocker`, `isRepoAccessShapedRejection`, `originRepoIdentityFromReference`.

SHA-256 do trecho: `36e8a2fe90c6964268bdc57694b402ab6c3ea1f84db331a1a20b6dd023cebf77`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
