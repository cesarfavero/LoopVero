# `originRepoPortalUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-reference.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509141-509153](../../../../../../reference/runtime/host-main.cjs#L509141-L509153) | `FunctionDeclaration` | não | `repo, portalHostnames = ORIGIN_PORTAL_HOSTNAMES, readOriginPrIdentityHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509141-509153](../../../../../../reference/runtime/host-main.cjs#L509141-L509153) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:509141

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `encodeURIComponent`, `originPrIdentityHostsFor`, `parseOriginPortalRepoPage`, `repoReferenceAsUrl`.

SHA-256 do trecho: `62f2c96675f1546fe28f0d598ea03945b6cba3fa26733374a3e1a989cb9ddc4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
