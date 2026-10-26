# `citedCloudAgentArtifacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508248-508259](../../../../../../../reference/runtime/host-main.cjs#L508248-L508259) | `FunctionDeclaration` | não | `text3, artifacts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508248-508259](../../../../../../../reference/runtime/host-main.cjs#L508248-L508259) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508248

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `artifacts.filter`, `artifacts.map`, `citedAgentStoreFilePaths`, `citedCloudAgentArtifactPaths`, `new Set`.

SHA-256 do trecho: `07d820059cac0011f2fb30e377b47ab153f4dc4b568c27e98f83a4844720cd8a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
