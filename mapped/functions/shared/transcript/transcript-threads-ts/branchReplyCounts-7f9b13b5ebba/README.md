# `branchReplyCounts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/transcript-threads.ts` · [README do módulo](../../../../../modules/shared/transcript/transcript-threads-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490390-490399](../../../../../../reference/runtime/host-main.cjs#L490390-L490399) | `FunctionDeclaration` | não | `branched` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490390-490399](../../../../../../reference/runtime/host-main.cjs#L490390-L490399) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:490390

Chamadas escritas diretamente neste corpo: `branched.map`, `counts.get`, `counts.set`, `new Map`, `resolveBranchRoot2`.

SHA-256 do trecho: `1e92d35afd0f3e920d1bc018e3505c1eb571fef195c9a6ff9c396e31c83d0683`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
