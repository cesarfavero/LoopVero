# `canListRepoSkillsForCustomMode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-custom-mode.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-custom-mode-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509919-509922](../../../../../../reference/runtime/host-main.cjs#L509919-L509922) | `FunctionDeclaration` | não | `repoUrl, readOriginPrIdentityHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509919-509922](../../../../../../reference/runtime/host-main.cjs#L509919-L509922) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509919

Chamadas escritas diretamente neste corpo: `REPO_SKILL_LISTING_PROVIDERS.has`, `detectScmProviderForRepoUrl`.

SHA-256 do trecho: `059f85b8d6473b6719aa06726465a7b6b86b311334847bb3a8c77099946482a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
