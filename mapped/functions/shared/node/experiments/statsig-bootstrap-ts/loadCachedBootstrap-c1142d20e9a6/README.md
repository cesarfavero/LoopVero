# `loadCachedBootstrap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/statsig-bootstrap.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552464-552491](../../../../../../../reference/runtime/host-main.cjs#L552464-L552491) | `FunctionDeclaration` | não | `cacheDir, read2 = readUtf8` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552464-552491](../../../../../../../reference/runtime/host-main.cjs#L552464-L552491) | 7 | 0 | 0 | 5 | 0 | 1 |

### host:552464

Chamadas escritas diretamente neste corpo: `JSON.parse`, `Number.isFinite`, `bootstrapCachePath`, `errorLogTag`, `read2`, `reportExperimentsDiagnostic`.

SHA-256 do trecho: `304a0d0495aacbbd70a2b617da8668a1570393cb8aca1447e2a5eeed57175a24`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
