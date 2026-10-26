# `listRepoSkillsBounded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512866-512885](../../../../../../reference/runtime/host-main.cjs#L512866-L512885) | `FunctionDeclaration` | sim | `dashboard, repoUrl, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512866-512885](../../../../../../reference/runtime/host-main.cjs#L512866-L512885) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:512866

Chamadas escritas diretamente neste corpo: `Date.now`, `customModeListingDeadline.run`, `process.stderr.write`.

SHA-256 do trecho: `809f202809045ea99882374b0bc7f5e9cd9364168b50d618baf1949071e8edf6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
