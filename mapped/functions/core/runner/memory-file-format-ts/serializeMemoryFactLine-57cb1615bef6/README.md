# `serializeMemoryFactLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-file-format.ts` · [README do módulo](../../../../../modules/core/runner/memory-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702780-702784](../../../../../../reference/runtime/host-main.cjs#L702780-L702784) | `FunctionDeclaration` | não | `content, createdAt, provenance` |
| [evaluation:536524-536528](../../../../../../reference/runtime/sand-eval-runner.cjs#L536524-L536528) | `FunctionDeclaration` | não | `content, createdAt, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702780-702784](../../../../../../reference/runtime/host-main.cjs#L702780-L702784) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536524-536528](../../../../../../reference/runtime/sand-eval-runner.cjs#L536524-L536528) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702780

Chamadas escritas diretamente neste corpo: `formatMemoryDate`, `serializeMemoryProvenanceLine`.

SHA-256 do trecho: `8a2019c276624c804bb3f2591608011cf6bf457f309a75c14c24e0d4133e1838`.

### evaluation:536524

Chamadas escritas diretamente neste corpo: `formatMemoryDate`, `serializeMemoryProvenanceLine`.

SHA-256 do trecho: `8a2019c276624c804bb3f2591608011cf6bf457f309a75c14c24e0d4133e1838`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
