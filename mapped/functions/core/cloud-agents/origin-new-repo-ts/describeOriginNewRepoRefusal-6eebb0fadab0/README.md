# `describeOriginNewRepoRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-new-repo.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-new-repo-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513850-513855](../../../../../../reference/runtime/host-main.cjs#L513850-L513855) | `FunctionDeclaration` | não | `error64, target, readPortalBaseUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513850-513855](../../../../../../reference/runtime/host-main.cjs#L513850-L513855) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:513850

Chamadas escritas diretamente neste corpo: `new SandCloudAgentLaunchError`, `originGetStartedUrl`, `refusalMessage`.

SHA-256 do trecho: `95b62848193fdf10bff42e1376591603b512a752269a34de3969be302e77bedf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
