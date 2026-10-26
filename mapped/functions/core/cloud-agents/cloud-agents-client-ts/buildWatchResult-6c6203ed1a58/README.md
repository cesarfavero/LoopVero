# `buildWatchResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512628-512676](../../../../../../reference/runtime/host-main.cjs#L512628-L512676) | `FunctionDeclaration` | não | `bcId, status, detailed, report, readPortalBaseUrl, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512628-512676](../../../../../../reference/runtime/host-main.cjs#L512628-L512676) | 12 | 0 | 0 | 2 | 0 | 0 |

### host:512628

Chamadas escritas diretamente neste corpo: `cloudAgentUrl`, `formatDiffStats`, `groupPrs`, `lines2.join`, `lines2.push`, `lines3.join`, `lines3.push`, `quote3`, `report.trim`, `resolveSandLimitError`, `threadPrs.map`, `threadsNewestFirst.filter`.

SHA-256 do trecho: `f8f33931260c49f4e4966971056d604a9b0c61bc39727987567bda9f6665f6f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
