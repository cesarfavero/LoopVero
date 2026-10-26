# `portalRepoCloneUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-reference.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509110-509115](../../../../../../reference/runtime/host-main.cjs#L509110-L509115) | `FunctionDeclaration` | não | `raw, identityHosts` |
| [evaluation:556863-556868](../../../../../../reference/runtime/sand-eval-runner.cjs#L556863-L556868) | `FunctionDeclaration` | não | `raw, identityHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509110-509115](../../../../../../reference/runtime/host-main.cjs#L509110-L509115) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556863-556868](../../../../../../reference/runtime/sand-eval-runner.cjs#L556863-L556868) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:509110

Chamadas escritas diretamente neste corpo: `originRepoClonePath`, `parseOriginPortalRepoPage`, `repoReferenceAsUrl`.

SHA-256 do trecho: `3d55b13099f3549d0ceb5bb7e3ee7a67eea4840bd8a64ece0c82470187d2284c`.

### evaluation:556863

Chamadas escritas diretamente neste corpo: `originRepoClonePath`, `parseOriginPortalRepoPage`, `repoReferenceAsUrl`.

SHA-256 do trecho: `3d55b13099f3549d0ceb5bb7e3ee7a67eea4840bd8a64ece0c82470187d2284c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
