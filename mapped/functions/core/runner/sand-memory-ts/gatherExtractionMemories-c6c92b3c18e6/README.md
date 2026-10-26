# `gatherExtractionMemories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536316-536331](../../../../../../reference/runtime/sand-eval-runner.cjs#L536316-L536331) | `FunctionDeclaration` | não | `recall2, archive, exchangeText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536316-536331](../../../../../../reference/runtime/sand-eval-runner.cjs#L536316-L536331) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536316

Chamadas escritas diretamente neste corpo: `.map`, `archive.filter`, `inPrompt.map`, `new Set`, `selectRelevantMemories`.

SHA-256 do trecho: `c07bdf80537e6b1d22f6c3a5d44bc3d449f46ef0606adfd04820c4f978eaf5e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
