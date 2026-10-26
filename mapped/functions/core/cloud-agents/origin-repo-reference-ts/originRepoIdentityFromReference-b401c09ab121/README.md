# `originRepoIdentityFromReference`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-reference.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509154-509166](../../../../../../reference/runtime/host-main.cjs#L509154-L509166) | `FunctionDeclaration` | não | `raw, readOriginPrIdentityHosts` |
| [evaluation:556879-556891](../../../../../../reference/runtime/sand-eval-runner.cjs#L556879-L556891) | `FunctionDeclaration` | não | `raw, readOriginPrIdentityHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509154-509166](../../../../../../reference/runtime/host-main.cjs#L509154-L509166) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556879-556891](../../../../../../reference/runtime/sand-eval-runner.cjs#L556879-L556891) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:509154

Chamadas escritas diretamente neste corpo: `originPrIdentityHostsFor`, `parseOriginPortalRepoPage`, `parseOriginRepoCloneUrl`, `raw.trim`, `repoReferenceAsUrl`.

SHA-256 do trecho: `db73056c13eef1141925d8bd28252bdc3b933fd9af484769aa88d08ae16abaec`.

### evaluation:556879

Chamadas escritas diretamente neste corpo: `originPrIdentityHostsFor`, `parseOriginPortalRepoPage`, `parseOriginRepoCloneUrl`, `raw.trim`, `repoReferenceAsUrl`.

SHA-256 do trecho: `db73056c13eef1141925d8bd28252bdc3b933fd9af484769aa88d08ae16abaec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
